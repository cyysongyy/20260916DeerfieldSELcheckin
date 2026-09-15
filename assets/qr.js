/* 極簡 QR Code 產生器 (byte mode, ECC-M, version 1-10) — 無外部相依
   用法： QR.render(el, text, {size:260, dark:'#1b2430', light:'#ffffff', quiet:4}) */
(function (global) {
  'use strict';

  // ---- GF(256) ----
  var EXP = new Uint8Array(512), LOG = new Uint8Array(256);
  (function () {
    var x = 1;
    for (var i = 0; i < 255; i++) { EXP[i] = x; LOG[x] = i; x <<= 1; if (x & 0x100) x ^= 0x11d; }
    for (var j = 255; j < 512; j++) EXP[j] = EXP[j - 255];
  })();
  function gmul(a, b) { return (a === 0 || b === 0) ? 0 : EXP[LOG[a] + LOG[b]]; }

  function rsPoly(n) {
    var poly = [1];
    for (var i = 0; i < n; i++) {
      var next = new Array(poly.length + 1).fill(0);
      for (var j = 0; j < poly.length; j++) {
        next[j] ^= poly[j];
        next[j + 1] ^= gmul(poly[j], EXP[i]);
      }
      poly = next;
    }
    return poly;
  }
  function rsEncode(data, ecLen) {
    var gen = rsPoly(ecLen), res = new Array(data.length + ecLen).fill(0);
    for (var i = 0; i < data.length; i++) res[i] = data[i];
    for (var i2 = 0; i2 < data.length; i2++) {
      var factor = res[i2];
      if (factor === 0) continue;
      for (var j = 0; j < gen.length; j++) res[i2 + j] ^= gmul(gen[j], factor);
    }
    return res.slice(data.length);
  }

  // ---- 版本表 (ECC level M) : [ecPerBlock, g1Blocks, g1Data, g2Blocks, g2Data] ----
  var VER = {
    1: [10, 1, 16, 0, 0], 2: [16, 1, 28, 0, 0], 3: [26, 1, 44, 0, 0],
    4: [18, 2, 32, 0, 0], 5: [24, 2, 43, 0, 0], 6: [16, 4, 27, 0, 0],
    7: [18, 4, 31, 0, 0], 8: [22, 2, 38, 2, 39], 9: [22, 3, 36, 2, 37],
    10: [26, 4, 43, 1, 44]
  };
  var ALIGN = {
    1: [], 2: [6, 18], 3: [6, 22], 4: [6, 26], 5: [6, 30], 6: [6, 34],
    7: [6, 22, 38], 8: [6, 24, 42], 9: [6, 26, 46], 10: [6, 28, 50]
  };

  function utf8Bytes(str) {
    var out = [], i, c;
    for (i = 0; i < str.length; i++) {
      c = str.charCodeAt(i);
      if (c < 0x80) out.push(c);
      else if (c < 0x800) { out.push(0xc0 | (c >> 6), 0x80 | (c & 63)); }
      else if (c >= 0xd800 && c <= 0xdbff && i + 1 < str.length) {
        var c2 = str.charCodeAt(++i);
        var cp = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        out.push(0xf0 | (cp >> 18), 0x80 | ((cp >> 12) & 63), 0x80 | ((cp >> 6) & 63), 0x80 | (cp & 63));
      } else { out.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 63), 0x80 | (c & 63)); }
    }
    return out;
  }

  function pickVersion(len) {
    for (var v = 1; v <= 10; v++) {
      var t = VER[v];
      var dataCw = t[1] * t[2] + t[3] * t[4];
      var lenBits = v <= 9 ? 8 : 16;
      if (dataCw * 8 >= 4 + lenBits + len * 8) return v;
    }
    throw new Error('QR: 內容過長');
  }

  function buildCodewords(bytes, ver) {
    var t = VER[ver], ecLen = t[0];
    var dataCw = t[1] * t[2] + t[3] * t[4];
    var lenBits = ver <= 9 ? 8 : 16;
    var bits = [];
    function push(val, n) { for (var i = n - 1; i >= 0; i--) bits.push((val >> i) & 1); }
    push(4, 4); push(bytes.length, lenBits);
    for (var i = 0; i < bytes.length; i++) push(bytes[i], 8);
    var rem = dataCw * 8 - bits.length;
    push(0, Math.min(4, rem));
    while (bits.length % 8) bits.push(0);
    var cw = [];
    for (var b = 0; b < bits.length; b += 8) {
      var v = 0; for (var k = 0; k < 8; k++) v = (v << 1) | bits[b + k];
      cw.push(v);
    }
    var pads = [0xec, 0x11], p = 0;
    while (cw.length < dataCw) { cw.push(pads[p]); p ^= 1; }

    // split into blocks
    var blocks = [], idx = 0, i2;
    for (i2 = 0; i2 < t[1]; i2++) { blocks.push(cw.slice(idx, idx + t[2])); idx += t[2]; }
    for (i2 = 0; i2 < t[3]; i2++) { blocks.push(cw.slice(idx, idx + t[4])); idx += t[4]; }
    var ecBlocks = blocks.map(function (bl) { return rsEncode(bl, ecLen); });

    var out = [], maxLen = Math.max(t[2], t[4] || 0), j;
    for (j = 0; j < maxLen; j++) for (i2 = 0; i2 < blocks.length; i2++) if (j < blocks[i2].length) out.push(blocks[i2][j]);
    for (j = 0; j < ecLen; j++) for (i2 = 0; i2 < ecBlocks.length; i2++) out.push(ecBlocks[i2][j]);
    return out;
  }

  function makeMatrix(ver) {
    var n = ver * 4 + 17;
    var m = [], reserved = [], i, j;
    for (i = 0; i < n; i++) { m.push(new Array(n).fill(0)); reserved.push(new Array(n).fill(0)); }
    function finder(r, c) {
      for (var dr = -1; dr <= 7; dr++) for (var dc = -1; dc <= 7; dc++) {
        var rr = r + dr, cc = c + dc;
        if (rr < 0 || cc < 0 || rr >= n || cc >= n) continue;
        var on = (dr >= 0 && dr <= 6 && (dc === 0 || dc === 6)) ||
                 (dc >= 0 && dc <= 6 && (dr === 0 || dr === 6)) ||
                 (dr >= 2 && dr <= 4 && dc >= 2 && dc <= 4);
        m[rr][cc] = on ? 1 : 0; reserved[rr][cc] = 1;
      }
    }
    finder(0, 0); finder(0, n - 7); finder(n - 7, 0);
    for (i = 8; i < n - 8; i++) {
      var bit = (i % 2 === 0) ? 1 : 0;
      m[6][i] = bit; reserved[6][i] = 1;
      m[i][6] = bit; reserved[i][6] = 1;
    }
    var ap = ALIGN[ver];
    for (i = 0; i < ap.length; i++) for (j = 0; j < ap.length; j++) {
      var r = ap[i], c = ap[j];
      // 只跳過與三個定位圖樣重疊的中心點（與 timing 線重疊者仍要畫）
      if ((r < 9 && c < 9) || (r < 9 && c > n - 10) || (r > n - 10 && c < 9)) continue;
      for (var dr2 = -2; dr2 <= 2; dr2++) for (var dc2 = -2; dc2 <= 2; dc2++) {
        var on2 = Math.max(Math.abs(dr2), Math.abs(dc2)) !== 1;
        m[r + dr2][c + dc2] = on2 ? 1 : 0; reserved[r + dr2][c + dc2] = 1;
      }
    }
    m[n - 8][8] = 1; reserved[n - 8][8] = 1;                     // dark module
    for (i = 0; i <= 8; i++) { if (!reserved[8][i]) reserved[8][i] = 2; if (!reserved[i][8]) reserved[i][8] = 2; }
    for (i = 0; i < 8; i++) { reserved[8][n - 1 - i] = 2; reserved[n - 1 - i][8] = 2; }
    if (ver >= 7) {
      for (i = 0; i < 6; i++) for (j = 0; j < 3; j++) { reserved[i][n - 11 + j] = 3; reserved[n - 11 + j][i] = 3; }
    }
    return { m: m, reserved: reserved, n: n };
  }

  function placeData(g, cw) {
    var n = g.n, m = g.m, res = g.reserved;
    var bits = [];
    for (var i = 0; i < cw.length; i++) for (var b = 7; b >= 0; b--) bits.push((cw[i] >> b) & 1);
    var bi = 0, up = true, col = n - 1;
    while (col > 0) {
      if (col === 6) col--;
      for (var k = 0; k < n; k++) {
        var row = up ? n - 1 - k : k;
        for (var c2 = 0; c2 < 2; c2++) {
          var cc = col - c2;
          if (res[row][cc]) continue;
          m[row][cc] = bi < bits.length ? bits[bi] : 0; bi++;
        }
      }
      up = !up; col -= 2;
    }
  }

  function maskFn(k, r, c) {
    switch (k) {
      case 0: return (r + c) % 2 === 0;
      case 1: return r % 2 === 0;
      case 2: return c % 3 === 0;
      case 3: return (r + c) % 3 === 0;
      case 4: return (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0;
      case 5: return ((r * c) % 2) + ((r * c) % 3) === 0;
      case 6: return (((r * c) % 2) + ((r * c) % 3)) % 2 === 0;
      default: return (((r + c) % 2) + ((r * c) % 3)) % 2 === 0;
    }
  }

  function fmtBits(mask) {
    // ECC M = 0b00
    var data = (0 << 3) | mask;
    var v = data << 10;
    for (var i = 14; i >= 10; i--) if ((v >> i) & 1) v ^= 0x537 << (i - 10);
    return ((data << 10) | v) ^ 0x5412;
  }
  function verBits(ver) {
    var v = ver << 12;
    for (var i = 17; i >= 12; i--) if ((v >> i) & 1) v ^= 0x1f25 << (i - 12);
    return (ver << 12) | v;
  }

  function applyFormat(g, mask, ver) {
    var n = g.n, m = g.m, f = fmtBits(mask), i, bit;
    for (i = 0; i < 15; i++) {
      bit = (f >> i) & 1;
      // copy 1
      if (i < 6) m[i][8] = bit;
      else if (i < 8) m[i + 1][8] = bit;
      else if (i === 8) m[8][7] = bit;
      else m[8][14 - i] = bit;
      // copy 2
      if (i < 8) m[8][n - 1 - i] = bit;
      else m[n - 15 + i][8] = bit;
    }
    m[n - 8][8] = 1; // dark module
    if (ver >= 7) {
      var vb = verBits(ver);
      for (i = 0; i < 18; i++) {
        var vbit = (vb >> i) & 1, r = Math.floor(i / 3), c = i % 3;
        m[r][n - 11 + c] = vbit; m[n - 11 + c][r] = vbit;
      }
    }
  }

  function penalty(m, n) {
    var p = 0, i, j, run, dark = 0;
    for (i = 0; i < n; i++) {
      run = 1;
      for (j = 1; j < n; j++) {
        if (m[i][j] === m[i][j - 1]) { run++; } else { if (run >= 5) p += 3 + (run - 5); run = 1; }
      }
      if (run >= 5) p += 3 + (run - 5);
      run = 1;
      for (j = 1; j < n; j++) {
        if (m[j][i] === m[j - 1][i]) { run++; } else { if (run >= 5) p += 3 + (run - 5); run = 1; }
      }
      if (run >= 5) p += 3 + (run - 5);
    }
    for (i = 0; i < n - 1; i++) for (j = 0; j < n - 1; j++) {
      var s = m[i][j] + m[i][j + 1] + m[i + 1][j] + m[i + 1][j + 1];
      if (s === 0 || s === 4) p += 3;
    }
    var pat = [1, 0, 1, 1, 1, 0, 1];
    function hasPat(arr, s) {
      for (var k = 0; k < 7; k++) if (arr[s + k] !== pat[k]) return false;
      var before = true, after = true, t;
      for (t = s - 4; t < s; t++) if (t < 0 || arr[t] !== 0) { before = false; break; }
      for (t = s + 7; t < s + 11; t++) if (t >= arr.length || arr[t] !== 0) { after = false; break; }
      return before || after;
    }
    for (i = 0; i < n; i++) {
      var rowArr = m[i], colArr = [];
      for (j = 0; j < n; j++) colArr.push(m[j][i]);
      for (j = 0; j + 7 <= n; j++) { if (hasPat(rowArr, j)) p += 40; if (hasPat(colArr, j)) p += 40; }
    }
    for (i = 0; i < n; i++) for (j = 0; j < n; j++) dark += m[i][j];
    var pct = dark * 100 / (n * n);
    p += Math.floor(Math.abs(pct - 50) / 5) * 10;
    return p;
  }

  function encode(text) {
    var bytes = utf8Bytes(text);
    var ver = pickVersion(bytes.length);
    var cw = buildCodewords(bytes, ver);
    var best = null;
    for (var mask = 0; mask < 8; mask++) {
      var g = makeMatrix(ver);
      placeData(g, cw);
      for (var r = 0; r < g.n; r++) for (var c = 0; c < g.n; c++) {
        if (g.reserved[r][c] === 1 || g.reserved[r][c] === 3) continue;
        if (g.reserved[r][c] === 2) continue;
        if (maskFn(mask, r, c)) g.m[r][c] ^= 1;
      }
      applyFormat(g, mask, ver);
      var p = penalty(g.m, g.n);
      if (!best || p < best.p) best = { p: p, m: g.m, n: g.n };
    }
    return best;
  }

  function render(el, text, opt) {
    opt = opt || {};
    var size = opt.size || 240, quiet = opt.quiet == null ? 4 : opt.quiet;
    var dark = opt.dark || '#16202b', light = opt.light || '#ffffff';
    var q;
    try { q = encode(text); } catch (e) {
      el.innerHTML = '<div style="font:13px sans-serif;color:#900">QR 產生失敗</div>'; return;
    }
    var total = q.n + quiet * 2;
    var cv = document.createElement('canvas');
    var dpr = Math.min(3, global.devicePixelRatio || 1);
    var px = Math.max(1, Math.floor((size / total) * dpr));
    cv.width = cv.height = px * total;
    cv.style.width = cv.style.height = size + 'px';
    cv.style.borderRadius = '10px';
    var ctx = cv.getContext('2d');
    ctx.fillStyle = light; ctx.fillRect(0, 0, cv.width, cv.height);
    ctx.fillStyle = dark;
    for (var r = 0; r < q.n; r++) for (var c = 0; c < q.n; c++) {
      if (q.m[r][c]) ctx.fillRect((c + quiet) * px, (r + quiet) * px, px, px);
    }
    el.innerHTML = ''; el.appendChild(cv);
    return cv;
  }

  global.QR = { render: render, encode: encode };
})(window);
