/* ===== 四色情緒溫度計工作坊 · 90 分鐘 · 投影片內容 =====
   結構：CHECK-IN(10') ▸ 介紹(20') ▸ 實作(45') ▸ 回饋(15')
   顏色對應（與 SEL Check-in 導航員主課程一致）：
   紅＝生氣／憤怒(--relate) 黃＝焦慮／緊張(--energy) 藍＝憂鬱／難過(--mindful) 綠＝開心／平靜(--reflect)
*/
var SLIDES = [

/* ========== 封面 ========== */
{t:'封面', part:'封面', time:'', html:
'<div class="divider">'+
'<div class="num" style="color:var(--dawn)">🌡️</div>'+
'<h2>四色情緒溫度計工作坊</h2>'+
'<p>90 分鐘 · 學員自製專屬情緒溫度計<br>CHECK-IN ▸ 介紹 ▸ 實作 ▸ 回饋</p>'+
'<div class="time">90 分鐘 · 一次一種顏色，說出你的狀態</div>'+
'</div>'},

{t:'今日流程總覽', part:'總覽', time:'00:00', html:
'<div class="kicker"><span class="tag">總覽</span></div>'+
'<h2 class="h-slide">90 分鐘，四個段落</h2>'+
'<p class="sub">每個段落都圍著同一件事：把「我現在的狀態」講清楚，再學會怎麼照顧它。</p>'+
'<div class="rule"></div>'+
'<div class="tl">'+
'<div class="tl-i"><b>00:00 · CHECK-IN（10 分鐘）</b><span>舉色卡，說出你現在的溫度</span></div>'+
'<div class="tl-i"><b>00:10 · 介紹（20 分鐘）</b><span>四色情緒語言 × 什麼是情緒溫度計</span></div>'+
'<div class="tl-i"><b>00:30 · 實作（45 分鐘）</b><span>動手做出屬於自己的情緒溫度計</span></div>'+
'<div class="tl-i"><b>01:15 · 回饋（15 分鐘）</b><span>分享、反思、帶回去怎麼用</span></div>'+
'</div>'+
'<div class="note">結束時間約 <b>01:30</b>。時間僅供參考，依現場狀況彈性調整——實作段落若學員投入，可以多留一點時間。</div>'},

/* ========== CHECK-IN ========== */
{t:'CHECK-IN · 今天你是什麼顏色', part:'🟢 CHECK-IN', time:'00:00', sec:true, html:
'<div class="divider">'+
'<div class="num" style="color:var(--reflect)">👋</div>'+
'<h2>CHECK-IN</h2>'+
'<p>10 分鐘 · 在開始之前，先誠實地說一句：我現在是什麼顏色。</p>'+
'</div>'},

{t:'開場 Check-in：舉色卡', part:'🟢 CHECK-IN', time:'00:02', html:
'<div class="kicker"><span class="tag" style="background:#fdece7;color:var(--relate-d)">活動 · 約 5 分鐘</span></div>'+
'<h2 class="h-slide">用一張色卡，說出你現在的溫度</h2>'+
'<p class="sub">每人拿一組四色卡。主持人喊「現在」，大家同時舉起代表自己心情的顏色——不用解釋，也可以簡短說一句。</p>'+
'<div class="rule"></div>'+
'<div class="colors">'+
'<div class="col r"><div class="e">😠</div><h4>紅</h4><small>生氣／憤怒</small></div>'+
'<div class="col y"><div class="e">😰</div><h4>黃</h4><small>焦慮／緊張</small></div>'+
'<div class="col b"><div class="e">😢</div><h4>藍</h4><small>難過／低落</small></div>'+
'<div class="col g"><div class="e">😊</div><h4>綠</h4><small>開心／平靜</small></div>'+
'</div>'+
'<div class="note green">沒有「錯的顏色」。今天的目的不是要大家都變綠色，而是先誠實看見自己在哪裡。</div>'},

{t:'快速兩人分享', part:'🟢 CHECK-IN', time:'00:06', html:
'<div class="kicker"><span class="tag" style="background:#e7eff8;color:var(--mindful-d)">活動 · 約 4 分鐘</span></div>'+
'<h2 class="h-slide">轉向旁邊的人，說一句話</h2>'+
'<p class="sub">「我今天是＿＿色，因為＿＿＿。」講的人專心講，聽的人只負責點頭，不評論、不給建議。</p>'+
'<div class="rule"></div>'+
'<div class="steps">'+
'<div class="step"><span class="n">01</span><h4>配對</h4><p>就近找一位夥伴，面對面。</p></div>'+
'<div class="step"><span class="n">02</span><h4>各講 30 秒</h4><p>一人先講，換手再講一次。</p></div>'+
'<div class="step"><span class="n">03</span><h4>只聽不評</h4><p>聽的人不插話、不給意見。</p></div>'+
'<div class="step"><span class="n">04</span><h4>收回</h4><p>時間到，謝謝夥伴，回到座位。</p></div>'+
'</div>'},

/* ========== 介紹 ========== */
{t:'介紹 · 為什麼要有情緒溫度計', part:'📖 介紹', time:'00:10', sec:true, html:
'<div class="divider">'+
'<div class="num" style="color:var(--mindful)">📖</div>'+
'<h2>介紹</h2>'+
'<p>20 分鐘 · 先懂原理，等一下動手才有方向。</p>'+
'</div>'},

{t:'為什麼需要情緒溫度計', part:'📖 介紹', time:'00:10', html:
'<h2 class="h-slide">情緒不是問題，說不出來才是</h2>'+
'<p class="lead sub">多數衝突與崩潰，不是因為情緒本身，而是那股情緒沒有被看見、沒有被說出來，一路悶到爆炸。</p>'+
'<div class="rule"></div>'+
'<div class="grid g3">'+
'<div class="qc relate"><h4><span class="ico">🪞</span>自我覺察</h4><p style="margin:0">先看見「我現在是什麼顏色」，才有機會照顧它，而不是被它帶著走。</p></div>'+
'<div class="qc energy"><h4><span class="ico">🧯</span>避免悶到爆</h4><p style="margin:0">越早說出來，越不需要用崩潰或衝突的方式表達。</p></div>'+
'<div class="qc reflect"><h4><span class="ico">🤝</span>讓別人理解你</h4><p style="margin:0">一張色卡，比一長串解釋更快讓身邊的人知道怎麼靠近你。</p></div>'+
'</div>'},

{t:'四色情緒語言總覽', part:'📖 介紹', time:'00:16', html:
'<h2 class="h-slide">先從最簡單的四種顏色開始</h2>'+
'<p class="sub">情緒溫度計的核心語言。今天要做的溫度計，就是從這四色出發，加上「屬於你自己」的字詞。</p>'+
'<div class="rule"></div>'+
'<div class="grid g2">'+
'<div class="qc relate"><h4><span class="ico">😠</span>紅色 · 生氣／憤怒</h4><p style="margin:0">被打斷、覺得不公平、被冒犯</p></div>'+
'<div class="qc energy"><h4><span class="ico">😰</span>黃色 · 焦慮／緊張</h4><p style="margin:0">考試前、上台前、不確定會發生什麼事</p></div>'+
'<div class="qc mindful"><h4><span class="ico">😢</span>藍色 · 難過／低落</h4><p style="margin:0">失望、想家、沒有力氣</p></div>'+
'<div class="qc reflect"><h4><span class="ico">😊</span>綠色 · 開心／平靜</h4><p style="margin:0">放鬆、投入、覺得一切都剛剛好</p></div>'+
'</div>'},

{t:'什麼是情緒溫度計', part:'📖 介紹', time:'00:22', html:
'<h2 class="h-slide">溫度計＝顏色 ＋ 我可以做的事</h2>'+
'<p class="sub">單純標出顏色只是第一步。真正有用的溫度計，每一格顏色旁邊都配一個「屬於我自己」的因應方法。</p>'+
'<div class="rule"></div>'+
'<div class="thermo-wrap"><div class="thermo">'+
'<div class="ts g" style="background:var(--reflect)">綠 · 平靜</div>'+
'<div class="ts b" style="background:var(--mindful)">藍 · 低落</div>'+
'<div class="ts y" style="background:var(--energy)">黃 · 焦慮</div>'+
'<div class="ts r" style="background:var(--relate)">紅 · 生氣</div>'+
'</div></div>'+
'<div class="note">這只是<b>一種範例排法</b>（由上到下：張力越高在越上面）。等一下實作時，你可以自己決定形狀——直條、圓形、階梯、甚至一朵花都可以，重點是內容，不是形狀。</div>'},

{t:'溫度計上要包含什麼', part:'📖 介紹', time:'00:26', html:
'<h2 class="h-slide">四個一定要有的元素</h2>'+
'<p class="sub">形狀自由，但這四件事缺一不可——等一下實作段落就是照這個順序做。</p>'+
'<div class="rule"></div>'+
'<div class="steps">'+
'<div class="step"><span class="n">01</span><h4>外框</h4><p>畫出溫度計的整體形狀。</p></div>'+
'<div class="step"><span class="n">02</span><h4>四色 ＋ 自己的詞</h4><p>紅黃藍綠各一區，寫下屬於你自己的說法。</p></div>'+
'<div class="step"><span class="n">03</span><h4>我可以做的事</h4><p>每個顏色旁邊，寫一件真的對你有用的事。</p></div>'+
'<div class="step"><span class="n">04</span><h4>裝飾與命名</h4><p>畫上自己的風格，幫它取一個名字。</p></div>'+
'</div>'},

/* ========== 實作 ========== */
{t:'實作 · 動手做出你的溫度計', part:'🎨 實作', time:'00:30', sec:true, html:
'<div class="divider">'+
'<div class="num" style="color:var(--energy)">🎨</div>'+
'<h2>實作</h2>'+
'<p>45 分鐘 · 這是今天的主戲。慢慢來，做一個你真的會想用的溫度計。</p>'+
'</div>'},

{t:'實作總覽與材料', part:'🎨 實作', time:'00:30', html:
'<h2 class="h-slide">45 分鐘怎麼分配</h2>'+
'<p class="sub">材料：一張白紙或圖畫紙、彩色筆／色鉛筆、（可選）貼紙或印章。</p>'+
'<div class="rule"></div>'+
'<div class="tl">'+
'<div class="tl-i"><b>00:30 · 畫外框（5 分鐘）</b><span>決定溫度計的形狀</span></div>'+
'<div class="tl-i"><b>00:35 · 標色與詞彙（15 分鐘）</b><span>四色分區，寫下屬於自己的情緒詞</span></div>'+
'<div class="tl-i"><b>00:50 · 我可以做的事（15 分鐘）</b><span>每色寫一個真正有用的因應方法</span></div>'+
'<div class="tl-i"><b>01:05 · 裝飾與分享（10 分鐘）</b><span>命名、裝飾、跟旁邊夥伴看看彼此的作品</span></div>'+
'</div>'},

{t:'Step 1 · 畫出外框', part:'🎨 實作', time:'00:30', html:
'<div class="kicker"><span class="tag" style="background:#fdf3e0;color:var(--energy-d)">STEP 1 · 約 5 分鐘</span></div>'+
'<h2 class="h-slide">先決定形狀，不用想太多</h2>'+
'<p class="sub">直條、圓形、階梯、花朵、雲朵——任何形狀都可以，只要之後裝得下四個顏色區塊就好。</p>'+
'<div class="rule"></div>'+
'<div class="note blue"><b>主持人可以說：</b>「不用畫得很漂亮，這不是美術課。你只是在幫自己蓋一個房子，等一下要住進四種顏色。」</div>'},

{t:'Step 2 · 標出四色與你的詞彙', part:'🎨 實作', time:'00:35', html:
'<div class="kicker"><span class="tag" style="background:#e7eff8;color:var(--mindful-d)">STEP 2 · 約 15 分鐘</span></div>'+
'<h2 class="h-slide">四色分區，換成你自己的說法</h2>'+
'<p class="sub">先用紅黃藍綠標出四個區塊，再想一想：這個顏色對「我」來說，通常是什麼情境？用自己的話寫下來。</p>'+
'<div class="rule"></div>'+
'<div class="grid g2">'+
'<div class="qc relate"><h4><span class="ico">😠</span>紅色</h4><p style="margin:0">參考詞：生氣、不甘心、被冒犯<br><span style="color:var(--muted)">你的說法是？</span></p></div>'+
'<div class="qc energy"><h4><span class="ico">😰</span>黃色</h4><p style="margin:0">參考詞：緊張、擔心、不確定<br><span style="color:var(--muted)">你的說法是？</span></p></div>'+
'<div class="qc mindful"><h4><span class="ico">😢</span>藍色</h4><p style="margin:0">參考詞：難過、想家、沒力氣<br><span style="color:var(--muted)">你的說法是？</span></p></div>'+
'<div class="qc reflect"><h4><span class="ico">😊</span>綠色</h4><p style="margin:0">參考詞：放鬆、投入、剛剛好<br><span style="color:var(--muted)">你的說法是？</span></p></div>'+
'</div>'},

{t:'Step 3 · 我可以做的事', part:'🎨 實作', time:'00:50', html:
'<div class="kicker"><span class="tag" style="background:#fdece7;color:var(--relate-d)">STEP 3 · 約 15 分鐘</span></div>'+
'<h2 class="h-slide">每個顏色旁邊，寫一件真的有用的事</h2>'+
'<p class="sub">不是「應該」做什麼，是「我自己試過、真的有用」的事。可以參考下面的句型開頭。</p>'+
'<div class="rule"></div>'+
'<div class="grid g2">'+
'<div class="qc relate"><h4><span class="ico">😠</span>紅色時，我可以……</h4><p style="margin:0">深呼吸五次／先離開現場一下／捏一下手裡的東西</p></div>'+
'<div class="qc energy"><h4><span class="ico">😰</span>黃色時，我可以……</h4><p style="margin:0">把擔心的事寫下來／找一個人說出來／做一件小小能掌控的事</p></div>'+
'<div class="qc mindful"><h4><span class="ico">😢</span>藍色時，我可以……</h4><p style="margin:0">給自己一個擁抱／聽一首喜歡的歌／告訴一個信任的人</p></div>'+
'<div class="qc reflect"><h4><span class="ico">😊</span>綠色時，我可以……</h4><p style="margin:0">記住這個感覺／去幫忙需要的人／把握這個狀態做重要的事</p></div>'+
'</div>'+
'<div class="note">這一步最重要，也最花時間——讓學員慢慢想，不用急著填滿。</div>'},

{t:'Step 4 · 裝飾、命名、分享', part:'🎨 實作', time:'01:05', html:
'<div class="kicker"><span class="tag" style="background:#e4f6ee;color:var(--reflect-d)">STEP 4 · 約 10 分鐘</span></div>'+
'<h2 class="h-slide">幫它取個名字，讓它變成「你的」</h2>'+
'<p class="sub">加上圖案、顏色、貼紙都可以。最後幫這個溫度計取一個名字——它會是你接下來每天會用到的工具。</p>'+
'<div class="rule"></div>'+
'<div class="steps">'+
'<div class="step"><span class="n">A</span><h4>裝飾</h4><p>畫上你喜歡的圖案或風格。</p></div>'+
'<div class="step"><span class="n">B</span><h4>命名</h4><p>幫它取一個屬於你的名字。</p></div>'+
'<div class="step"><span class="n">C</span><h4>兩人分享</h4><p>跟旁邊的人看看彼此做的溫度計。</p></div>'+
'</div>'},

{t:'主持人提示：巡場與差異化', part:'🎨 實作', time:'01:05', html:
'<h2 class="h-slide">主持人巡場時可以留意</h2>'+
'<div class="rule"></div>'+
'<ul class="bul">'+
'<li><b>不會寫字或年紀較小的學員：</b>可以用畫的、用貼紀代替文字，口頭問「這個顏色你想到什麼」再幫忙寫關鍵字。</li>'+
'<li><b>寫不出「我可以做的事」的學員：</b>先問「上次你＿＿的時候，後來是怎麼變好的？」把答案轉成句子。</li>'+
'<li><b>很快做完的學員：</b>邀請他們幫每個顏色多加一個詞彙，或幫忙鄰座的人想想法（不是幫忙寫）。</li>'+
'<li><b>不想公開分享的學員：</b>完全尊重，兩人分享階段可以只用點頭示意「做完了」。</li>'+
'</ul>'},

/* ========== 回饋 ========== */
{t:'回饋 · 分享與帶回去', part:'💬 回饋', time:'01:15', sec:true, html:
'<div class="divider">'+
'<div class="num" style="color:var(--relate)">💬</div>'+
'<h2>回饋</h2>'+
'<p>15 分鐘 · 收尾，讓今天做的事真的能帶回日常生活。</p>'+
'</div>'},

{t:'全班分享', part:'💬 回饋', time:'01:15', html:
'<div class="kicker"><span class="tag" style="background:#fdece7;color:var(--relate-d)">活動 · 約 5 分鐘</span></div>'+
'<h2 class="h-slide">邀請 2–3 位自願者分享</h2>'+
'<p class="sub">請他們秀出自己的溫度計，講一個顏色跟一句「我可以做的事」就好，不用整份都講完。</p>'+
'<div class="rule"></div>'+
'<div class="note green">只邀請、不強迫。分享是加分，不分享一樣完整完成了今天的活動。</div>'},

{t:'今日反思', part:'💬 回饋', time:'01:20', html:
'<div class="kicker"><span class="tag" style="background:#e7eff8;color:var(--mindful-d)">活動 · 約 5 分鐘</span></div>'+
'<h2 class="h-slide">在心裡或紙上，把這三句話填完</h2>'+
'<div class="rule"></div>'+
'<div class="grid g3">'+
'<div class="qc mindful"><h4><span class="ico">🪞</span>我今天學到了……</h4></div>'+
'<div class="qc energy"><h4><span class="ico">🎯</span>下次我是紅／黃色時，我想試試看……</h4></div>'+
'<div class="qc reflect"><h4><span class="ico">💡</span>這張溫度計最能提醒我的一件事是……</h4></div>'+
'</div>'},

{t:'怎麼帶回去用', part:'💬 回饋', time:'01:25', html:
'<h2 class="h-slide">溫度計做完了，接下來呢</h2>'+
'<p class="sub">工具的價值在於持續使用。給幾個簡單、不增加負擔的做法。</p>'+
'<div class="rule"></div>'+
'<ul class="bul">'+
'<li><b>貼在看得到的地方：</b>書桌前、聯絡簿封面、置物櫃內側。</li>'+
'<li><b>每天花 10 秒：</b>早自習或睡前，指一下今天是哪個顏色，不用多做什麼。</li>'+
'<li><b>身邊的人可以怎麼呼應：</b>看到有人比出顏色，就順著溫度計上寫的「我可以做的事」陪伴，而不是急著糾正情緒。</li>'+
'</ul>'+
'<div class="note blue"><b>與 115 學年度 Check-out 呼應：</b>可以在每天的品格 Check-out 多加一句——「我今天做到的品格是＿＿＿，因為＿＿＿」，讓溫度計和品格語言接在一起用。</div>'},

{t:'謝謝', part:'謝謝', time:'01:30', html:
'<div class="divider">'+
'<div class="num" style="color:var(--dawn)">🌈</div>'+
'<h2>謝謝大家</h2>'+
'<p>你今天做的，不只是一張紙——是一個願意誠實面對自己情緒的練習。</p>'+
'<div class="time">歡迎搭配完整 3 小時 SEL Check-in 工作坊一起使用</div>'+
'</div>'},

{t:'延伸資源', part:'延伸', time:'', html:
'<h2 class="h-slide">延伸資源</h2>'+
'<p class="sub">掃描 QR 前往完整版 3 小時 SEL Check-in 導航員工作坊（Mindset · Skillset · Toolset）。</p>'+
'<div class="rule"></div>'+
'<div class="qrpage">'+
'<div class="qrbox" data-qr="https://cyysongyy.github.io/20260916DeerfieldSELcheckin/index.html"><div class="qrimg"></div><div class="u"></div><a class="go" href="#" target="_blank">前往完整工作坊</a></div>'+
'<div class="card"><h4 style="margin-bottom:.4em">SEL Check-in 導航員</h4>'+
'<p style="color:var(--ink2);font-size:.95em;margin:0">四色語言 × 四顆膠囊 × 兩個現場小遊戲，完整的教師 3 小時工作坊版本。</p></div>'+
'</div>'},

/* ========== 附錄：主持人 Run Sheet ========== */
{t:'附錄 · 主持人 Run Sheet', part:'附錄', time:'', html:
'<h2 class="h-slide">一頁流程表</h2>'+
'<p class="sub">列印或截圖帶著跑，現場照這個節奏走就不會超時。</p>'+
'<div class="rule"></div>'+
'<table>'+
'<tr><th>時間</th><th>段落</th><th>內容</th></tr>'+
'<tr><td>00:00</td><td>CHECK-IN</td><td>舉色卡 ＋ 兩人快速分享</td></tr>'+
'<tr><td>00:10</td><td>介紹</td><td>為什麼需要溫度計 ＋ 四色語言 ＋ 溫度計四要素</td></tr>'+
'<tr><td>00:30</td><td>實作</td><td>畫外框 → 標色與詞彙 → 我可以做的事 → 裝飾命名</td></tr>'+
'<tr><td>01:15</td><td>回饋</td><td>全班分享 ＋ 反思三句話 ＋ 怎麼帶回去用</td></tr>'+
'<tr><td>01:30</td><td>結束</td><td>—</td></tr>'+
'</table>'}

];
