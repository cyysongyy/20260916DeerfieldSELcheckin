/* SEL Check-in 導航員 · 鹿場國小 3 小時工作坊
   架構：BEFORE（辰光SEL）▸ MINDSET（I DO）▸ SKILLSET（YOU DO）▸ TOOLSET（WE DO）▸ 整合與承諾 */
var SLIDES = [

/* ========== 開場 CHECK-IN ========== */
{t:'CHECK-IN 1 · 你現在是什麼顏色？', part:'開場 CHECK-IN', time:'00:00', sec:true, html:
'<div class="eyebrow">CHECK-IN 1 · Post it and share!</div>'+
'<h2 class="h-slide">🌡️ 閉上眼睛，感受一下 —— 此刻，你的內心是哪種溫度？</h2>'+
'<p class="sub">請不要挑「應該有的顏色」，挑「真正有的顏色」。不用解釋，只要感受。</p>'+
'<div class="rule"></div>'+
'<div class="colors">'+
'<div class="col r"><div class="e">😠</div><h4>紅 · 生氣</h4><small>燥熱｜覺得被侵犯、<br>很不公平、想發火</small></div>'+
'<div class="col y"><div class="e">😰</div><h4>黃 · 焦慮</h4><small>溫熱｜心跳快、<br>腦袋停不下來</small></div>'+
'<div class="col b"><div class="e">😢</div><h4>藍 · 難過</h4><small>寒冷｜失落、沒勁、<br>只想安靜</small></div>'+
'<div class="col g"><div class="e">😊</div><h4>綠 · 平靜</h4><small>舒適｜安全、有餘裕、<br>最佳學習狀態</small></div>'+
'</div>'+
'<div class="note">💬 <b>活動：</b>舉手，或在便利貼上寫下你此刻的顏色 —— 不用解釋，只要感受。<br>'+
'這是今天的第一個動作，也是今天要教的整套方法的第一步。</div>'},

{t:'關卡①：用你的顏色找到組員', part:'開場 CHECK-IN', time:'00:03', html:
'<div class="kicker"><span class="tag" style="background:#e4f6ee;color:var(--reflect-d)">GAME 01 · 約 5 分鐘</span></div>'+
'<h2 class="h-slide">掃碼 ▸ 選一個顏色 ▸ 拿到你今天的組別</h2>'+
'<p class="sub">今天的分組，就從一次真實的 Check-in 開始 —— 因為分組這件事本來就要做，順便讓它變成一次情緒覺察，成本是零。</p>'+
'<div class="rule"></div>'+
'<div class="qrpage">'+
'<div class="qrbox" data-qr="g1.html"><div class="qrimg"></div><div class="u"></div><a class="go" href="#" target="_blank">直接開啟</a></div>'+
'<div>'+
'<ul class="bul">'+
'<li><b>異色組（預設）</b>：系統盡量讓每組四種顏色都有人。真實的班級本來就是四種顏色混在一起的。</li>'+
'<li><b>組名來自七大品格</b>：堅毅、樂觀、熱情、自制、感恩、社交智慧、好奇心。</li>'+
'<li><b>破冰題會自動出現</b>：組內每人 30 秒回答，不要跳過 —— 這就是「圍圈」的最小版本。</li>'+
'<li><b>裡面還有兩個工具</b>：主持人分組器（貼名單一鍵洗牌）、班級溫度統計（輸入各色人數，直接告訴你該用哪顆膠囊）。</li>'+
'</ul>'+
'<div class="note green">同一支程式可以直接拿去分班上的組。<b>把研習教具變成班級教具</b>，是最省力的一種備課。</div>'+
'</div></div>'},

{t:'CHECK-IN 2 · 桌下的那顆按鈕', part:'開場 CHECK-IN', time:'00:09', html:
'<div class="eyebrow">CHECK-IN 2 · Share in group!</div>'+
'<h2 class="h-slide">🌡️ 如果桌子下面有一顆按鈕，可以幫你達成此刻的願望⋯⋯</h2>'+
'<p class="sub">你會按嗎？你想許什麼願？—— 在剛剛的組內，每人 30 秒。說完之後，再選一次你的顏色。</p>'+
'<div class="rule"></div>'+
'<div class="colors">'+
'<div class="col r"><div class="e">😠</div><h4>紅</h4><small>我想改變一件<br>不公平的事</small></div>'+
'<div class="col y"><div class="e">😰</div><h4>黃</h4><small>我想讓某件事<br>順利過關</small></div>'+
'<div class="col b"><div class="e">😢</div><h4>藍</h4><small>我想要一段<br>安靜的時間</small></div>'+
'<div class="col g"><div class="e">😊</div><h4>綠</h4><small>我想把好心情<br>分給某個人</small></div>'+
'</div>'+
'<div class="note blue">為什麼要做兩次 Check-in？因為<b>第一次是個人的，第二次是團體的</b>。'+
'第一次讓你「知道自己在哪」，第二次讓你「被別人看見」—— 這正是等一下要講的 Reset 與 Relate。'+
'你們剛剛已經完整走過一次今天要教的東西了。</div>'},

{t:'封面', part:'開場 CHECK-IN', time:'00:12', html:
'<div style="min-height:62vh;display:grid;align-content:center">'+
'<div class="eyebrow">115 學年度 · 鹿場國小教師專業成長工作坊</div>'+
'<h1 style="font-size:clamp(2rem,5vw,3.9rem);font-weight:900;letter-spacing:-.035em;line-height:1.08">'+
'SEL <span style="color:var(--dawn)">CHECK-IN</span> 導航員'+
'<span style="display:block;font-size:.42em;font-weight:800;color:var(--muted);letter-spacing:.02em;margin-top:.5em">狀態先於內容 —— 一鍵啟動班級的最佳學習頻率</span></h1>'+
'<div class="rule"></div>'+
'<div class="grid g3" style="margin:6px 0 18px">'+
'<div class="qc energy" style="padding:.9em 1.1em"><h4><span class="ico">🌱</span>MINDSET</h4><p style="margin:0">為什麼要花那一分鐘</p></div>'+
'<div class="qc mindful" style="padding:.9em 1.1em"><h4><span class="ico">🎨</span>SKILLSET</h4><p style="margin:0">四色語言 × 四顆膠囊</p></div>'+
'<div class="qc reflect" style="padding:.9em 1.1em"><h4><span class="ico">🧰</span>TOOLSET</h4><p style="margin:0">一日導航與我的第一週</p></div>'+
'</div>'+
'<div class="grid g4">'+
'<div class="card" style="padding:1em"><div class="tag">主講</div><div style="font-weight:900;margin-top:.4em">陳彥揚 校長</div><div style="font-size:.85em;color:var(--muted)">雲林縣辰光國小</div></div>'+
'<div class="card" style="padding:1em"><div class="tag">日期</div><div style="font-weight:900;margin-top:.4em">2026 / 09 / 16</div><div style="font-size:.85em;color:var(--muted)">共 3 小時</div></div>'+
'<div class="card" style="padding:1em"><div class="tag">對象</div><div style="font-weight:900;margin-top:.4em">全校教師</div><div style="font-size:.85em;color:var(--muted)">導師 · 科任 · 行政</div></div>'+
'<div class="card" style="padding:1em"><div class="tag">形式</div><div style="font-weight:900;margin-top:.4em">講述 × 手機遊戲</div><div style="font-size:.85em;color:var(--muted)">3 活動 · 2 關卡</div></div>'+
'</div>'+
'<div class="note">請把手機拿出來放在桌上，今天你會用到它兩次。<b>不用安裝任何 App</b>，掃 QR Code 就好。</div>'+
'</div>'},

{t:'今天的旅程', part:'開場 CHECK-IN', time:'00:13', html:
'<div class="eyebrow">Agenda · I DO ▸ YOU DO ▸ WE DO</div>'+
'<h2 class="h-slide">從「理解為什麼」→「學什麼技能」→「用什麼工具做」</h2>'+
'<p class="sub">層層深入，帶回教室。每一層的結尾，都有一個你要動手做的活動。</p><div class="rule"></div>'+
'<div class="grid g3">'+
'<div class="card" style="border-top:6px solid var(--dawn)">'+
'<div class="tag" style="background:#ffe9d9;color:#a5501f">00:15 · I DO ｜ BEFORE SEL</div>'+
'<h3 style="margin:.55em 0 .3em;font-size:1.15em">🌡️ 辰光 SEL 現場</h3>'+
'<p style="font-size:.92em;color:var(--ink2)">Check-in 在一所學校裡長什麼樣子？三年的路、五種手勢、十週實錄。</p>'+
'<div class="use" style="background:#fff3e8;color:#a5501f;font-size:.82em;font-weight:700;border-radius:10px;padding:.45em .7em;margin-top:.5em">25 分鐘 · 先看見，再談方法</div></div>'+
'<div class="card" style="border-top:6px solid var(--energy)">'+
'<div class="tag" style="background:#fdf3e0;color:var(--energy-d)">00:40 · I DO ｜ MINDSET</div>'+
'<h3 style="margin:.55em 0 .3em;font-size:1.15em">🌱 為什麼情緒教育很重要</h3>'+
'<p style="font-size:.92em;color:var(--ink2)">狀態先於內容 · 情緒不是問題是訊號 · 老師先覺察，學生才敢說。</p>'+
'<div class="use" style="background:#fdf3e0;color:var(--energy-d);font-size:.82em;font-weight:700;border-radius:10px;padding:.45em .7em;margin-top:.5em">30 分鐘 · 含活動一：我的情緒地圖</div></div>'+
'<div class="card" style="border-top:6px solid var(--reflect)">'+
'<div class="tag" style="background:#e4f6ee;color:var(--reflect-d)">01:10 · 休息</div>'+
'<h3 style="margin:.55em 0 .3em;font-size:1.15em">☕ 10 分鐘</h3>'+
'<p style="font-size:.92em;color:var(--ink2)">回座前，請先做一次今天教的第一個工具：泡泡呼吸。</p>'+
'<div class="use" style="background:#e4f6ee;color:var(--reflect-d);font-size:.82em;font-weight:700;border-radius:10px;padding:.45em .7em;margin-top:.5em">01:10 – 01:20</div></div>'+
'<div class="card" style="border-top:6px solid var(--mindful)">'+
'<div class="tag" style="background:#e7eff8;color:var(--mindful-d)">01:20 · YOU DO ｜ SKILLSET</div>'+
'<h3 style="margin:.55em 0 .3em;font-size:1.15em">🎨 四色語言 × 四顆膠囊</h3>'+
'<p style="font-size:.92em;color:var(--ink2)">學生端的共通語言、老師端的處方矩陣、1+1&gt;2 的 COMBO。</p>'+
'<div class="use" style="background:#e7eff8;color:var(--mindful-d);font-size:.82em;font-weight:700;border-radius:10px;padding:.45em .7em;margin-top:.5em">45 分鐘 · 含活動二 ＋ 關卡②</div></div>'+
'<div class="card" style="border-top:6px solid var(--relate)">'+
'<div class="tag" style="background:#fdece7;color:var(--relate-d)">02:05 · WE DO ｜ TOOLSET</div>'+
'<h3 style="margin:.55em 0 .3em;font-size:1.15em">🧰 一日導航與落地</h3>'+
'<p style="font-size:.92em;color:var(--ink2)">從平面到立體、校園一日時間軸、三個一致性、行政五根槓桿。</p>'+
'<div class="use" style="background:#fdece7;color:var(--relate-d);font-size:.82em;font-weight:700;border-radius:10px;padding:.45em .7em;margin-top:.5em">40 分鐘 · 含活動三：我的第一週</div></div>'+
'<div class="card" style="border-top:6px solid var(--ink)">'+
'<div class="tag">02:45 · 承諾收尾</div>'+
'<h3 style="margin:.55em 0 .3em;font-size:1.15em">✨ 三層整合 · 我的第一步</h3>'+
'<p style="font-size:.92em;color:var(--ink2)">圍圈、Check-out、三句帶走的話、Q&amp;A。</p>'+
'<div class="use" style="background:#eef3f9;color:var(--ink2);font-size:.82em;font-weight:700;border-radius:10px;padding:.45em .7em;margin-top:.5em">15 分鐘 · 02:45 – 03:00</div></div>'+
'</div>'+
'<div class="note">整場的節奏原則：<b>講 20 分鐘，就一定要動一次。</b>老師的專注曲線和學生一樣，會掉。<br>'+
'<span style="color:var(--muted);font-size:.9em">（主持人：完整 Run Sheet 在最後兩頁附錄，按 <b>End</b> 可直接跳過去。）</span></div>'},

/* ========== BEFORE SEL · 辰光現場 ========== */
{t:'BEFORE SEL · 辰光 SEL', part:'I DO 辰光現場', time:'00:15', sec:true, html:
'<div class="divider">'+
'<div class="num" style="color:var(--dawn)">🌡️</div>'+
'<h2>辰光 SEL</h2>'+
'<p>情緒教育的起點 · 先理解，再行動<br><b>情境優先 —— 生活置入</b></p>'+
'<div class="time">I DO ｜ 00:15 – 00:40 ｜ 25 minutes</div></div>'},

{t:'起點：一個孩子的情緒需求', part:'I DO 辰光現場', time:'00:16', html:
'<h2 class="h-slide">我到辰光的第一年，沒有推課程</h2>'+
'<p class="sub">因為有更急的事。</p><div class="rule"></div>'+
'<div class="grid g2">'+
'<div><div class="tl">'+
'<div class="tl-i"><b>召喚：看見一個「不解決不行」的問題</b><span>五年級一位亞斯＋過動特質的孩子，全班每天都在處理情緒。情緒教育的需求，比任何課程都急迫。</span></div>'+
'<div class="tl-i"><b>信使：2024 KIST 教育峰會遇見 SEL</b><span>拯民國小林郁杏校長帶來組織化思考與 ARCI 工具；陳廷瑜每週一的支持與教具。</span></div>'+
'<div class="tl-i"><b>試煉一：帶頭者的啟航（2024/10，五甲）</b><span>選定課文 ▸ 情境布置 ▸ 設計教案（AI 協作）▸ 學習單 ▸ 融入 SEL 五大目標 ▸ 導師上完 ▸ 回饋。流程跑通了。</span></div>'+
'<div class="tl-i"><b>試煉二：帶頭者的失敗</b><span>流程通了，但我答不出一個問題 —— 這堂課到底在教「課文內容」還是在教「情緒」？</span></div>'+
'</div></div>'+
'<div class="card" style="background:linear-gradient(160deg,#fff,#fff7f0);border-top:6px solid var(--dawn)">'+
'<div class="tag" style="background:#ffe9d9;color:#a5501f">我後來的答案</div>'+
'<h3 style="margin:.6em 0 .4em;font-size:1.25em">不要把 SEL 塞進學科課。</h3>'+
'<p style="color:var(--ink2)">給它<b>自己的時間、自己的儀式、自己的語言</b>。</p>'+
'<p style="color:var(--ink2)">因為 SEL 一旦被當成「附掛在課文上的東西」，它就會在進度壓力下第一個被犧牲。'+
'而如果它有自己的 5 分鐘，它反而可以撐三年。</p>'+
'<div class="note" style="margin-top:1em;box-shadow:none;background:#fff">給鹿場的一句話：<b>先找出你們學校那個「不解決不行」的問題</b>，'+
'再決定 SEL 要掛在哪裡。沒有問題，就沒有動力。</div>'+
'</div></div>'},

{t:'A-B-C 三階段藍圖', part:'I DO 辰光現場', time:'00:20', html:
'<h2 class="h-slide">辰光的 A-B-C：硬體 ▸ 軟體 ▸ 文化</h2>'+
'<p class="sub">三年一個循環。行政最容易犯的錯，是想在第一年就跳到 C。</p><div class="rule"></div>'+
'<div class="grid g3">'+
'<div class="qc energy"><h4><span class="ico">A</span>113 學年度 · 硬體建置</h4>'+
'<p><b>Environment</b></p>'+
'<ul class="bul" style="font-size:.9em"><li>班級教室與科任教室布置</li><li>校園環境建置（含校長室）</li><li>視覺共通語言上牆：4 emotions / 4 colors / 5 gestures</li></ul>'+
'<div class="use">這一年完全不要求老師寫任何教案。</div></div>'+
'<div class="qc mindful"><h4><span class="ico">B</span>114–115 學年度 · 軟體設計</h4>'+
'<p><b>Curriculum</b></p>'+
'<ul class="bul" style="font-size:.9em"><li>導師：SEL 校本課程（獨立時段）</li><li>科任：融入各科的情緒轉換</li><li>全校：晨會、夕會、上放學</li><li>圍圈與共通語言活動</li></ul>'+
'<div class="use">115 學年度 → 四大推動策略（下一頁）</div></div>'+
'<div class="qc reflect"><h4><span class="ico">C</span>116 學年度 · 全面發展</h4>'+
'<p><b>Culture</b></p>'+
'<ul class="bul" style="font-size:.9em"><li>親：SEL 活動參與</li><li>師：典範課程產出</li><li>生：生活經驗遷移</li><li>節慶與校慶全面融入</li></ul>'+
'<div class="use">目標是學生自主帶領圍圈。</div></div>'+
'</div>'+
'<div class="note blue">為什麼順序不能反？因為<b>牆上的東西不會抗拒你</b>。'+
'第一年把語言放到環境裡，老師每天走過去看見它、唸出來，第二年推課程時，那些詞已經不陌生了。</div>'},

{t:'115 學年度四大推動策略', part:'I DO 辰光現場', time:'00:24', html:
'<h2 class="h-slide">四個角色一起動，文化才長得出來</h2>'+
'<p class="sub">導師教課程、科任管情緒轉換、全校共用圍圈、環境提供支持。</p><div class="rule"></div>'+
'<img class="shot" src="assets/strategies.jpg" alt="辰光國小 115 學年度 SEL 四大推動策略">'+
'<div class="note">今天這場工作坊，主要拆解的是<b>第 ② 塊：科任老師的課堂情緒轉換</b> —— '+
'因為它不佔正課、不用寫教案、不動課表，是任何一所學校都可以在下週一開始的那一塊。</div>'},

{t:'全校共通語言', part:'I DO 辰光現場', time:'00:27', html:
'<h2 class="h-slide">讓全校在講同一套話</h2>'+
'<p class="sub">共通語言的價值不在於「精緻」，在於「同一套」。六個班講同一套話，才會變成一所學校。</p><div class="rule"></div>'+
'<div class="grid g4">'+
'<div class="qc relate"><h4><span class="ico">4</span>四種情緒</h4><p>Happy 開心 · Sad 難過<br>Angry 生氣 · Worried 擔心</p><div class="use">所有 check-in／check-out 只用這四個。少即是多。</div></div>'+
'<div class="qc energy"><h4><span class="ico">🎨</span>四種顏色</h4><p>綠＝開心 · 藍＝難過<br>紅＝生氣 · 黃＝擔心</p><div class="use">不會英文的一年級，也能舉顏色卡表達自己。</div></div>'+
'<div class="qc mindful"><h4><span class="ico">✋</span>五種手勢</h4><p>Silence · 我有話要說<br>BTT · Eyes on me · 靜坐思考</p><div class="use">零語言門檻，沒有人被排除在外。</div></div>'+
'<div class="qc reflect"><h4><span class="ico">◯</span>圍圈</h4><p>學生 1–3 / 4–6 年級分圈<br>教職員 Meeting Circle</p><div class="use">每週四 15:00–15:20 品格圍圈。老師自己也要圍圈。</div></div>'+
'</div>'+
'<div class="note green">最重要的一句：<b>校長不做，老師不會信。</b>辰光的教職員每週也有自己的圍圈 ——'+
'如果我們自己不願意在同事面前說「我今天是黃色」，就不該要求孩子做。</div>'},

{t:'辰光五種手勢', part:'I DO 辰光現場', time:'00:30', html:
'<h2 class="h-slide">五種手勢：全校一年級到六年級都聽得懂</h2>'+
'<p class="sub">SKILLSET 段落的關卡②，就是玩這五個。</p><div class="rule"></div>'+
'<img class="shot" src="assets/gestures.jpg" alt="辰光五種手勢">'+
'<div class="note">如果只能先挑兩個：<b>Silence 與 Eyes on me</b>。'+
'全校導師統一用一學期，就足以改變一所學校的音量 —— 而且完全不需要經費。</div>'},

{t:'週一辰光：全校 5 分鐘', part:'I DO 辰光現場', time:'00:32', html:
'<h2 class="h-slide">每週一晨會，全校 6 個班做同一件事</h2>'+
'<p class="sub">不到 5 分鐘、不需要教材、不需要外師。但它每週重複，一年就是 20 次全校性的共同練習。</p><div class="rule"></div>'+
'<div class="steps">'+
'<div class="step"><span class="n">1 MIN</span><h4>Check-in 情緒進場</h4><p>How do you feel today?</p><div class="say">紅 Angry · 黃 Worried · 藍 Sad · 綠 Happy（舉牌／比手勢）</div></div>'+
'<div class="step"><span class="n">1 MIN</span><h4>Topic 本週主題</h4><p>每週一個 CASEL 面向，四週一循環。</p><div class="say">Week 5　Topic: Self-awareness</div></div>'+
'<div class="step"><span class="n">2 MIN</span><h4>Practice 句型練習</h4><p>全校齊聲 → 兩人互說 → 抽 2 位上台。</p><div class="say">When I feel sad, who can help me?　My ___ can help me.</div></div>'+
'<div class="step"><span class="n">1 MIN</span><h4>Check-out 帶走一句</h4><p>中文說感受，英語喊口號。</p><div class="say">我現在覺得＿＿＿。　I can do it!</div></div>'+
'</div>'+
'<div class="note blue">成本：<b>一份 5 張的簡報</b>，由老師輪流做。時間：晨會 5 分鐘。'+
'留空句型（When I feel ___, I ___）是整件事的引擎 —— 每個孩子填的答案都不一樣，那不是背誦，是表達。</div>'},

{t:'課堂現場：十週 Check-in / Check-out', part:'I DO 辰光現場', time:'00:34', html:
'<div class="eyebrow">辰光國小 · 陳英曉主任 ｜ 授課班級：五甲、六甲 ｜ 融入學科：體育、自然</div>'+
'<h2 class="h-slide">不佔正課，把情緒指標變成球拍與花朵</h2>'+
'<p class="sub">這是我最想給鹿場看的一段 —— 因為它證明了 Check-in 不需要另外找時間。</p><div class="rule"></div>'+
'<div class="grid g3">'+
'<div class="qc mindful"><h4><span class="ico">↘</span>課前 Check-in</h4><p>藉由身體律動、聲音吼叫或意象物件，引導學生在開課時靜心、具體化當下情緒，達到心境調適與注意力聚焦。</p></div>'+
'<div class="qc energy"><h4><span class="ico">⇄</span>學科融合</h4><p>把情緒指標直接轉化為<b>體育用具（球拍位置）</b>或<b>自然物件（花朵顏色）</b>，讓 SEL 自然融入學習脈絡，不佔用正課時間。</p></div>'+
'<div class="qc reflect"><h4><span class="ico">↗</span>課後 Check-out</h4><p>藉由「全壘打揮拍」、「複誦他人觀點」或「對自己比讚」，落實正向自我激勵、肯定努力，並學會傾聽與同理同儕。</p></div>'+
'</div>'+
'<div class="note">請注意這裡的設計原理：<b>不是多加一個活動，而是把既有的教具重新賦義。</b>'+
'球拍本來就在手上，只是現在它同時是一支情緒溫度計。</div>'},

{t:'十週實錄', part:'I DO 辰光現場', time:'00:36', html:
'<h2 class="h-slide">十週，從「靠吼聲宣洩」到「能自我覺察」</h2><div class="rule"></div>'+
'<div class="card" style="overflow:auto">'+
'<table><thead><tr><th>週次</th><th>Check-in</th><th>Check-out</th><th>教學省思</th></tr></thead><tbody>'+
'<tr><td>1</td><td>吼聲高低：低沉＝沉穩，高亢＝興奮</td><td>「全壘打」球棒聚於一點，大聲自我肯定</td><td>吼聲是極佳的情緒抒發；常批評自己的孩子需要多練習肯定自己</td></tr>'+
'<tr><td>2</td><td>閉目沉澱，用手掌 1–5 指表達情緒</td><td>「揮拍向前」揮擊 3 下，想像揮出最美弧線</td><td>學生能用手勢傳達情緒；即便心情不佳也能主動提出調適方案</td></tr>'+
'<tr><td>3</td><td>雙手靠近＝穩定，拉開＝起伏</td><td>一句話分享今天對大自然的認識與感動</td><td>情緒更成熟穩定，並內化為對生命與生物的友善看法</td></tr>'+
'<tr><td>4</td><td>雙手前伸於桌面，深呼吸數 1–3 再緩慢收回</td><td>傾聽後複誦同儕：「你說的是○○○的意思」</td><td>剛進教室的喧鬧在調和動作中平復；傾聽練習大幅減少誤會</td></tr>'+
'<tr><td>5</td><td>今日花色：說出看見的一朵花的顏色</td><td>「明天我想嘗試⋯」</td><td>孩子巧妙連結花色與情緒；對明天的期待點燃自學引擎</td></tr>'+
'<tr><td>6</td><td>「我是大人」：身體張開呈大字形</td><td>深呼吸 3 次，對自己比一個讚</td><td>剛開始比讚略顯害羞，但確實是厚植自尊心的關鍵一步</td></tr>'+
'<tr><td>7</td><td>「韋伯望遠鏡」：手抱頭後如保護傘，望向遠方</td><td>「若能登月，你願意花錢買太空票嗎？」</td><td>觀察力雖抽象，但宇宙議題極大激發探索興趣</td></tr>'+
'<tr><td>8</td><td>情緒球拍區：越穩定靠近胸前，越焦慮靠近肚子</td><td>「今天你帶走了什麼技術或收穫？」</td><td>學生能理性評估情緒；當天多數放胸前，清潔工作也高度專注</td></tr>'+
'<tr><td>9</td><td>球拍高度（頭部→大腿）＝今日挑戰的信心度</td><td>展示學習信心</td><td>引導孩子大方展示信心，找到各自舒適的進步方向</td></tr>'+
'<tr><td>10</td><td>腳與球的距離＝信心（踩球穩／腳尖輕碰／離球遠）</td><td>最想稱讚的「自己」</td><td>孩子多回饋正面，最想稱讚願意多次嘗試的自己</td></tr>'+
'</tbody></table></div>'+
'<div class="note green"><b>十週成效：</b>學生從最初需依賴外在吼聲宣洩，轉化為能自我精準覺察、正面擁抱挑戰，'+
'情緒調適與課堂專注穩定度顯著攀升。—— 而這一切，每節課只花了頭尾各一分鐘。</div>'},

{t:'我們三年學到的三件事', part:'I DO 辰光現場', time:'00:38', html:
'<h2 class="h-slide">如果重來一次，我會這樣做</h2><div class="rule"></div>'+
'<div class="grid g3">'+
'<div class="card" style="border-top:6px solid var(--dawn)"><div class="tag">01</div>'+
'<h3 style="margin:.5em 0 .35em">給它自己的時間</h3>'+
'<p style="color:var(--ink2);font-size:.95em">SEL 塞進學科課，會在第一次段考前被犧牲。給它一個行事曆上的格子 ——'+
'哪怕只有每節課的頭尾各一分鐘 —— 它才活得下來。</p>'+
'<p style="color:var(--muted);font-size:.86em">沒有進行事曆的事，就是不存在的事。</p></div>'+
'<div class="card" style="border-top:6px solid var(--mindful)"><div class="tag">02</div>'+
'<h3 style="margin:.5em 0 .35em">先求一致，再求精緻</h3>'+
'<p style="color:var(--ink2);font-size:.95em">一致的流程、一致的語言、一致的態度。'+
'四個情緒詞、五個手勢，全校用一年 —— 效果遠大於某一班做了一套很漂亮但別人不會的東西。</p>'+
'<p style="color:var(--muted);font-size:.86em">第一年爭取 20% 的人，不要爭取 100%。</p></div>'+
'<div class="card" style="border-top:6px solid var(--reflect)"><div class="tag">03</div>'+
'<h3 style="margin:.5em 0 .35em">老師先覺察，學生才敢說</h3>'+
'<p style="color:var(--ink2);font-size:.95em">老師進教室的第一秒，整班的情緒溫度就跟著改變了。'+
'「我現在感覺有點紅色，我需要深呼吸一下」—— 這句話本身就是最真實的示範課。</p>'+
'<p style="color:var(--muted);font-size:.86em">情緒是會傳染的。老師的平靜，是全班最好的禮物。</p></div>'+
'</div>'+
'<div class="note">誠實的一句：三年太短，我不會說謊 —— 我沒有讓辰光的孩子情緒管理變得完美。'+
'但我讓<b>「說出自己現在是什麼顏色」變成這所學校每天都會發生的事</b>。</div>'},

/* ========== MINDSET · I DO ========== */
{t:'MINDSET · 為什麼情緒教育很重要', part:'🌱 MINDSET', time:'00:40', sec:true, html:
'<div class="divider">'+
'<div class="num" style="color:var(--energy)">🌱</div>'+
'<h2>MINDSET</h2>'+
'<p>心態層 · 理解「為什麼」<br>沒有正確的頻率，最好的教學也無法被接收。</p>'+
'<div class="time">I DO ｜ 00:40 – 01:10 ｜ 30 minutes（含活動一）</div></div>'},

{t:'狀態先於內容', part:'🌱 MINDSET', time:'00:41', html:
'<h2 class="h-slide">狀態先於內容 State precedes learning</h2>'+
'<p class="sub">同一份教案，丟進兩種狀態的教室，會得到兩種完全不同的結果。差別不在教案。</p><div class="rule"></div>'+
'<img class="shot" src="assets/state-first.jpg" alt="左：無法吸收的混沌狀態；右：高效吸收的學習頻率">'+
'<div class="note">請對照一下你自己的經驗：<b>體育課後的第一節數學</b>、'+
'<b>連假收假的星期一早上</b>、<b>剛發生衝突的那節課</b> —— 你有沒有過「今天怎麼講都講不進去」的感覺？'+
'那不是你的教學出問題，是<b>頻率沒對上</b>。</div>'},

{t:'學習狀態啟動曲線', part:'🌱 MINDSET', time:'00:44', html:
'<h2 class="h-slide">Learning State Activation Curve</h2>'+
'<p class="sub">Check-in 不是一個動作，是把班級從低頻拉上高原的一段路。它有三個階段。</p><div class="rule"></div>'+
'<img class="shot" src="assets/curve.jpg" alt="學習狀態啟動曲線：Reset 重置、Relate 連結、Ready 準備">'+
'<div class="note blue">最常被跳過的是<b>中間那一段（Relate）</b>。'+
'很多老師做完深呼吸就直接開始上課 —— 學生安靜了，但沒有「被看見」。<b>安靜不等於準備好。</b></div>'},

{t:'Reset → Relate → Ready', part:'🌱 MINDSET', time:'00:47', html:
'<h2 class="h-slide">三個階段，三件不同的事</h2><div class="rule"></div>'+
'<div class="grid g3">'+
'<div class="qc relate"><h4><span class="ico">↺</span>Reset 重置</h4>'+
'<p><b>切斷外界干擾</b></p>'+
'<p>幫助學生從下課衝突或外界刺激中，把注意力重新帶回學習場域。生理先於心理。</p>'+
'<div class="use">典型動作：泡泡呼吸、身體伸展、閉眼十秒、清空桌面</div></div>'+
'<div class="qc mindful"><h4><span class="ico">♡</span>Relate 連結</h4>'+
'<p><b>編織安全網</b></p>'+
'<p>建立心理安全感，讓學生感到「被看見」，編織班級的支持網格。這一步決定了學生敢不敢說真話。</p>'+
'<div class="use">典型動作：兩人互說一句、比顏色、點名式的一句話、感謝一件小事</div></div>'+
'<div class="qc reflect"><h4><span class="ico">🚀</span>Ready 準備</h4>'+
'<p><b>進入學習狀態</b></p>'+
'<p>調節能量與情緒頻率，讓大腦進入「可學習狀態」，並把它連到今天的學科目標上。</p>'+
'<div class="use">典型動作：Today we are going to ___. Are you ready? ／ 三個關鍵字預告</div></div>'+
'</div>'+
'<div class="note green">辰光的判準很簡單：<b>Reset 管身體，Relate 管關係，Ready 管學科。</b>'+
'三個都做完，總共不超過 3 分鐘；只做第一個，通常撐不過 10 分鐘就會打回原形。</div>'},

{t:'情緒沒有好壞之分', part:'🌱 MINDSET', time:'00:50', html:
'<h2 class="h-slide">每一種情緒，都有它存在的意義</h2>'+
'<p class="sub">老師的任務是幫助學生「辨識」情緒，而不是「消除」情緒。</p><div class="rule"></div>'+
'<div class="grid g4">'+
'<div class="qc relate"><h4><span class="ico">😠</span>紅色 · 憤怒</h4>'+
'<p><b>告訴我們：</b>有事情侵犯了我的界限，或違背了我的價值觀。</p>'+
'<div class="use">功能：保護自己 / 設定界限</div></div>'+
'<div class="qc energy"><h4><span class="ico">😰</span>黃色 · 焦慮</h4>'+
'<p><b>告訴我們：</b>即將面對一件重要的事，我需要準備好。</p>'+
'<div class="use">功能：提高警覺 / 促進準備</div></div>'+
'<div class="qc mindful"><h4><span class="ico">😢</span>藍色 · 難過</h4>'+
'<p><b>告訴我們：</b>我失去了珍視的東西，需要時間哀悼。</p>'+
'<div class="use">功能：深化連結 / 尋求支持</div></div>'+
'<div class="qc reflect"><h4><span class="ico">😊</span>綠色 · 平靜</h4>'+
'<p><b>告訴我們：</b>此刻是安全的，我可以盡情學習與創造。</p>'+
'<div class="use">功能：最佳學習狀態</div></div>'+
'</div>'+
'<div class="note">「情緒從來不是麻煩。它是身體告訴我們『這件事對我很重要』的語言。」<br>'+
'所以當一個孩子舉紅色，他不是在找麻煩 —— 他是在告訴你，<b>有一條界線被踩到了</b>。</div>'},

{t:'從「評判」到「好奇」', part:'🌱 MINDSET', time:'00:53', html:
'<h2 class="h-slide">情緒不是問題，是訊號</h2>'+
'<p class="sub">語言的改變，改變的是整個師生關係。</p><div class="rule"></div>'+
'<div class="grid g3">'+
'<div class="card" style="border-left:6px solid var(--relate)">'+
'<p style="font-size:1.05em;color:var(--relate-d);font-weight:800;margin-bottom:.3em">❌ 「不要生氣！」</p>'+
'<p style="font-size:1.05em;color:var(--reflect-d);font-weight:800">✅ 「你現在是紅色，發生了什麼事？」</p>'+
'<p style="font-size:.88em;color:var(--muted);margin-top:.5em">評判會讓孩子學會隱藏；好奇會讓孩子願意說。</p></div>'+
'<div class="card" style="border-left:6px solid var(--energy)">'+
'<p style="font-size:1.05em;color:var(--relate-d);font-weight:800;margin-bottom:.3em">❌ 「有什麼好擔心的！」</p>'+
'<p style="font-size:1.05em;color:var(--reflect-d);font-weight:800">✅ 「你現在是黃色，我們來想想辦法。」</p>'+
'<p style="font-size:.88em;color:var(--muted);margin-top:.5em">否定焦慮，焦慮不會消失，只會變成「我不該有這種感覺」。</p></div>'+
'<div class="card" style="border-left:6px solid var(--mindful)">'+
'<p style="font-size:1.05em;color:var(--relate-d);font-weight:800;margin-bottom:.3em">❌ 「振作一點！」</p>'+
'<p style="font-size:1.05em;color:var(--reflect-d);font-weight:800">✅ 「你現在是藍色，需要一點時間嗎？」</p>'+
'<p style="font-size:.88em;color:var(--muted);margin-top:.5em">難過不是軟弱，是需要被照顧的信號。</p></div>'+
'</div>'+
'<div class="note blue">請注意右邊三句話的共同結構：<b>先命名顏色，再問一個開放的問題。</b>'+
'這個結構之所以有效，是因為它同時做到了「我看見你」和「我沒有評價你」—— 而這正是 Relate 的全部內容。</div>'},

{t:'老師先覺察，學生才敢說', part:'🌱 MINDSET', time:'00:56', html:
'<h2 class="h-slide">老師進教室的第一秒，整班的情緒溫度就跟著改變了</h2>'+
'<p class="sub">Practice with your colors —— 先從自己開始。</p><div class="rule"></div>'+
'<div class="grid g3">'+
'<div class="qc mindful"><h4><span class="ico">🪞</span>自我覺察</h4>'+
'<p>先知道自己在哪個顏色，才能選擇「回應」而非「反應」。</p>'+
'<div class="use">情緒是會傳染的 —— 老師的平靜，是全班最好的禮物。</div></div>'+
'<div class="qc energy"><h4><span class="ico">🌡️</span>調節示範</h4>'+
'<p>老師如何處理自己的情緒，就是最真實的示範課。</p>'+
'<div class="use">「我現在感覺有點紅色，我需要深呼吸一下。」（Check-in 入場券）</div></div>'+
'<div class="qc reflect"><h4><span class="ico">🏡</span>安全環境</h4>'+
'<p>情緒安全的班級，孩子才敢犯錯、才願意說真話、才能真正學習。</p>'+
'<div class="use">覺察是建立信任的基礎（Reset ＋ Relate）。</div></div>'+
'</div>'+
'<div class="note">情緒教育從來不是「另一個科目」，<b>它就發生在每一個師生互動的瞬間</b>。'+
'你不需要多一節課，你需要的是多一個習慣。</div>'},

{t:'關於 Check-in 的五個誤解', part:'🌱 MINDSET', time:'00:58', html:
'<h2 class="h-slide">五個一定要先拆掉的誤解</h2>'+
'<p class="sub">不拆掉，做兩週就會覺得「這個沒有用」而放棄。</p><div class="rule"></div>'+
'<div class="grid g2">'+
'<div class="card"><div class="tag" style="background:#fdece7;color:var(--relate-d)">MYTH 01</div>'+
'<h4 style="margin:.5em 0 .3em">Check-in ＝ 問「你今天心情好不好？」</h4>'+
'<p style="font-size:.93em;color:var(--ink2)">開放式問句會讓內向的孩子直接消失。'+
'Check-in 要<b>提供有限選項</b>（四個顏色、五根手指、球拍高度），讓「表達」不需要語言能力。</p></div>'+
'<div class="card"><div class="tag" style="background:#fdece7;color:var(--relate-d)">MYTH 02</div>'+
'<h4 style="margin:.5em 0 .3em">要有時間才能做</h4>'+
'<p style="font-size:.93em;color:var(--ink2)">最有效的 Check-in 是 <b>10 秒</b>的：一個手勢、一個顏色、一個位置。'+
'需要「找時間」的，都撐不過一個月。</p></div>'+
'<div class="card"><div class="tag" style="background:#fdece7;color:var(--relate-d)">MYTH 03</div>'+
'<h4 style="margin:.5em 0 .3em">學生說了，我就要處理</h4>'+
'<p style="font-size:.93em;color:var(--ink2)">不用。Check-in 是<b>覺察工具，不是輔導轉介</b>。'+
'孩子舉紅色，你只需要說「我看到了」。急著解決，反而讓他下次不敢說。</p></div>'+
'<div class="card"><div class="tag" style="background:#fdece7;color:var(--relate-d)">MYTH 04</div>'+
'<h4 style="margin:.5em 0 .3em">情緒不好就不能上課</h4>'+
'<p style="font-size:.93em;color:var(--ink2)">恰恰相反。目標不是<b>消除</b>紅色，是讓孩子<b>知道自己是紅色</b>，'+
'然後選擇「回應」而非「反應」。辨識本身就是介入。</p></div>'+
'<div class="card"><div class="tag" style="background:#fdece7;color:var(--relate-d)">MYTH 05</div>'+
'<h4 style="margin:.5em 0 .3em">這是導師的事，科任不用</h4>'+
'<p style="font-size:.93em;color:var(--ink2)">科任老師其實最需要 —— 因為你接手的班級<b>剛剛才經歷過什麼你完全不知道</b>。'+
'10 秒的 Check-in，是你唯一的情報來源。</p></div>'+
'<div class="card" style="background:linear-gradient(160deg,#fff,#fdf6ec);border-top:6px solid var(--energy)">'+
'<div class="tag" style="background:#fdf3e0;color:var(--energy-d)">MINDSET 小結</div>'+
'<h4 style="margin:.5em 0 .3em">我理解情緒教育的意義</h4>'+
'<p style="font-size:.93em;color:var(--ink2)">① 狀態先於內容<br>② 情緒不是問題，是訊號<br>③ 老師覺察，是學生的安全感來源</p>'+
'<p style="font-size:.86em;color:var(--muted)">帶著這三句，我們進入活動一。</p></div>'+
'</div>'},

{t:'活動一：我的情緒地圖（老師版）', part:'🌱 MINDSET', time:'01:00', html:
'<div class="kicker"><span class="tag" style="background:#fdf3e0;color:var(--energy-d)">✏️ 活動一 · POST IT · 10 分鐘</span></div>'+
'<h2 class="h-slide">我的情緒地圖 —— 老師版</h2>'+
'<p class="sub">在教學生覺察之前，先讓自己走一次。這也是 MINDSET 這一層的收尾。</p><div class="rule"></div>'+
'<div class="grid g2">'+
'<div class="card"><h4 style="margin-bottom:.5em">📋 步驟說明</h4>'+
'<ol class="bul" style="font-size:.94em">'+
'<li>回想<b>「上週一整天在學校」</b>的經歷。</li>'+
'<li>在時間軸上，用四個顏色標出你在各時段的情緒。</li>'+
'<li>找出「最高點」和「最低點」各發生了什麼。<span style="color:var(--muted)">（個人 3 分鐘）</span></li>'+
'<li>與旁邊的夥伴分享<b>一個</b>時段的感受。<span style="color:var(--muted)">（組內 5 分鐘）</span></li>'+
'<li>跨組分享：找兩位<b>非本組</b>的夥伴各說一次。<span style="color:var(--muted)">（組外 10 分鐘 · WHY SEL CIRCLE）</span></li>'+
'</ol>'+
'<div class="note" style="margin-top:.9em;box-shadow:none;background:#f7fafd;font-size:.9em">'+
'⏱️ 時間可依現場調整：個人 3′ ▸ 組內 5′ ▸ 跨組 10′。若時間緊，跨組那一段可以只找一位。</div>'+
'</div>'+
'<div>'+
'<div class="card" style="border-top:6px solid var(--energy)"><h4 style="margin-bottom:.5em">💡 引導問題</h4>'+
'<ul class="bul" style="font-size:.94em">'+
'<li>哪一個顏色出現最多次？</li>'+
'<li>什麼情境最容易觸發你？</li>'+
'<li>你通常用什麼方式回到綠區？</li>'+
'<li>那個「最低點」，如果重來一次，你會希望有人對你說什麼？</li>'+
'</ul></div>'+
'<div class="card" style="margin-top:12px;background:linear-gradient(160deg,#fff,#fff7f0)">'+
'<h4 style="margin-bottom:.4em">🕗 一天的六個時段（貼便利貼用）</h4>'+
'<div class="grid" style="grid-template-columns:repeat(3,1fr);gap:8px;font-size:.85em;font-weight:700">'+
'<div style="background:#fff;border-radius:12px;padding:.5em .6em;box-shadow:var(--sh);text-align:center">07:40<br><span style="font-weight:600;color:var(--muted)">早自習</span></div>'+
'<div style="background:#fff;border-radius:12px;padding:.5em .6em;box-shadow:var(--sh);text-align:center">10:00<br><span style="font-weight:600;color:var(--muted)">大下課後</span></div>'+
'<div style="background:#fff;border-radius:12px;padding:.5em .6em;box-shadow:var(--sh);text-align:center">12:30<br><span style="font-weight:600;color:var(--muted)">午休</span></div>'+
'<div style="background:#fff;border-radius:12px;padding:.5em .6em;box-shadow:var(--sh);text-align:center">14:30<br><span style="font-weight:600;color:var(--muted)">下午課</span></div>'+
'<div style="background:#fff;border-radius:12px;padding:.5em .6em;box-shadow:var(--sh);text-align:center">16:00<br><span style="font-weight:600;color:var(--muted)">放學前</span></div>'+
'<div style="background:#fff;border-radius:12px;padding:.5em .6em;box-shadow:var(--sh);text-align:center">17:30<br><span style="font-weight:600;color:var(--muted)">回家路上</span></div>'+
'</div></div>'+
'</div></div>'+
'<div class="note">⑤ 全班反思：<b>什麼讓你進入紅／藍？你如何回到綠？</b><br>'+
'這一題的答案，等一下在 SKILLSET 會變成你給學生的「處方」。</div>'},

{t:'BREAK 休息 10 分鐘', part:'休息', time:'01:10', sec:true, html:
'<div class="divider">'+
'<div class="num" style="color:var(--reflect)">☕</div>'+
'<h2>休息 10 分鐘</h2>'+
'<p>01:10 – 01:20<br>回來之後，我們把 Check-in 拆成可以直接用的技能。</p>'+
'<div class="time">回座前，請先做一次今天教的第一個工具：<b>泡泡呼吸</b> —— 吸氣數 3、吐氣數 4，做 3 次。</div></div>'},

/* ========== SKILLSET · YOU DO ========== */
{t:'SKILLSET · 從覺察到應對', part:'🎨 SKILLSET', time:'01:20', sec:true, html:
'<div class="divider">'+
'<div class="num" style="color:var(--mindful)">🎨</div>'+
'<h2>SKILLSET</h2>'+
'<p>技能層 · 學習「是什麼」<br>學生端的四色語言 × 老師端的四顆膠囊</p>'+
'<div class="time">YOU DO ｜ 01:20 – 02:05 ｜ 45 minutes（含活動二與關卡②）</div></div>'},

{t:'四色情緒總覽', part:'🎨 SKILLSET', time:'01:21', html:
'<div class="eyebrow">學生端的共通語言 · common language ＋ 第三人稱視角 ＋ ease down</div>'+
'<h2 class="h-slide">情緒就像溫度，有高有低，每一種都有它的意義</h2><div class="rule"></div>'+
'<div class="grid g4">'+
'<div class="qc relate"><h4><span class="ico">😠</span>紅色 生氣／憤怒</h4>'+
'<p><b>燥熱</b></p><p>感覺失控、想發火<br>非常不公平，無法忍受</p>'+
'<div class="use">學校情境：被誤解、東西被搶走、覺得考試不公平</div></div>'+
'<div class="qc energy"><h4><span class="ico">😰</span>黃色 焦慮／緊張</h4>'+
'<p><b>溫熱</b></p><p>感覺煩躁、不安<br>心跳加速，擔心很多</p>'+
'<div class="use">學校情境：考試前夕、上台發表、新環境適應</div></div>'+
'<div class="qc mindful"><h4><span class="ico">😢</span>藍色 憂鬱／難過</h4>'+
'<p><b>寒冷</b></p><p>感覺失落、無力<br>做什麼都沒勁，好累</p>'+
'<div class="use">學校情境：被排擠、朋友衝突、課業受挫</div></div>'+
'<div class="qc reflect"><h4><span class="ico">😊</span>綠色 開心／平靜</h4>'+
'<p><b>舒適</b></p><p>感覺滿足、愉悅<br>有活力，笑口常開</p>'+
'<div class="use">學校情境：被肯定、做出成果、跟朋友合作順利</div></div>'+
'</div>'+
'<div class="note">🌡️ 溫度越高 → 情緒越激烈　　🌿 目標：<b>覺察當下，而非壓抑或評判</b><br>'+
'四個字就夠了。詞彙越少，越多孩子敢用 —— 這是「共通語言」跟「情緒詞彙教學」最大的差別。</div>'},

{t:'四色的健康應對策略', part:'🎨 SKILLSET', time:'01:25', html:
'<h2 class="h-slide">每一種顏色，都有一組回到綠區的路</h2>'+
'<p class="sub">這一頁請拍照 —— 它是可以直接貼在教室情緒角落的內容。</p><div class="rule"></div>'+
'<div class="card" style="overflow:auto">'+
'<table><thead><tr><th>顏色</th><th>你可能會感覺⋯</th><th>✅ 健康的應對策略</th><th>❌ 避免</th></tr></thead><tbody>'+
'<tr><td style="background:#fdece7;font-weight:800;color:var(--relate-d)">😠 紅<br><span style="font-weight:600">生氣／憤怒</span></td>'+
'<td>一切不公平、很委屈｜想大聲說話或衝動行事｜身體緊繃、心跳加快｜覺得別人不理解自己</td>'+
'<td>🌬️ 4-7-8 呼吸：吸 4 秒、憋 7 秒、呼 8 秒<br>🚶 暫時離開現場，給自己 5 分鐘<br>📝 把感受寫下來，等平息再溝通<br>💬「我感到憤怒，因為……」</td>'+
'<td>大聲責罵、摔東西、以牙還牙</td></tr>'+
'<tr><td style="background:#fdf3e0;font-weight:800;color:var(--energy-d)">😰 黃<br><span style="font-weight:600">焦慮／緊張</span></td>'+
'<td>心跳加速、手心出汗｜腦袋一直轉停不下來｜擔心失敗或出糗｜身體緊繃難以放鬆</td>'+
'<td>📋 把擔心的事寫下來，拆成小步驟<br>💪「我有準備，我可以的」<br>🗣️ 找人練習或預演，建立信心<br>😴 睡前寫 3 件今天準備好的事</td>'+
'<td>反覆確認、逃避不面對、熬夜硬撐</td></tr>'+
'<tr><td style="background:#e7eff8;font-weight:800;color:var(--mindful-d)">😢 藍<br><span style="font-weight:600">憂鬱／難過</span></td>'+
'<td>失落、無力、提不起勁｜想一個人待著｜覺得自己沒價值或被忽視｜身體沉重</td>'+
'<td>🤝 找一個信任的人說說話<br>📔 把感受寫在日記裡<br>🌱 做一件小小讓自己舒服的事<br>☀️ 允許自己難過，明天是新的一天</td>'+
'<td>自我否定、把自己完全關起來</td></tr>'+
'<tr><td style="background:#e4f6ee;font-weight:800;color:var(--reflect-d)">😊 綠<br><span style="font-weight:600">開心／平靜</span></td>'+
'<td>滿足、愉悅、充滿活力｜願意分享、容易同理｜思緒清晰、學習效率最高</td>'+
'<td>🤗 主動分享快樂，感染身邊的人<br>🙏 對幫助過你的人說「謝謝」<br>🌱 把能量用來幫助需要的同學<br>📚 善用這段狀態，把困難的事做完</td>'+
'<td>炫耀、把別人比下去</td></tr>'+
'</tbody></table></div>'+
'<div class="note green">💙 三句給孩子的話：<b>有點緊張是正常的，代表你很在乎</b>｜<b>難過不是軟弱，是需要被照顧的信號</b>｜<b>快樂是可以分享的資源，越給越多</b>。</div>'},

{t:'課堂四步驟', part:'🎨 SKILLSET', time:'01:29', html:
'<div class="eyebrow">辰光 115 策略② · 科任老師的情緒轉換</div>'+
'<h2 class="h-slide">45 分鐘裡投資報酬率最高的那一分鐘</h2>'+
'<p class="sub">科任老師不需要「教 SEL」。他只需要在課的頭尾各花一分鐘，把學生的狀態接上這一節課。</p><div class="rule"></div>'+
'<div class="steps">'+
'<div class="step"><span class="n">STEP 1</span><h4>Check-in 覺察當下</h4><p>課堂開始，覺察當下狀態。舉手勢、比顏色、或一句話，10 秒鐘就夠。</p><div class="say">我現在的心情是？</div></div>'+
'<div class="step"><span class="n">STEP 2</span><h4>Reset 重置</h4><p>由外在干擾回到內在穩定。把下課的操場、剛剛的爭執，放在教室門外。</p><div class="say">泡泡呼吸：吸氣數 3、吐氣數 4，做 3 次</div></div>'+
'<div class="step"><span class="n">STEP 3</span><h4>Re-connect 再連結</h4><p>將內在狀態連結至學科科目。<b>這一步最常被跳過，但這是情緒與學科接上的地方。</b></p><div class="say">Today we are going to ___. Are you ready?</div></div>'+
'<div class="step"><span class="n">STEP 4</span><h4>Check-out 整理帶走</h4><p>課堂結束，整理與帶走。一句話，中英文都可以，讓學習有個收尾。</p><div class="say">我學到什麼？我帶走什麼？</div></div>'+
'</div>'+
'<div class="note">公式記起來就好：<b>情緒轉換 ＝ 重置內在 × 再連結學習</b>。'+
'請注意是「×」不是「＋」—— 只做重置而沒有再連結，等於乘以零。</div>'},

{t:'四大膠囊總覽', part:'🎨 SKILLSET', time:'01:33', html:
'<div class="eyebrow">老師端的處方 · Check-in 導航員</div>'+
'<h2 class="h-slide">WHAT？四顆對症下藥的膠囊</h2>'+
'<p class="sub">四色是「學生怎麼說」；四顆膠囊是「老師怎麼做」。觀察班級狀態 ▸ 直接點膠囊 ▸ 立即引導。</p><div class="rule"></div>'+
'<div class="grid g2" style="align-items:center">'+
'<img class="shot" src="assets/wheel4.jpg" alt="四大膠囊：能量校準、靜心覺察、關係文化、融入反思" style="max-width:440px;margin:0 auto">'+
'<div class="grid" style="gap:10px">'+
'<div class="qc energy" style="padding:.85em 1em"><h4><span class="ico">⚡</span>能量校準 Energy Alignment</h4><p style="margin:0">啟動與監測 —— 把低頻狀態拉升到學習基準線。</p></div>'+
'<div class="qc mindful" style="padding:.85em 1em"><h4><span class="ico">🌊</span>靜心覺察 Mindful Awareness</h4><p style="margin:0">穩定與重置 —— 引導過度亢奮的神經系統平穩沉降。</p></div>'+
'<div class="qc relate" style="padding:.85em 1em"><h4><span class="ico">🤝</span>關係文化 Relationship Culture</h4><p style="margin:0">連結與安全 —— 修復人際網格，建立彼此感激的班級文化。</p></div>'+
'<div class="qc reflect" style="padding:.85em 1em"><h4><span class="ico">💡</span>融入反思 Integrated Reflection</h4><p style="margin:0">連結與內化 —— 把學習內容與自我生命經驗深度連結。</p></div>'+
'</div></div>'+
'<div class="note">為什麼是「膠囊」不是「活動」？因為<b>膠囊要對症</b>。'+
'同一個深呼吸，用在睡眼惺忪的早自習是白費力氣，用在體育課後才是解藥。</div>'},

{t:'狀態診斷與處方矩陣', part:'🎨 SKILLSET', time:'01:36', html:
'<h2 class="h-slide">先看症狀，再開處方</h2>'+
'<p class="sub">這一頁請拍照。它就是整套方法的操作說明書。</p><div class="rule"></div>'+
'<img class="shot" src="assets/matrix.jpg" alt="狀態診斷與處方矩陣">'+
'<div class="note">診斷只需要 5 秒鐘：<b>你走進教室，抬頭看一眼</b>。'+
'眼神在不在？聲音大不大？有沒有人在鬧？有沒有人一個人坐著？—— 這四個問題直接對應四顆膠囊。</div>'},

{t:'膠囊 A · B', part:'🎨 SKILLSET', time:'01:39', html:
'<h2 class="h-slide">⚡ 能量校準　🌊 靜心覺察</h2>'+
'<p class="sub">一個往上拉，一個往下降。方向相反，都是為了回到基準線。</p><div class="rule"></div>'+
'<img class="shot" src="assets/cap-ab.jpg" alt="能量校準與靜心覺察兩張膠囊卡">'+
'<div class="grid g2" style="margin-top:16px">'+
'<div class="qc energy"><h4><span class="ico">⚡</span>現場帶三招（各 30 秒）</h4>'+
'<ul class="bul" style="font-size:.9em">'+
'<li><b>身體開機</b>：全體站起來，「我是大人」大字形伸展 5 秒 × 2 次。</li>'+
'<li><b>吼聲量表</b>：一起發「啊——」，低沉＝沉穩、高亢＝興奮，聽全班的頻率。</li>'+
'<li><b>五指能量</b>：用手掌 1–5 指比出今天的電量，全班同時舉，老師只說「我看到了」。</li>'+
'</ul>'+
'<div class="use">常見情境：早自習、連假後、午休剛起床、第七節</div></div>'+
'<div class="qc mindful"><h4><span class="ico">🌊</span>現場帶三招（各 30 秒）</h4>'+
'<ul class="bul" style="font-size:.9em">'+
'<li><b>泡泡呼吸</b>：想像吹泡泡，吸氣數 3、吐氣數 4，共 3 次。全英語指令也行。</li>'+
'<li><b>手掌回收</b>：雙手前伸於桌面，深呼吸數 1–3，再緩慢收回手。</li>'+
'<li><b>閉眼精心等候</b>：靜坐 20 秒，只做一件事 —— 聽自己的呼吸。（辰光手勢⑤）</li>'+
'</ul>'+
'<div class="use">常見情境：體育課後、下課衝突後、段考前、班級太吵</div></div>'+
'</div>'+
'<div class="note blue">現在全體一起做一次<b>泡泡呼吸</b>。三次就好。'+
'做完之後請留意：教室的音量掉了幾度？這就是你等一下要在自己班上複製的東西。</div>'},

{t:'膠囊 C · D', part:'🎨 SKILLSET', time:'01:42', html:
'<h2 class="h-slide">🤝 關係文化　💡 融入反思</h2>'+
'<p class="sub">一個處理「人與人之間」，一個處理「內容與我之間」。</p><div class="rule"></div>'+
'<img class="shot" src="assets/cap-cd.jpg" alt="融入反思與關係文化兩張膠囊卡">'+
'<div class="grid g2" style="margin-top:16px">'+
'<div class="qc relate"><h4><span class="ico">🤝</span>現場帶三招（各 60 秒）</h4>'+
'<ul class="bul" style="font-size:.9em">'+
'<li><b>感謝一件小事</b>：轉頭跟旁邊的人說一句「謝謝你剛剛＿＿＿」。</li>'+
'<li><b>複誦練習</b>：聽完同學說的話，用「你說的是○○○的意思」回述一次。</li>'+
'<li><b>Can I help you?</b>：舉手大聲說 I can help you! ／ 微笑回應 Thank you!</li>'+
'</ul>'+
'<div class="use">常見情境：班級氣氛冷漠、發生衝突後、轉學生入班、分組換人</div></div>'+
'<div class="qc reflect"><h4><span class="ico">💡</span>現場帶三招（各 60 秒）</h4>'+
'<ul class="bul" style="font-size:.9em">'+
'<li><b>帶走了什麼</b>：一句話回答「今天你帶走了什麼技術或收穫？」</li>'+
'<li><b>明天我想試</b>：「明天我想嘗試＿＿＿」—— 把今天連到明天。</li>'+
'<li><b>4F 快問</b>：Facts 事實 ▸ Feelings 感受 ▸ Findings 發現 ▸ Future 未來，各一句。</li>'+
'</ul>'+
'<div class="use">常見情境：課堂結束前、遇到難題時、單元收尾、週五最後一節</div></div>'+
'</div>'+
'<div class="note green">⚠️ 關係文化最容易做錯的地方：<b>不要讓學生「說優點」，要讓學生「說具體的事」。</b>'+
'「你人很好」沒有力量，「謝謝你剛剛幫我撿筆」才有。</div>'},

{t:'12 招速查表', part:'🎨 SKILLSET', time:'01:45', html:
'<h2 class="h-slide">12 個現成招式速查表（可列印貼在講桌）</h2>'+
'<p class="sub">全部控制在 30–60 秒。挑三個你明天就會用的，圈起來。</p><div class="rule"></div>'+
'<div class="card" style="overflow:auto">'+
'<table><thead><tr><th>膠囊</th><th>招式</th><th>怎麼做</th><th>秒數</th><th>你的一句話</th></tr></thead><tbody>'+
'<tr><td rowspan="3" style="background:#fdf3e0;font-weight:800;color:var(--energy-d)">⚡ 能量校準</td>'+
'<td>身體開機</td><td>站起來，大字形伸展 5 秒 × 2</td><td>30″</td><td>「把身體打開，讓氧氣進來。」</td></tr>'+
'<tr><td>吼聲量表</td><td>全班一起發「啊——」，聽頻率</td><td>20″</td><td>「我聽到今天大家的電量了。」</td></tr>'+
'<tr><td>五指能量</td><td>手掌 1–5 指比出今天電量</td><td>15″</td><td>「不用解釋，比出來就好。」</td></tr>'+
'<tr><td rowspan="3" style="background:#e7eff8;font-weight:800;color:var(--mindful-d)">🌊 靜心覺察</td>'+
'<td>泡泡呼吸</td><td>吸氣數 3、吐氣數 4，共 3 次</td><td>40″</td><td>「想像你在吹一個很大的泡泡。」</td></tr>'+
'<tr><td>手掌回收</td><td>雙手前伸桌面，深呼吸後緩慢收回</td><td>30″</td><td>「把外面的事，先放在教室門外。」</td></tr>'+
'<tr><td>閉眼靜坐</td><td>靜坐 20 秒，只聽自己的呼吸</td><td>20″</td><td>「只要集會，就先閉眼靜坐。」</td></tr>'+
'<tr><td rowspan="3" style="background:#fdece7;font-weight:800;color:var(--relate-d)">🤝 關係文化</td>'+
'<td>感謝小事</td><td>對旁邊的人說「謝謝你剛剛＿＿」</td><td>45″</td><td>「說具體的事，不要說優點。」</td></tr>'+
'<tr><td>複誦練習</td><td>「你說的是○○○的意思」</td><td>60″</td><td>「先確認你聽懂了，再回應。」</td></tr>'+
'<tr><td>比顏色</td><td>四色卡／手勢比出此刻狀態</td><td>15″</td><td>「我看到了，謝謝你告訴我。」</td></tr>'+
'<tr><td rowspan="3" style="background:#e4f6ee;font-weight:800;color:var(--reflect-d)">💡 融入反思</td>'+
'<td>帶走什麼</td><td>一句話說今天的收穫</td><td>45″</td><td>「一句就好，不用完整。」</td></tr>'+
'<tr><td>明天我想試</td><td>「明天我想嘗試＿＿＿」</td><td>45″</td><td>「不用做到，先想到就好。」</td></tr>'+
'<tr><td>4F 快問</td><td>事實／感受／發現／未來各一句</td><td>60″</td><td>「先講事實，再講感受。」</td></tr>'+
'</tbody></table></div>'+
'<div class="note">為什麼都這麼短？因為<b>能被重複的，才會變成文化</b>。'+
'一個 15 分鐘的完美活動做三次就停了；一個 30 秒的動作可以做三年。</div>'},

{t:'COMBO 方程式', part:'🎨 SKILLSET', time:'01:48', html:
'<h2 class="h-slide">戰術組合方程式：1 + 1 &gt; 2</h2>'+
'<p class="sub">單一膠囊解決當下症狀；組合技同時處理「重置生理」與「建立心理連結」。</p><div class="rule"></div>'+
'<img class="shot" src="assets/combo.jpg" alt="COMBO 公式">'+
'<div class="note blue">COMBO 的順序有規則：<b>永遠先生理，後心理。</b>'+
'一個還在喘、還在生氣的身體，聽不進任何關係語言。先把身體放下來，心才打得開。</div>'},

{t:'六大 COMBO 情境', part:'🎨 SKILLSET', time:'01:51', html:
'<h2 class="h-slide">六個學校最常見的時刻，各配一組 COMBO</h2><div class="rule"></div>'+
'<div class="card" style="overflow:auto;margin-bottom:14px">'+
'<table><thead><tr><th>時刻</th><th>症狀</th><th>COMBO</th><th>30 秒腳本</th></tr></thead><tbody>'+
'<tr><td><b>星期一頭節</b><br><span style="color:var(--muted)">收心＋連結</span></td><td>心還在假期，眼神渙散</td><td>⚡ 能量 ＋ 🤝 關係</td><td>大字形伸展 → 轉頭跟旁邊的人說「週末我做了＿＿」</td></tr>'+
'<tr><td><b>大下課後</b><br><span style="color:var(--muted)">調整狀態</span></td><td>喘、吵、剛剛有摩擦</td><td>🌊 靜心 ＋ 🤝 關係</td><td>泡泡呼吸 ×3 →「剛剛下課有沒有人幫過你？跟他說謝謝。」</td></tr>'+
'<tr><td><b>第一節課</b><br><span style="color:var(--muted)">專注開始</span></td><td>剛睡醒，大腦沒開機</td><td>⚡ 能量 ＋ 💡 反思</td><td>五指能量 →「今天這節課，你最想學會什麼？」</td></tr>'+
'<tr><td><b>體育課後</b><br><span style="color:var(--muted)">整理心緒</span></td><td>亢奮、汗、注意力發散</td><td>🌊 靜心 ＋ ⚡ 能量</td><td>閉眼靜坐 20 秒 → 手掌回收 →「回到教室的頻率。」</td></tr>'+
'<tr><td><b>最後一節</b><br><span style="color:var(--muted)">放學前準備</span></td><td>累、躁、歸心似箭</td><td>💡 反思 ＋ 🤝 關係</td><td>「今天帶走了什麼？」→ 對同組的人說一句謝謝</td></tr>'+
'<tr><td><b>考後靜心</b><br><span style="color:var(--muted)">靜心反思</span></td><td>失落、比較、有人哭</td><td>🌊 靜心 ＋ 💡 反思</td><td>泡泡呼吸 ×3 →「這次我發現我＿＿＿。」（不談分數）</td></tr>'+
'</tbody></table></div>'+
'<img class="shot" src="assets/poster6.jpg" alt="六大 COMBO 情境 A3 可列印海報">'+
'<div class="cap">A3 可列印海報 ── 空白欄位讓每位老師填自己班級的版本（TOOLSET 活動三會用到）</div>'},

{t:'活動二：情境辨識', part:'🎨 SKILLSET', time:'01:54', html:
'<div class="kicker"><span class="tag" style="background:#e7eff8;color:var(--mindful-d)">🃏 活動二 · 小組討論 · 10 分鐘</span></div>'+
'<h2 class="h-slide">你的班上，你看見什麼顏色？該用哪一顆膠囊？</h2>'+
'<p class="sub">組內分工：先各自判斷顏色，再一起決定膠囊，最後想出「你會對這個孩子說的那一句話」。</p><div class="rule"></div>'+
'<div class="card" style="overflow:auto">'+
'<table><thead><tr><th style="width:34px">#</th><th>情境</th><th style="width:96px">顏色</th><th style="width:120px">膠囊</th><th>你會說的一句話</th></tr></thead><tbody>'+
'<tr><td>1</td><td>小明在抄筆記時，鉛筆斷了。他用力把鉛筆盒摔在桌上，不說話。</td><td></td><td></td><td></td></tr>'+
'<tr><td>2</td><td>考試快開始了，小美一直問「這範圍有沒有出到第三章？」，一直翻課本。</td><td></td><td></td><td></td></tr>'+
'<tr><td>3</td><td>午飯時間，小華拿著便當坐到角落，低著頭，沒有找人說話。</td><td></td><td></td><td></td></tr>'+
'<tr><td>4</td><td>分組活動時，小陳主動邀請不熟的同學加入，笑著說「一起吧！」</td><td></td><td></td><td></td></tr>'+
'<tr><td>5</td><td>上課時老師點名，小偉皺著眉頭冷冷說「我不想回答」，把頭轉向窗外。</td><td></td><td></td><td></td></tr>'+
'<tr><td>6</td><td>小芳在上台報告前一直摸手指，低聲說「如果我說錯了怎麼辦？」</td><td></td><td></td><td></td></tr>'+
'<tr><td>7</td><td>下課後，小軒一個人坐在窗邊發呆，老師問他還好嗎，他只是輕輕搖頭。</td><td></td><td></td><td></td></tr>'+
'<tr><td>8</td><td>小玲交完作業後笑著告訴同學「這次我真的盡力了！」開心地鼓掌。</td><td></td><td></td><td></td></tr>'+
'</tbody></table></div>'+
'<div class="grid g4" style="margin-top:14px">'+
'<div class="col r" style="padding:.8em"><div class="e" style="font-size:1.6rem">😠</div><h4 style="font-size:1em">紅色 Red</h4><small>Angry · 生氣<br>場景 #___</small></div>'+
'<div class="col y" style="padding:.8em"><div class="e" style="font-size:1.6rem">😰</div><h4 style="font-size:1em">黃色 Yellow</h4><small>Anxious · 焦慮<br>場景 #___</small></div>'+
'<div class="col b" style="padding:.8em"><div class="e" style="font-size:1.6rem">😢</div><h4 style="font-size:1em">藍色 Blue</h4><small>Sad · 難過<br>場景 #___</small></div>'+
'<div class="col g" style="padding:.8em"><div class="e" style="font-size:1.6rem">😊</div><h4 style="font-size:1em">綠色 Green</h4><small>Happy · 開心<br>場景 #___</small></div>'+
'</div>'+
'<div class="note">⏱️ 10 分鐘。最後一欄最重要 —— <b>辨識顏色只是起點，你說的那一句話才是介入。</b><br>'+
'提示：#5 看起來是紅色，但常常底下是藍色（我不想被看見我不會）。<b>行為是表面，情緒才是訊號。</b></div>'},

{t:'關卡②：手勢默契挑戰', part:'🎨 SKILLSET', time:'01:56', html:
'<div class="kicker"><span class="tag" style="background:#e4f6ee;color:var(--reflect-d)">GAME 02 · 約 10 分鐘 · SKILLSET 驗收</span></div>'+
'<h2 class="h-slide">辰光五種手勢 · 你的班級默契有幾分？</h2>'+
'<p class="sub">看圖辨手勢、情境快問、COMBO 診斷 —— 三個回合，計時計分，組內比一下。</p>'+
'<div class="rule"></div>'+
'<div class="qrpage">'+
'<div class="qrbox" data-qr="g2.html"><div class="qrimg"></div><div class="u"></div><a class="go" href="#" target="_blank">直接開啟</a></div>'+
'<div>'+
'<ul class="bul">'+
'<li><b>ROUND 1 · 看圖辨手勢</b>：五種手勢的圖卡，選出對應的功能。</li>'+
'<li><b>ROUND 2 · 情境快問</b>：給你一個課堂畫面，選出該用哪一個手勢。</li>'+
'<li><b>ROUND 3 · COMBO 診斷</b>：給你一段班級症狀，配出正確的兩顆膠囊與順序。</li>'+
'<li><b>結束會給你一張成績卡</b>：可截圖給組長彙整，比一比哪一組默契最高。</li>'+
'</ul>'+
'<div class="note green">這個遊戲也可以直接拿去給學生玩 —— <b>把研習教具變成班級教具</b>，是最省力的一種備課。</div>'+
'</div></div>'},

{t:'為什麼手勢有效', part:'🎨 SKILLSET', time:'02:02', html:
'<h2 class="h-slide">零語言門檻，沒有人被排除在外</h2><div class="rule"></div>'+
'<div class="grid g4">'+
'<div class="card"><div class="tag">01</div><h4 style="margin:.5em 0 .3em">比說話快</h4>'+
'<p style="font-size:.92em;color:var(--ink2)">當教室很吵時，聲音是最沒有效率的工具 —— 你必須比噪音更大聲。手勢不需要跟噪音競爭。</p></div>'+
'<div class="card"><div class="tag">02</div><h4 style="margin:.5em 0 .3em">不帶情緒</h4>'+
'<p style="font-size:.92em;color:var(--ink2)">舉起拳頭沒有語氣。同一句「安靜！」可以是溫和的也可以是暴怒的，但手勢永遠是中性的 —— 這保護了師生關係。</p></div>'+
'<div class="card"><div class="tag">03</div><h4 style="margin:.5em 0 .3em">人人可用</h4>'+
'<p style="font-size:.92em;color:var(--ink2)">一年級、特教生、剛轉來的孩子、聽力弱的孩子 —— 都不會因為語言而被排除。</p></div>'+
'<div class="card"><div class="tag">04</div><h4 style="margin:.5em 0 .3em">可以被學生接手</h4>'+
'<p style="font-size:.92em;color:var(--ink2)">手勢是唯一一種<b>學生也能對老師使用</b>的班級語言。當孩子開始用「我有話要說」，班級經營就從管理變成對話。</p></div>'+
'</div>'+
'<div class="card" style="margin-top:16px;background:linear-gradient(160deg,#fff,#f0f6ff);border-top:6px solid var(--mindful)">'+
'<div class="tag" style="background:#e7eff8;color:var(--mindful-d)">SKILLSET 小結</div>'+
'<h4 style="margin:.5em 0 .3em">我知道情緒的語言</h4>'+
'<p style="color:var(--ink2)">① 學生端：四色 × 四種應對策略　② 老師端：四顆膠囊 × 診斷矩陣 × COMBO　③ 全校端：五種手勢</p>'+
'<p style="color:var(--muted);font-size:.9em">帶著這三套語言，我們進入 TOOLSET —— 把它放進一天的時間軸裡。</p></div>'},

/* ========== TOOLSET · WE DO ========== */
{t:'TOOLSET · 從平面到立體', part:'🧰 TOOLSET', time:'02:05', sec:true, html:
'<div class="divider">'+
'<div class="num" style="color:var(--relate)">🧰</div>'+
'<h2>TOOLSET</h2>'+
'<p>工具層 · 掌握「怎麼做」<br>從平面到立體，從自身到學生，從一個班到一所學校。</p>'+
'<div class="time">WE DO ｜ 02:05 – 02:45 ｜ 40 minutes（含活動三）</div></div>'},

{t:'從平面到立體', part:'🧰 TOOLSET', time:'02:06', html:
'<h2 class="h-slide">你剛才學的是情緒的「語言」；導航員，是讓它「流動」的工具</h2><div class="rule"></div>'+
'<div class="grid g3" style="align-items:stretch">'+
'<div class="card" style="border-top:6px solid var(--muted)">'+
'<div class="tag">平面 · 靜態快照</div>'+
'<div style="font-size:2.2rem;margin:.4em 0">😠 😰 😢 😊</div>'+
'<ul class="bul" style="font-size:.93em"><li>知道有四種情緒</li><li>可以說出名字</li><li>靜態辨識</li></ul>'+
'<div class="use" style="background:#eef3f9;color:var(--ink2);font-size:.85em;font-weight:700;border-radius:10px;padding:.5em .7em">✓ 知道情緒的名字</div></div>'+
'<div class="card" style="display:grid;place-content:center;text-align:center;background:linear-gradient(160deg,#fff,#fff7f0)">'+
'<div style="font-size:2.4rem;color:var(--dawn)">→</div>'+
'<div style="font-weight:900;margin-top:.3em">延伸</div>'+
'<p style="font-size:.88em;color:var(--muted);margin-top:.4em">把「一次覺察」<br>放進「一天的時間軸」</p></div>'+
'<div class="card" style="border-top:6px solid var(--dawn)">'+
'<div class="tag" style="background:#ffe9d9;color:#a5501f">立體 · 動態旅程</div>'+
'<div style="font-size:2.2rem;margin:.4em 0">🌡️</div>'+
'<ul class="bul" style="font-size:.93em"><li>追蹤情緒的變化</li><li>看見情緒的規律</li><li>在時間中覺察</li></ul>'+
'<div class="use" style="background:#fff3e8;color:#a5501f;font-size:.85em;font-weight:700;border-radius:10px;padding:.5em .7em">✓ 知道情緒「怎麼流動」</div></div>'+
'</div>'+
'<div class="note">💡 關鍵原則：<b>Check-in 是「覺察工具」，不是「評分工具」—— 沒有對錯，只有誠實。</b><br>'+
'一旦孩子發現這件事會被打分數，他就會開始表演，而你就再也拿不到真實的資料了。</div>'},

{t:'校園一日導航時間軸', part:'🧰 TOOLSET', time:'02:09', html:
'<h2 class="h-slide">School-Day Journey Map</h2>'+
'<p class="sub">把 COMBO 掛到時鐘上 —— 一天當中，你只需要記住四個時刻。</p><div class="rule"></div>'+
'<img class="shot" src="assets/journey.jpg" alt="校園一日導航時間軸">'+
'<div class="note">如果你覺得四個太多，就先做<b>兩個</b>：早上第一節、放學前最後一節。'+
'一頭一尾，是最容易養成、也最容易被學生記住的兩個儀式。</div>'},

{t:'看圖點餐，三秒啟動', part:'🧰 TOOLSET', time:'02:12', html:
'<h2 class="h-slide">如果要做成工具，它應該長這樣</h2>'+
'<p class="sub">教師觀察班級狀態 → 直接點擊膠囊按鈕 → 系統立即引導。不用翻手冊、不用想活動。</p><div class="rule"></div>'+
'<img class="shot" src="assets/app.jpg" alt="App 實務操作：四大膠囊按鈕介面">'+
'<div class="grid g4" style="margin-top:16px">'+
'<div class="qc mindful"><h4><span class="ico">🪞</span>老師先體驗</h4><p style="margin:0">親身感受工具的運作，才知道孩子的經驗是什麼。</p></div>'+
'<div class="qc energy"><h4><span class="ico">👁️</span>觀察學生的顏色</h4><p style="margin:0">看見行為背後的情緒，而不只是行為本身。</p></div>'+
'<div class="qc relate"><h4><span class="ico">💬</span>說出顏色語言</h4><p style="margin:0">「你現在感覺像什麼顏色？」是最好的開場。</p></div>'+
'<div class="qc reflect"><h4><span class="ico">🌱</span>陪伴，不評判</h4><p style="margin:0">不急著解決，先接受情緒的存在。</p></div>'+
'</div>'+
'<div class="note green">工具的意義不是花俏，是<b>降低使用門檻到「不需要意志力」的程度</b>。'+
'你今天帶回去的 12 招速查表與六大 COMBO 海報，就是這個介面的紙本版。</div>'},

{t:'活動三：我的第一週 Check-in 課表', part:'🧰 TOOLSET', time:'02:15', html:
'<div class="kicker"><span class="tag" style="background:#fdece7;color:var(--relate-d)">🌡️ 活動三 · WE DO 實作 · 15 分鐘</span></div>'+
'<h2 class="h-slide">下週一到週五，六個時段各用哪一顆膠囊？</h2>'+
'<p class="sub">只做一週。不要規劃一學期 —— 規劃一學期的計畫，通常活不過第三週。</p><div class="rule"></div>'+
'<div class="card" style="overflow:auto">'+
'<table><thead><tr><th>時段</th><th>你的班常見症狀（看得到的畫面）</th><th>主膠囊</th><th>副膠囊</th><th>你的第一句話</th></tr></thead><tbody>'+
'<tr><td><b>星期一頭節</b><br><span style="color:var(--muted);font-size:.9em">收心＋連結</span></td><td></td><td></td><td></td><td></td></tr>'+
'<tr><td><b>大下課後</b><br><span style="color:var(--muted);font-size:.9em">調整狀態</span></td><td></td><td></td><td></td><td></td></tr>'+
'<tr><td><b>第一節課</b><br><span style="color:var(--muted);font-size:.9em">專注開始</span></td><td></td><td></td><td></td><td></td></tr>'+
'<tr><td><b>體育課後</b><br><span style="color:var(--muted);font-size:.9em">整理心緒</span></td><td></td><td></td><td></td><td></td></tr>'+
'<tr><td><b>最後一節</b><br><span style="color:var(--muted);font-size:.9em">放學前準備</span></td><td></td><td></td><td></td><td></td></tr>'+
'<tr><td><b>考後靜心</b><br><span style="color:var(--muted);font-size:.9em">靜心反思</span></td><td></td><td></td><td></td><td></td></tr>'+
'</tbody></table></div>'+
'<div class="grid g2" style="margin-top:14px">'+
'<div class="card" style="border-top:6px solid var(--relate)"><h4 style="margin-bottom:.4em">📋 操作步驟</h4>'+
'<ol class="bul" style="font-size:.93em">'+
'<li>個人填寫：只挑<b>你確定做得到</b>的格子填，空著沒關係。<span style="color:var(--muted)">（5 分鐘）</span></li>'+
'<li>組內互看：每人 90 秒，只問一個問題 ——「<b>這件事，你下週三真的做得出來嗎？</b>」<span style="color:var(--muted)">（7 分鐘）</span></li>'+
'<li>當場改小：做不出來的，就改到 30 秒、改到不用道具、改到不用另外備課為止。<span style="color:var(--muted)">（3 分鐘）</span></li>'+
'</ol></div>'+
'<div class="card" style="border-top:6px solid var(--reflect)"><h4 style="margin-bottom:.4em">✅ 檢查你的表：三個條件</h4>'+
'<ul class="bul" style="font-size:.93em">'+
'<li><b>短</b> —— 每一格都在 60 秒以內。</li>'+
'<li><b>可觀察</b> —— 你說得出「成功長什麼樣子」（例如：不用喊第二次就能開始上課）。</li>'+
'<li><b>不用另外找時間</b> —— 它掛在你本來就會做的事上面。</li>'+
'</ul>'+
'<p style="font-size:.9em;color:var(--muted);margin-top:.6em">三個條件都符合，這一格才會活過第三週。</p></div>'+
'</div>'+
'<div class="note">填不完沒關係。<b>只要有一格是你確定會做的，今天就值回票價了。</b>'+
'（這張表的 A3 可列印版本，就是剛剛看過的六大 COMBO 海報。）</div>'},

{t:'三個一致性', part:'🧰 TOOLSET', time:'02:30', html:
'<h2 class="h-slide">一致的流程 · 一致的語言 · 一致的態度</h2>'+
'<p class="sub">這三個「一致」，就是把六個班變成一所學校的方法。</p><div class="rule"></div>'+
'<div class="steps" style="grid-template-columns:repeat(3,minmax(0,1fr))">'+
'<div class="step"><span class="n">前</span><h4>整隊帶隊</h4><p>整齊安靜 · 目標清楚 · 帶隊一致</p><div class="say">每個班走到定點的方式一樣，孩子才知道「這是同一件事」</div></div>'+
'<div class="step"><span class="n">中</span><h4>閉眼精心等候</h4><p>閉眼安靜 · 專注呼吸 · 心在團隊</p><div class="say">等待不是浪費時間，等待本身就是課程</div></div>'+
'<div class="step"><span class="n">後</span><h4>PDCA 或 4F 引導</h4><p>回顧反思 · 分享學習 · 應用實踐</p><div class="say">Facts 事實 ▸ Feelings 感受 ▸ Findings 發現 ▸ Future 未來</div></div>'+
'</div>'+
'<div class="note blue">「一致」比「精緻」重要一百倍。'+
'如果六位老師各自做了六套很棒但不一樣的 Check-in，孩子學到的是<b>六套規則</b>，不是一種文化。</div>'},

{t:'圍圈 × 七大品格', part:'🧰 TOOLSET', time:'02:33', html:
'<h2 class="h-slide">當 Check-in 長大，它會變成圍圈</h2>'+
'<p class="sub">Check-in 是 30 秒的個人覺察；圍圈是 20 分鐘的團體覺察。同一套語言，不同的尺度。</p><div class="rule"></div>'+
'<div class="grid g2">'+
'<div class="card">'+
'<h4 style="margin-bottom:.5em">辰光的圍圈規格</h4>'+
'<ul class="bul" style="font-size:.93em">'+
'<li><b>時間</b>：每週四 15:00–15:20（寫進學校行事曆）</li>'+
'<li><b>分圈</b>：學生 1–3 年級／4–6 年級分開；教職員另有 Meeting Circle</li>'+
'<li><b>流程</b>：前（整隊帶隊）→ 中（閉眼精心等候）→ 後（PDCA 或 4F 引導）</li>'+
'<li><b>輪值</b>：全校教師輪流帶，不是固定一個人的事</li>'+
'<li><b>長期目標</b>：116 學年度由學生自主帶領</li>'+
'</ul>'+
'<div class="note" style="margin-top:1em;box-shadow:none;background:#f7fafd">沒有進行事曆的事，就是不存在的事。</div>'+
'</div>'+
'<div class="card" style="background:linear-gradient(160deg,#fff,#fdf7f2)">'+
'<h4 style="margin-bottom:.5em">連結七大品格</h4>'+
'<div class="grid" style="grid-template-columns:repeat(2,1fr);gap:8px;font-size:.92em">'+
'<div style="background:#fff;border-radius:12px;padding:.5em .7em;box-shadow:var(--sh)">❤️ <b>堅毅</b> Grit</div>'+
'<div style="background:#fff;border-radius:12px;padding:.5em .7em;box-shadow:var(--sh)">🧡 <b>樂觀</b> Optimism</div>'+
'<div style="background:#fff;border-radius:12px;padding:.5em .7em;box-shadow:var(--sh)">💛 <b>熱情</b> Zest</div>'+
'<div style="background:#fff;border-radius:12px;padding:.5em .7em;box-shadow:var(--sh)">💚 <b>自制</b> Self-control</div>'+
'<div style="background:#fff;border-radius:12px;padding:.5em .7em;box-shadow:var(--sh)">💙 <b>感恩</b> Gratitude</div>'+
'<div style="background:#fff;border-radius:12px;padding:.5em .7em;box-shadow:var(--sh)">💜 <b>社交智慧</b> Social IQ</div>'+
'<div style="background:#fff;border-radius:12px;padding:.5em .7em;box-shadow:var(--sh);grid-column:span 2">🤎 <b>好奇心</b> Curiosity</div>'+
'</div>'+
'<p style="font-size:.9em;color:var(--ink2);margin-top:.8em">每個月聚焦一個品格，圍圈的引導問題就從那個品格出發 ——'+
'這樣<b>品格教育與情緒教育不會變成兩套系統</b>。</p>'+
'</div></div>'},

{t:'行政的五根槓桿', part:'🧰 TOOLSET', time:'02:37', html:
'<div class="eyebrow">給校長 · 主任 · 學年主任</div>'+
'<h2 class="h-slide">你真正握在手上的五根槓桿</h2><div class="rule"></div>'+
'<div class="grid g3">'+
'<div class="card"><div class="tag">01 人 People</div><h4 style="margin:.5em 0 .3em">誰先做？</h4>'+
'<p style="font-size:.92em;color:var(--ink2)">找 2–3 個「已經在做一點點」的老師。<b>不要找最強的，要找最願意的。</b></p></div>'+
'<div class="card" style="border-top:6px solid var(--dawn)"><div class="tag">02 時間 Time</div><h4 style="margin:.5em 0 .3em">什麼時候做？</h4>'+
'<p style="font-size:.92em;color:var(--ink2)">共備時間必須在課表上，不能靠加班。辰光：每週四 15:00–15:20。'+
'<b>這是校長唯一能給、也最該給的資源。</b></p></div>'+
'<div class="card"><div class="tag">03 錢 Money</div><h4 style="margin:.5em 0 .3em">花在哪裡？</h4>'+
'<p style="font-size:.92em;color:var(--ink2)">不要花在套裝教材（不合用）。花在：讓老師出去看別人怎麼做、把老師送出去當講者、印製學習單與教具。</p></div>'+
'<div class="card"><div class="tag">04 資料 Evidence</div><h4 style="margin:.5em 0 .3em">怎麼證明有效？</h4>'+
'<p style="font-size:.92em;color:var(--ink2)">共備紀錄、學習單、上課影片、個案追蹤表、學生回饋 —— 累積下來就是任何評鑑、訪視、家長質疑最有力的回應。</p></div>'+
'<div class="card"><div class="tag">05 敘事 Narrative</div><h4 style="margin:.5em 0 .3em">這件事叫什麼名字？</h4>'+
'<p style="font-size:.92em;color:var(--ink2)">辰光叫「A-B-C 三階段」和「五種手勢」。'+
'<b>有名字，老師才有歸屬感；沒名字，它永遠是「上面交代下來的」。</b></p></div>'+
'<div class="card" style="background:var(--ink);color:#fff">'+
'<div class="tag" style="background:rgba(255,255,255,.16);color:#fff">如果只能拉一根</div>'+
'<h4 style="margin:.5em 0 .3em;color:#fff">拉「時間」。</h4>'+
'<p style="font-size:.95em;color:#d6dfe9">給老師一節課表上的共備時間，比給他十萬塊有用。錢會用完，時間會變成習慣。</p></div>'+
'</div>'},

{t:'四種抗拒與回應', part:'🧰 TOOLSET', time:'02:41', html:
'<h2 class="h-slide">每一種抗拒，要用不同的話回應</h2>'+
'<p class="sub">抗拒不是壞事。抗拒代表老師認真在想這件事能不能做。</p><div class="rule"></div>'+
'<div class="grid g2">'+
'<div class="card" style="border-left:6px solid var(--energy)"><h4>「我又不是輔導老師」</h4>'+
'<p style="font-size:.93em;color:var(--ink2)"><b>角色型抗拒 · 最常見、最好解</b><br>'+
'「你不用當輔導老師。你只要在上課前花 30 秒，讓學生比一個顏色。你不用回應，只要說『我看到了』。」</p>'+
'<p style="font-size:.86em;color:var(--muted)">▸ 邀請他來看一次別人怎麼做，不要先叫他做。</p></div>'+
'<div class="card" style="border-left:6px solid var(--mindful)"><h4>「進度來不及」</h4>'+
'<p style="font-size:.93em;color:var(--ink2)"><b>現實型抗拒 · 真的有道理</b><br>'+
'「不加課、不趕進度。這 30 秒是<b>從你原本要花在維持秩序的時間裡省下來的</b>，不是額外加的。」</p>'+
'<p style="font-size:.86em;color:var(--muted)">▸ 行政自己去把時間縫隙找出來，不要叫老師找。</p></div>'+
'<div class="card" style="border-left:6px solid var(--relate)"><h4>「這對成績有幫助嗎？」</h4>'+
'<p style="font-size:.93em;color:var(--ink2)"><b>價值型抗拒 · 最尖銳</b><br>'+
'誠實面對：短期內不會直接提高成績。但可以指出 —— <b>學生沒有進入可學習狀態，任何教學都是無效的</b>。這不是加法，是前置條件。</p>'+
'<p style="font-size:.86em;color:var(--muted)">▸ 不要辯贏他。承認限制，反而會贏得信任。</p></div>'+
'<div class="card" style="border-left:6px solid var(--muted)"><h4>沉默不表態</h4>'+
'<p style="font-size:.93em;color:var(--ink2)"><b>觀望型 · 人數最多、決定成敗</b><br>'+
'不要開會逼表態。讓前面 2–3 位先做，把成果放在他們每天會看到的地方（走廊、群組、晨會）。</p>'+
'<p style="font-size:.86em;color:var(--muted)">▸ 觀望者是被「看見」說服的，不是被「說服」說服的。</p></div>'+
'</div>'+
'<div class="note">行政的成功指標不是「全校都在做」，而是<b>「做的人沒有覺得孤單」</b>。</div>'},

/* ========== 整合與承諾 ========== */
{t:'三層整合：你今天走過的旅程', part:'✨ 承諾收尾', time:'02:45', sec:true, html:
'<h2 class="h-slide">三層整合：你今天走過的旅程</h2><div class="rule"></div>'+
'<div class="grid g3">'+
'<div class="card" style="border-top:6px solid var(--energy)">'+
'<div style="font-size:2rem">🌱</div>'+
'<div class="tag" style="background:#fdf3e0;color:var(--energy-d);margin-top:.4em">MINDSET · 心態層</div>'+
'<h3 style="margin:.5em 0 .35em;font-size:1.1em">理解「為什麼」</h3>'+
'<ul class="bul" style="font-size:.92em"><li>狀態先於內容</li><li>情緒不是問題，是訊號</li><li>老師覺察，是學生的安全感來源</li></ul>'+
'<div class="use" style="background:#fdf3e0;color:var(--energy-d);font-size:.85em;font-weight:800;border-radius:10px;padding:.5em .7em">→ 我理解情緒教育的意義</div></div>'+
'<div class="card" style="border-top:6px solid var(--mindful)">'+
'<div style="font-size:2rem">🎨</div>'+
'<div class="tag" style="background:#e7eff8;color:var(--mindful-d);margin-top:.4em">SKILLSET · 技能層</div>'+
'<h3 style="margin:.5em 0 .35em;font-size:1.1em">學習「是什麼」</h3>'+
'<ul class="bul" style="font-size:.92em"><li>四色情緒的特徵與應對策略</li><li>四顆膠囊 × 診斷矩陣 × COMBO</li><li>五種手勢的全校共通語言</li></ul>'+
'<div class="use" style="background:#e7eff8;color:var(--mindful-d);font-size:.85em;font-weight:800;border-radius:10px;padding:.5em .7em">→ 我知道情緒的語言</div></div>'+
'<div class="card" style="border-top:6px solid var(--relate)">'+
'<div style="font-size:2rem">🧰</div>'+
'<div class="tag" style="background:#fdece7;color:var(--relate-d);margin-top:.4em">TOOLSET · 工具層</div>'+
'<h3 style="margin:.5em 0 .35em;font-size:1.1em">掌握「怎麼做」</h3>'+
'<ul class="bul" style="font-size:.92em"><li>12 招速查表 ＋ 六大 COMBO 海報</li><li>校園一日導航時間軸</li><li>我的第一週 Check-in 課表</li></ul>'+
'<div class="use" style="background:#fdece7;color:var(--relate-d);font-size:.85em;font-weight:800;border-radius:10px;padding:.5em .7em">→ 我有記錄與引導的工具</div></div>'+
'</div>'+
'<div class="note">今天你同時體驗了三個層次 —— <b>帶著它回到教室，開始你自己的 Check-in 旅程</b> 🌟<br>'+
'<span style="color:var(--muted);font-size:.92em">而且請注意：你不只是「聽」了三層，你在每一層的結尾都<b>動手做過一次</b>（活動一 · 活動二 · 活動三）。</span></div>'},

{t:'我的第一步', part:'✨ 承諾收尾', time:'02:50', html:
'<div class="eyebrow">🌱 承諾 · Commitment</div>'+
'<h2 class="h-slide">工作坊結束後，這週我要做的一件事</h2>'+
'<p class="sub">只挑一件。在心中，或在便利貼上，寫下你選擇的那一個。</p><div class="rule"></div>'+
'<div class="grid g3">'+
'<div class="card" style="border-top:6px solid var(--energy);text-align:center">'+
'<div style="font-size:2.4rem">🌡️</div>'+
'<h3 style="margin:.4em 0 .3em;font-size:1.15em">在班上試用</h3>'+
'<p style="color:var(--ink2)">一個 30 秒的 Check-in<br><span style="color:var(--muted);font-size:.9em">（挑一個時段，做滿五天）</span></p></div>'+
'<div class="card" style="border-top:6px solid var(--mindful);text-align:center">'+
'<div style="font-size:2.4rem">🪞</div>'+
'<h3 style="margin:.4em 0 .3em;font-size:1.15em">自己每天記錄</h3>'+
'<p style="color:var(--ink2)">一次自己的情緒顏色<br><span style="color:var(--muted);font-size:.9em">（老師先覺察，學生才敢說）</span></p></div>'+
'<div class="card" style="border-top:6px solid var(--relate);text-align:center">'+
'<div style="font-size:2.4rem">💬</div>'+
'<h3 style="margin:.4em 0 .3em;font-size:1.15em">對一個學生說出</h3>'+
'<p style="color:var(--ink2)">「你現在是什麼顏色？」<br><span style="color:var(--muted);font-size:.9em">（先命名，再好奇）</span></p></div>'+
'</div>'+
'<div class="card" style="margin-top:16px;background:linear-gradient(160deg,#fff,#fff7f0)">'+
'<h4 style="margin-bottom:.5em">📆 如果你想做久一點：回校之後的四週</h4>'+
'<div class="steps" style="margin-top:.6em">'+
'<div class="step"><span class="n">WEEK 1</span><h4>自己先做</h4><p>只挑一個時段、一顆膠囊，自己做五天。不用跟任何人講。</p></div>'+
'<div class="step"><span class="n">WEEK 2</span><h4>加一個 Check-out</h4><p>頭尾成對。下課前一句「今天你帶走了什麼？」</p></div>'+
'<div class="step"><span class="n">WEEK 3</span><h4>找一個同伴</h4><p>找一位願意的同事，一起做同一個動作，互相看一次。</p></div>'+
'<div class="step"><span class="n">WEEK 4</span><h4>讓它被看見</h4><p>把學生的一句話、一張照片，放在全校看得到的地方。</p></div>'+
'</div>'+
'<p style="margin-top:.9em;font-size:.92em;color:var(--ink2)">第 29 天你會有：<b>一個穩定的動作、一位同伴、一段可以講的故事。</b>'+
'這就足夠開始第二個月了 —— 而大部分學校，卡在第一週就沒有開始。</p></div>'},

{t:'CHECK-OUT：你現在又是什麼顏色？', part:'✨ 承諾收尾', time:'02:54', html:
'<div class="eyebrow">CHECK-OUT · SEL CIRCLE · We do!</div>'+
'<h2 class="h-slide">🌡️ 三小時之後，你的顏色變了嗎？</h2>'+
'<p class="sub">感謝你今天的參與 —— 每一個你經歷過的情緒，都是你最好的老師。</p><div class="rule"></div>'+
'<div class="colors">'+
'<div class="col r"><div class="e">😠</div><h4>紅</h4><small>我還有話沒說</small></div>'+
'<div class="col y"><div class="e">😰</div><h4>黃</h4><small>我擔心做不出來</small></div>'+
'<div class="col b"><div class="e">😢</div><h4>藍</h4><small>我有點累了</small></div>'+
'<div class="col g"><div class="e">😊</div><h4>綠</h4><small>我知道下週一要做什麼</small></div>'+
'</div>'+
'<div class="note">圍圈收尾（3 分鐘）：回到你的組，每人用一句話說 ——<br>'+
'<b>「我現在是＿＿色，因為＿＿＿＿。這週我要做的一件事是＿＿＿＿。」</b><br>'+
'<span style="color:var(--muted);font-size:.92em">不評論、不給建議、不打斷。說完的人，下一位先回一句「我聽到了」。</span></div>'},

{t:'三句帶走的話', part:'✨ 承諾收尾', time:'02:57', html:
'<h2 class="h-slide">如果今天只帶走三句話</h2><div class="rule"></div>'+
'<div class="grid g3">'+
'<div class="card" style="border-top:6px solid var(--energy)">'+
'<div class="tag" style="background:#fdf3e0;color:var(--energy-d)">MINDSET</div>'+
'<h3 style="margin:.5em 0 .35em;font-size:1.2em">狀態先於內容。</h3>'+
'<p style="color:var(--ink2);font-size:.95em">沒有正確的頻率，最好的教學也無法被接收。'+
'那 30 秒不是從教學時間裡扣掉的，是為了讓後面 40 分鐘真的能進去。</p></div>'+
'<div class="card" style="border-top:6px solid var(--mindful)">'+
'<div class="tag" style="background:#e7eff8;color:var(--mindful-d)">SKILLSET</div>'+
'<h3 style="margin:.5em 0 .35em;font-size:1.2em">先辨識，不要急著消除。</h3>'+
'<p style="color:var(--ink2);font-size:.95em">情緒不是麻煩，是身體在說「這件事對我很重要」。'+
'老師的任務是幫孩子辨識，不是幫他把情緒關掉。</p></div>'+
'<div class="card" style="border-top:6px solid var(--relate)">'+
'<div class="tag" style="background:#fdece7;color:var(--relate-d)">TOOLSET</div>'+
'<h3 style="margin:.5em 0 .35em;font-size:1.2em">短、重複、一致。</h3>'+
'<p style="color:var(--ink2);font-size:.95em">一個 15 分鐘的完美活動做三次就停了；'+
'一個 30 秒的動作可以做三年。<b>能被重複的，才會變成文化。</b></p></div>'+
'</div>'+
'<div class="note">最後補一句我自己的：<b>老師先覺察，學生才敢說。</b>'+
'今天如果你只記得一件事，我希望是這一件 —— 因為它不需要任何資源，'+
'只需要你願意在孩子面前，誠實地說出自己現在是什麼顏色。</div>'},

{t:'Q & A · 謝謝', part:'✨ 承諾收尾', time:'02:58', html:
'<div class="divider">'+
'<div class="num" style="color:var(--dawn)">?</div>'+
'<h2>Q &amp; A</h2>'+
'<p style="font-size:1.05em;color:var(--ink2)">我先問一個問題：<br>'+
'<b>今天哪一頁，你覺得在鹿場「完全行不通」？</b></p>'+
'<p style="margin-top:.8em">行不通的地方，才是我們今天真正該談的地方。</p>'+
'<div class="time" style="margin-top:2em">陳彥揚　校長<br>'+
'<span style="color:var(--muted);font-weight:600">雲林縣辰光國小　·　前興南國小　·　雲林縣英語資源中心</span></div>'+
'<p style="margin-top:1.4em;font-size:1.1em;font-weight:900;color:var(--dawn)">Thank you.　I can do it!</p>'+
'<p style="font-size:.85em;color:var(--muted)">—— 這是辰光每個週一，全校一起喊的最後一句。</p>'+
'</div>'},

/* ========== 附錄（主持人用） ========== */
{t:'附錄 A · 主持人操作頁', part:'附錄', time:'—', sec:true, html:
'<div class="kicker"><span class="tag" style="background:#ffe9d9;color:#a5501f">主持人用 · 不對外</span></div>'+
'<h2 class="h-slide">Host Console 場佈檢查</h2><div class="rule"></div>'+
'<div class="qrpage">'+
'<div class="qrbox" data-qr="index.html"><div class="qrimg"></div><div class="u"></div><a class="go" href="#">開啟簡報</a></div>'+
'<div>'+
'<ol class="bul">'+
'<li><b>開場前 15 分鐘</b>：電腦開兩個分頁 —— 這份簡報（投影）＋ <code>g1.html</code>（主持人分組器備用）。</li>'+
'<li><b>投影</b>：按右下角「⛶ 全螢幕」。簡報會自動依螢幕縮放，手機也能看。</li>'+
'<li><b>計時器</b>：點右上角 ⏱ 開始／暫停，<b>雙擊歸零</b>。旁邊會顯示目前段落，超過 3 小時變紅。</li>'+
'<li><b>三個關鍵動作點</b>：<br>① P2 情緒顏色分組（開場即完成分組）<br>② P38 手勢默契挑戰<br>③ 三個活動（P24 情緒地圖 · P37 情境辨識 · P44 我的第一週）</li>'+
'<li><b>不上傳任何資料</b>：兩個遊戲都在手機本機執行，不蒐集個資、不需要後台。</li>'+
'<li><b>分組組數</b>：預設 6 組。要改成別的組數，網址加參數 <code>g1.html?g=8</code>。</li>'+
'</ol>'+
'<div class="note blue">鍵盤：<b>← →</b> 翻頁、<b>空白鍵</b> 下一頁、<b>M</b> 開目錄、<b>Home/End</b> 首尾。手機可左右滑動。</div>'+
'</div></div>'},

{t:'附錄 B · Run Sheet', part:'附錄', time:'—', html:
'<div class="eyebrow">主持人用 · 也可投給學員看</div>'+
'<h2 class="h-slide">3 小時完整跑法</h2>'+
'<p class="sub">Mindset ▸ Skillset ▸ Toolset　三層，每層都以一個動手活動收尾。</p><div class="rule"></div>'+
'<div class="card" style="overflow:auto">'+
'<table><thead><tr><th>時間</th><th>層次</th><th>段落</th><th>投影</th><th>學員做什麼</th></tr></thead><tbody>'+
'<tr><td>00:00</td><td>—</td><td><b>開場 CHECK-IN 1 / 2</b>（15′）</td><td>P1–P5</td><td>選色 ▸ 掃碼分組 ▸ 組內分享「桌下的按鈕」</td></tr>'+
'<tr><td>00:15</td><td style="background:#fff3e8;font-weight:800;color:#a5501f">I DO</td><td><b>BEFORE SEL · 辰光現場</b>（25′）</td><td>P6–P15</td><td>聽；記下一個「我們也做得到」的點</td></tr>'+
'<tr><td>00:40</td><td style="background:#fdf3e0;font-weight:800;color:var(--energy-d)">MINDSET</td><td><b>為什麼情緒教育很重要</b>（30′）</td><td>P16–P24</td><td>活動一：我的情緒地圖（POST IT ＋ 跨組分享）</td></tr>'+
'<tr><td>01:10</td><td>—</td><td>休息（10′）</td><td>P25</td><td>休息；回座前做一次泡泡呼吸</td></tr>'+
'<tr><td>01:20</td><td style="background:#e7eff8;font-weight:800;color:var(--mindful-d)">SKILLSET</td><td><b>四色語言 × 四顆膠囊</b>（45′）</td><td>P26–P39</td><td>活動二：情境辨識 ＋ 關卡② 手勢默契挑戰</td></tr>'+
'<tr><td>02:05</td><td style="background:#fdece7;font-weight:800;color:var(--relate-d)">TOOLSET</td><td><b>一日導航與落地</b>（40′）</td><td>P40–P48</td><td>活動三：我的第一週 Check-in 課表</td></tr>'+
'<tr><td>02:45</td><td>—</td><td><b>三層整合 ▸ 我的第一步 ▸ Check-out ▸ Q&amp;A</b>（15′）</td><td>P49–P53</td><td>寫下承諾；圍圈收尾；提問</td></tr>'+
'</tbody></table></div>'+
'<div class="grid g3" style="margin-top:16px">'+
'<div class="qc energy"><h4><span class="ico">1</span>活動一 · P24</h4><p style="margin:0">我的情緒地圖（老師版）<br>個人 3′ ▸ 組內 5′ ▸ 跨組 10′</p></div>'+
'<div class="qc mindful"><h4><span class="ico">2</span>活動二 · P37</h4><p style="margin:0">情境辨識 8 題<br>小組討論 10′</p></div>'+
'<div class="qc relate"><h4><span class="ico">3</span>活動三 · P44</h4><p style="margin:0">我的第一週 Check-in 課表<br>個人 5′ ▸ 組內 7′ ▸ 改小 3′</p></div>'+
'</div>'+
'<div class="note">整場的節奏原則：<b>講 20 分鐘，就一定要動一次。</b>老師的專注曲線和學生一樣，會掉。</div>'}

];
