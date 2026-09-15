/* ===== 四色情緒溫度計工作坊 · 約 100 分鐘（深度版）· 投影片內容 =====
   結構：CHECK-IN(10') ▸ 介紹(32') ▸ 實作(48') ▸ 回饋(12')  ≈ 1 小時 42 分
   顏色對應（與 SEL Check-in 導航員主課程一致）：
   紅＝生氣／憤怒(--relate) 黃＝焦慮／緊張(--energy) 藍＝憂鬱／難過(--mindful) 綠＝開心／平靜(--reflect)
   理論骨架：CASEL 五大核心能力（自我覺察／自我管理／社會覺察／人際技巧／負責任決策）
             ＋ Name it to tame it（命名情緒以降低杏仁核反應）＋ 身體優先於語言的覺察路徑
*/
var SLIDES = [

/* ========== 封面 ========== */
{t:'封面', part:'封面', time:'', html:
'<div class="divider">'+
'<div class="num" style="color:var(--dawn)">🌡️</div>'+
'<h2>四色情緒溫度計工作坊</h2>'+
'<p>約 100 分鐘 · 學員自製專屬情緒溫度計<br>CHECK-IN ▸ 介紹 ▸ 實作 ▸ 回饋</p>'+
'<div class="time">用身體、用顏色、用五大核心能力，練習誠實地認識自己</div>'+
'</div>'},

{t:'今日流程總覽', part:'總覽', time:'00:00', html:
'<div class="kicker"><span class="tag">總覽</span></div>'+
'<h2 class="h-slide">100 分鐘，四個段落</h2>'+
'<p class="sub">這不只是一堂「畫畫課」。每個段落都對應 SEL（社會情緒學習）的核心能力——先體驗，再理解原理，最後動手做出自己真的會用的工具。</p>'+
'<div class="rule"></div>'+
'<div class="tl">'+
'<div class="tl-i"><b>00:00 · CHECK-IN（10 分鐘）</b><span>舉色卡，說出你現在的溫度——不先講理論，先體驗</span></div>'+
'<div class="tl-i"><b>00:10 · 介紹（32 分鐘）</b><span>為什麼命名情緒有用、SEL 五大核心能力、四色語言、身體訊號、迷思澄清</span></div>'+
'<div class="tl-i"><b>00:42 · 實作（48 分鐘）</b><span>動手做出屬於自己的情緒溫度計，加碼練習讀懂別人的顏色</span></div>'+
'<div class="tl-i"><b>01:30 · 回饋（12 分鐘）</b><span>分享、對照五大能力反思、帶回去怎麼用</span></div>'+
'</div>'+
'<div class="note">結束時間約 <b>01:42</b>。時間僅供參考——若時間有限，「加碼」標記的段落可以省略，壓回約 90 分鐘。</div>'},

/* ========== CHECK-IN ========== */
{t:'CHECK-IN · 今天你是什麼顏色', part:'🟢 CHECK-IN', time:'00:00', sec:true, html:
'<div class="divider">'+
'<div class="num" style="color:var(--reflect)">👋</div>'+
'<h2>CHECK-IN</h2>'+
'<p>10 分鐘 · 在解釋任何理論之前，先誠實地說一句：我現在是什麼顏色。</p>'+
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
'<div class="note green">沒有「錯的顏色」。今天的目的不是要大家都變綠色，而是先誠實看見自己在哪裡——這就是待會要談的第一個核心能力：自我覺察。</div>'},

{t:'快速兩人分享', part:'🟢 CHECK-IN', time:'00:06', html:
'<div class="kicker"><span class="tag" style="background:#e7eff8;color:var(--mindful-d)">活動 · 約 4 分鐘</span></div>'+
'<h2 class="h-slide">轉向旁邊的人，說一句話</h2>'+
'<p class="sub">「我今天是＿＿色，因為＿＿＿。」講的人專心講，聽的人只負責點頭，不評論、不給建議——這一步，你已經在練習「人際技巧」了。</p>'+
'<div class="rule"></div>'+
'<div class="steps">'+
'<div class="step"><span class="n">01</span><h4>配對</h4><p>就近找一位夥伴，面對面。</p></div>'+
'<div class="step"><span class="n">02</span><h4>各講 30 秒</h4><p>一人先講，換手再講一次。</p></div>'+
'<div class="step"><span class="n">03</span><h4>只聽不評</h4><p>聽的人不插話、不給意見。</p></div>'+
'<div class="step"><span class="n">04</span><h4>收回</h4><p>時間到，謝謝夥伴，回到座位。</p></div>'+
'</div>'},

/* ========== 介紹 ========== */
{t:'介紹 · 從體驗走進原理', part:'📖 介紹', time:'00:10', sec:true, html:
'<div class="divider">'+
'<div class="num" style="color:var(--mindful)">📖</div>'+
'<h2>介紹</h2>'+
'<p>32 分鐘 · 你剛剛做的事，其實有科學根據——現在來拆解為什麼有用。</p>'+
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

{t:'為什麼「命名」情緒有用', part:'📖 介紹', time:'00:13', html:
'<div class="kicker"><span class="tag" style="background:#e7eff8;color:var(--mindful-d)">一個心理學原理</span></div>'+
'<h2 class="h-slide">Name it to tame it · 說出來，才治得住</h2>'+
'<p class="sub">心理學家 Dan Siegel 提出：當我們把一股情緒「講成一個詞」，大腦掌管理性判斷的區域會重新上線，原本失控的情緒反應會跟著降溫。</p>'+
'<div class="rule"></div>'+
'<div class="grid g2">'+
'<div class="card" style="border-left:6px solid var(--relate)"><p style="font-size:1.02em;color:var(--relate-d);font-weight:800;margin-bottom:.3em">沒有命名</p><p style="margin:0;color:var(--ink2)">情緒接管行動——用吼的、用摔的、用沉默對抗表達。</p></div>'+
'<div class="card" style="border-left:6px solid var(--reflect)"><p style="font-size:1.02em;color:var(--reflect-d);font-weight:800;margin-bottom:.3em">說出「我是紅色」</p><p style="margin:0;color:var(--ink2)">多了 3 秒鐘的停頓，理性有機會重新加入決定下一步。</p></div>'+
'</div>'+
'<div class="note blue">這就是為什麼今天一開始先請大家「舉色卡」——不是暖場遊戲，是在練一個真正有神經科學根據的技巧。</div>'},

{t:'SEL 是什麼？今天練習的五大核心能力', part:'📖 介紹', time:'00:17', html:
'<h2 class="h-slide">今天不只是做手作，是在練這五件事</h2>'+
'<p class="sub">SEL（社會情緒學習）由五大核心能力組成。情緒溫度計，剛好五個都會練到。</p>'+
'<div class="rule"></div>'+
'<div class="grid g3">'+
'<div class="qc neutral"><h4><span class="ico">🪞</span>自我覺察</h4><p style="margin:0">認得自己的情緒與身體訊號。</p><div class="use">今天：舉色卡 ＋ 寫下身體訊號</div></div>'+
'<div class="qc neutral"><h4><span class="ico">🎛️</span>自我管理</h4><p style="margin:0">面對情緒時，選擇有效的因應方式。</p><div class="use">今天：寫下「我可以做的事」</div></div>'+
'<div class="qc neutral"><h4><span class="ico">👀</span>社會覺察</h4><p style="margin:0">留意並理解別人的情緒狀態。</p><div class="use">今天：加碼——看懂別人的顏色</div></div>'+
'<div class="qc neutral"><h4><span class="ico">🤝</span>人際技巧</h4><p style="margin:0">用不評價的方式聆聽與回應他人。</p><div class="use">今天：兩人分享、只聽不評</div></div>'+
'<div class="qc neutral"><h4><span class="ico">🧭</span>負責任決策</h4><p style="margin:0">預先想好觸發情境，做出對自己與他人都好的選擇。</p><div class="use">今天：寫下觸發情境與因應方式</div></div>'+
'</div>'},

{t:'四色情緒語言總覽', part:'📖 介紹', time:'00:22', html:
'<h2 class="h-slide">同一個顏色，也有強弱之分</h2>'+
'<p class="sub">情緒不是「有」或「沒有」的開關，而是一段光譜。先熟悉這個光譜，等一下寫自己的詞彙會更精準。</p>'+
'<div class="rule"></div>'+
'<div class="grid g2">'+
'<div class="qc relate"><h4><span class="ico">😠</span>紅色 · 生氣／憤怒</h4><p style="margin:0">不耐煩 → 生氣 → 憤怒／暴怒<br><span style="color:var(--muted)">常見情境：被打斷、覺得不公平、被冒犯</span></p></div>'+
'<div class="qc energy"><h4><span class="ico">😰</span>黃色 · 焦慮／緊張</h4><p style="margin:0">有點在意 → 緊張 → 焦慮／恐慌<br><span style="color:var(--muted)">常見情境：考試前、上台前、不確定會發生什麼事</span></p></div>'+
'<div class="qc mindful"><h4><span class="ico">😢</span>藍色 · 難過／低落</h4><p style="margin:0">悶悶的 → 失落 → 難過／沮喪<br><span style="color:var(--muted)">常見情境：失望、想家、沒有力氣</span></p></div>'+
'<div class="qc reflect"><h4><span class="ico">😊</span>綠色 · 開心／平靜</h4><p style="margin:0">安穩 → 放鬆 → 開心／滿足<br><span style="color:var(--muted)">常見情境：投入、被肯定、覺得一切都剛剛好</span></p></div>'+
'</div>'},

{t:'情緒沒有好壞，只有訊息', part:'📖 介紹', time:'00:28', html:
'<h2 class="h-slide">兩個常見的迷思</h2>'+
'<p class="sub">在動手做溫度計之前，先拆掉這兩個容易誤導人的想法。</p>'+
'<div class="rule"></div>'+
'<div class="grid g2">'+
'<div class="card" style="border-left:6px solid var(--relate)">'+
'<p style="font-size:1.02em;color:var(--relate-d);font-weight:800;margin-bottom:.3em">❌ 迷思一：生氣是不好的情緒，要忍住</p>'+
'<p style="margin:0;color:var(--ink2)">✅ 生氣是一個訊號，代表有界線被跨過。忍住不代表消失，只是延後爆發——溫度計是幫忙提早接住它。</p>'+
'</div>'+
'<div class="card" style="border-left:6px solid var(--reflect)">'+
'<p style="font-size:1.02em;color:var(--reflect-d);font-weight:800;margin-bottom:.3em">❌ 迷思二：看起來是綠色，就代表沒事</p>'+
'<p style="margin:0;color:var(--ink2)">✅ 有些人會用「假裝綠色」掩飾真正的顏色。溫度計是幫助說真話的工具，不是用來表演給別人看的。</p>'+
'</div>'+
'</div>'},

{t:'身體會先知道：情緒的生理訊號', part:'📖 介紹', time:'00:32', html:
'<h2 class="h-slide">在想到「詞」之前，身體通常先有感覺</h2>'+
'<p class="sub">很多人說不出「我現在是什麼情緒」，但身體其實早就發出訊號了。學會讀懂身體，是比講出詞彙更快的覺察路徑。</p>'+
'<div class="rule"></div>'+
'<ul class="bul">'+
'<li><b>心跳／呼吸：</b>變快、變淺、變得用力</li>'+
'<li><b>肌肉：</b>肩膀聳起、拳頭握緊、下巴咬緊</li>'+
'<li><b>肚子／胸口：</b>悶悶的、緊緊的、翻攪的感覺</li>'+
'<li><b>臉部與聲音：</b>想哭、想笑、突然說不出話</li>'+
'<li><b>行為衝動：</b>坐不住、想離開現場、想抱東西</li>'+
'</ul>'+
'<div class="note">等一下實作的時候，除了寫情緒的「詞」，也會請你寫下每個顏色在「身體裡」的感覺——這會讓溫度計更早發揮作用，不用等到情緒詞彙想出來才知道自己怎麼了。</div>'},

{t:'什麼是情緒溫度計', part:'📖 介紹', time:'00:36', html:
'<h2 class="h-slide">溫度計＝顏色 ＋ 身體訊號 ＋ 我可以做的事</h2>'+
'<p class="sub">單純標出顏色只是第一步。真正有用的溫度計，每一格顏色旁邊都配上身體感覺，以及「屬於我自己」的因應方法。</p>'+
'<div class="rule"></div>'+
'<div class="thermo-wrap"><div class="thermo">'+
'<div class="ts g" style="background:var(--reflect)">綠 · 平靜</div>'+
'<div class="ts b" style="background:var(--mindful)">藍 · 低落</div>'+
'<div class="ts y" style="background:var(--energy)">黃 · 焦慮</div>'+
'<div class="ts r" style="background:var(--relate)">紅 · 生氣</div>'+
'</div></div>'+
'<div class="note">這只是<b>一種範例排法</b>（由上到下：張力越高在越上面）。等一下實作時，你可以自己決定形狀——直條、圓形、階梯、甚至一朵花都可以，重點是內容，不是形狀。</div>'},

{t:'溫度計要包含的五個元素', part:'📖 介紹', time:'00:39', html:
'<h2 class="h-slide">五個一定要有的元素</h2>'+
'<p class="sub">形狀自由，但這五件事缺一不可——等一下實作段落就是照這個順序做。</p>'+
'<div class="rule"></div>'+
'<div class="grid g3">'+
'<div class="step"><span class="n">01</span><h4>外框</h4><p>畫出溫度計的整體形狀。</p></div>'+
'<div class="step"><span class="n">02</span><h4>四色 ＋ 自己的詞</h4><p>紅黃藍綠各一區，寫下屬於你自己的說法。</p></div>'+
'<div class="step"><span class="n">03</span><h4>身體訊號</h4><p>這個顏色在你身體裡，是什麼感覺。</p></div>'+
'<div class="step"><span class="n">04</span><h4>我可以做的事</h4><p>每個顏色旁邊，寫一件真的對你有用的事。</p></div>'+
'<div class="step"><span class="n">05</span><h4>裝飾與命名</h4><p>畫上自己的風格，幫它取一個名字。</p></div>'+
'</div>'},

/* ========== 實作 ========== */
{t:'實作 · 動手做出你的溫度計', part:'🎨 實作', time:'00:42', sec:true, html:
'<div class="divider">'+
'<div class="num" style="color:var(--energy)">🎨</div>'+
'<h2>實作</h2>'+
'<p>48 分鐘 · 這是今天的主戲。慢慢來，做一個你真的會想用的溫度計。</p>'+
'</div>'},

{t:'實作總覽與材料', part:'🎨 實作', time:'00:42', html:
'<h2 class="h-slide">48 分鐘怎麼分配</h2>'+
'<p class="sub">材料：一張白紙或圖畫紙、彩色筆／色鉛筆、（可選）貼紙或印章。</p>'+
'<div class="rule"></div>'+
'<div class="tl">'+
'<div class="tl-i"><b>00:42 · 畫外框（4 分鐘）</b><span>決定溫度計的形狀</span></div>'+
'<div class="tl-i"><b>00:46 · 標色、詞彙與身體訊號（16 分鐘）</b><span>四色分區，寫下情緒詞彙，也寫下身體感覺</span></div>'+
'<div class="tl-i"><b>01:02 · 我可以做的事（16 分鐘）</b><span>每色寫因應方法，加碼寫下觸發情境</span></div>'+
'<div class="tl-i"><b>01:18 · 裝飾與分享（6 分鐘）</b><span>命名、裝飾、跟旁邊夥伴看看彼此的作品</span></div>'+
'<div class="tl-i"><b>01:24 · 加碼：看懂別人的顏色（4 分鐘）</b><span>時間充裕才進行的社會覺察練習</span></div>'+
'</div>'},

{t:'Step 1 · 畫出外框', part:'🎨 實作', time:'00:42', html:
'<div class="kicker"><span class="tag" style="background:#fdf3e0;color:var(--energy-d)">STEP 1 · 約 4 分鐘</span></div>'+
'<h2 class="h-slide">先決定形狀，不用想太多</h2>'+
'<p class="sub">直條、圓形、階梯、花朵、雲朵——任何形狀都可以，只要之後裝得下四個顏色區塊就好。</p>'+
'<div class="rule"></div>'+
'<div class="note blue"><b>主持人可以說：</b>「不用畫得很漂亮，這不是美術課。你只是在幫自己蓋一個房子，等一下要住進四種顏色。」</div>'},

{t:'Step 2 · 標色、情緒詞彙與身體訊號', part:'🎨 實作', time:'00:46', html:
'<div class="kicker"><span class="tag" style="background:#e7eff8;color:var(--mindful-d)">STEP 2 · 約 16 分鐘</span></div>'+
'<h2 class="h-slide">四色分區：換成你的詞，加上身體的感覺</h2>'+
'<p class="sub">先用紅黃藍綠標出四個區塊。每個區塊寫兩件事：① 屬於你自己的情緒詞彙　② 這個顏色在你身體裡是什麼感覺。</p>'+
'<div class="rule"></div>'+
'<div class="grid g2">'+
'<div class="qc relate"><h4><span class="ico">😠</span>紅色</h4><p style="margin:0">情緒詞：生氣、不甘心、被冒犯……<br>身體訊號：拳頭握緊？心跳加快？<br><span style="color:var(--muted)">你的說法是？</span></p></div>'+
'<div class="qc energy"><h4><span class="ico">😰</span>黃色</h4><p style="margin:0">情緒詞：緊張、擔心、不確定……<br>身體訊號：肚子悶悶的？坐不住？<br><span style="color:var(--muted)">你的說法是？</span></p></div>'+
'<div class="qc mindful"><h4><span class="ico">😢</span>藍色</h4><p style="margin:0">情緒詞：難過、想家、沒力氣……<br>身體訊號：想哭？肩膀垂下來？<br><span style="color:var(--muted)">你的說法是？</span></p></div>'+
'<div class="qc reflect"><h4><span class="ico">😊</span>綠色</h4><p style="margin:0">情緒詞：放鬆、投入、剛剛好……<br>身體訊號：呼吸變慢？肩膀放鬆？<br><span style="color:var(--muted)">你的說法是？</span></p></div>'+
'</div>'},

{t:'Step 3 · 我可以做的事', part:'🎨 實作', time:'01:02', html:
'<div class="kicker"><span class="tag" style="background:#fdece7;color:var(--relate-d)">STEP 3 · 約 16 分鐘</span></div>'+
'<h2 class="h-slide">每個顏色旁邊，寫一件真的有用的事</h2>'+
'<p class="sub">不是「應該」做什麼，是「我自己試過、真的有用」的事。試著分成兩種：<b>立即</b>能做的，和需要<b>平常練習</b>的。</p>'+
'<div class="rule"></div>'+
'<div class="grid g2">'+
'<div class="qc relate"><h4><span class="ico">😠</span>紅色時，我可以……</h4><p style="margin:0">立即：深呼吸五次／先離開現場一下<br>平常：練習說出「我需要一點時間」</p></div>'+
'<div class="qc energy"><h4><span class="ico">😰</span>黃色時，我可以……</h4><p style="margin:0">立即：把擔心的事寫下來／找一個人說<br>平常：練習只準備「下一步」而不是全部</p></div>'+
'<div class="qc mindful"><h4><span class="ico">😢</span>藍色時，我可以……</h4><p style="margin:0">立即：給自己一個擁抱／聽一首喜歡的歌<br>平常：固定跟一個信任的人聊聊近況</p></div>'+
'<div class="qc reflect"><h4><span class="ico">😊</span>綠色時，我可以……</h4><p style="margin:0">立即：記住這個感覺／去幫忙需要的人<br>平常：留意是什麼讓我常常保持綠色</p></div>'+
'</div>'+
'<div class="note">加碼（選填）：挑一個你最常出現的顏色，寫下<b>一個常見的觸發情境</b>——「我通常在＿＿＿的時候變成這個顏色。」預先知道觸發點，就是在練習「負責任決策」。</div>'},

{t:'Step 4 · 裝飾、命名、分享', part:'🎨 實作', time:'01:18', html:
'<div class="kicker"><span class="tag" style="background:#e4f6ee;color:var(--reflect-d)">STEP 4 · 約 6 分鐘</span></div>'+
'<h2 class="h-slide">幫它取個名字，讓它變成「你的」</h2>'+
'<p class="sub">加上圖案、顏色、貼紙都可以。最後幫這個溫度計取一個名字——它會是你接下來每天會用到的工具。</p>'+
'<div class="rule"></div>'+
'<div class="steps">'+
'<div class="step"><span class="n">A</span><h4>裝飾</h4><p>畫上你喜歡的圖案或風格。</p></div>'+
'<div class="step"><span class="n">B</span><h4>命名</h4><p>幫它取一個屬於你的名字。</p></div>'+
'<div class="step"><span class="n">C</span><h4>兩人分享</h4><p>跟旁邊的人看看彼此做的溫度計。</p></div>'+
'</div>'},

{t:'加碼 · 看懂別人的顏色', part:'🎨 實作', time:'01:24', html:
'<div class="kicker"><span class="tag" style="background:#e4f6ee;color:var(--reflect-d)">加碼活動 · 時間充裕才做 · 約 4 分鐘</span></div>'+
'<h2 class="h-slide">從「認識自己」到「讀懂別人」</h2>'+
'<p class="sub">前面四步都在練自我覺察與自我管理。這一步換個方向——練習「社會覺察」與「人際技巧」：不用言語，只靠表情與姿勢，猜猜看夥伴是什麼顏色。</p>'+
'<div class="rule"></div>'+
'<div class="steps">'+
'<div class="step"><span class="n">01</span><h4>不出聲表演</h4><p>一人心裡想一個顏色，用表情和姿勢表現出來，不說話。</p></div>'+
'<div class="step"><span class="n">02</span><h4>對方觀察並猜測</h4><p>觀察身體訊號，猜猜是哪個顏色。</p></div>'+
'<div class="step"><span class="n">03</span><h4>用同理句回應</h4><p>「你現在是不是有點＿＿？要不要說說看？」</p></div>'+
'<div class="step"><span class="n">04</span><h4>交換角色</h4><p>換另一人表演，重複一次。</p></div>'+
'</div>'},

{t:'主持人提示：巡場與差異化', part:'🎨 實作', time:'01:28', html:
'<h2 class="h-slide">主持人巡場時可以留意</h2>'+
'<div class="rule"></div>'+
'<ul class="bul">'+
'<li><b>不會寫字或年紀較小的學員：</b>可以用畫的、用貼紙代替文字，口頭問「這個顏色你想到什麼」「身體有什麼感覺」，再幫忙寫關鍵字。</li>'+
'<li><b>寫不出「我可以做的事」的學員：</b>先問「上次你＿＿的時候，後來是怎麼變好的？」把答案轉成句子。</li>'+
'<li><b>寫不出身體訊號的學員：</b>可以請他們現在就回想一次那個顏色的情境，閉眼感受一下身體哪裡緊、哪裡鬆。</li>'+
'<li><b>很快做完的學員：</b>邀請他們幫每個顏色多加一個詞彙、多寫一個觸發情境，或幫忙鄰座的人想想法（不是幫忙寫）。</li>'+
'<li><b>不想公開分享的學員：</b>完全尊重，兩人分享階段可以只用點頭示意「做完了」；加碼的猜色活動也可以自由選擇不參加。</li>'+
'<li><b>時間不夠時：</b>「加碼：看懂別人的顏色」是第一個可以省略的段落，不影響溫度計本身的完整度。</li>'+
'</ul>'},

/* ========== 回饋 ========== */
{t:'回饋 · 分享與帶回去', part:'💬 回饋', time:'01:30', sec:true, html:
'<div class="divider">'+
'<div class="num" style="color:var(--relate)">💬</div>'+
'<h2>回饋</h2>'+
'<p>12 分鐘 · 收尾，讓今天做的事真的能帶回日常生活。</p>'+
'</div>'},

{t:'全班分享', part:'💬 回饋', time:'01:30', html:
'<div class="kicker"><span class="tag" style="background:#fdece7;color:var(--relate-d)">活動 · 約 3 分鐘</span></div>'+
'<h2 class="h-slide">邀請 2–3 位自願者分享</h2>'+
'<p class="sub">請他們秀出自己的溫度計，講一個顏色跟一句「我可以做的事」就好，不用整份都講完。</p>'+
'<div class="rule"></div>'+
'<div class="note green">只邀請、不強迫。分享是加分，不分享一樣完整完成了今天的活動。</div>'},

{t:'今天練到了哪些能力？', part:'💬 回饋', time:'01:33', html:
'<h2 class="h-slide">回到最初的五大核心能力</h2>'+
'<p class="sub">回想一下今天的每個段落，你可能都已經練到了。</p>'+
'<div class="rule"></div>'+
'<div class="grid g3">'+
'<div class="qc neutral"><h4><span class="ico">🪞</span>自我覺察</h4><p style="margin:0">舉色卡、寫下身體訊號的那一刻。</p></div>'+
'<div class="qc neutral"><h4><span class="ico">🎛️</span>自我管理</h4><p style="margin:0">寫下「我可以做的事」的那一刻。</p></div>'+
'<div class="qc neutral"><h4><span class="ico">👀</span>社會覺察</h4><p style="margin:0">觀察夥伴表情、猜顏色的那一刻。</p></div>'+
'<div class="qc neutral"><h4><span class="ico">🤝</span>人際技巧</h4><p style="margin:0">只聽不評、說出同理句的那一刻。</p></div>'+
'<div class="qc neutral"><h4><span class="ico">🧭</span>負責任決策</h4><p style="margin:0">寫下觸發情境、預先想好對策的那一刻。</p></div>'+
'</div>'},

{t:'今日反思', part:'💬 回饋', time:'01:36', html:
'<div class="kicker"><span class="tag" style="background:#e7eff8;color:var(--mindful-d)">活動 · 約 2 分鐘</span></div>'+
'<h2 class="h-slide">在心裡或紙上，把這三句話填完</h2>'+
'<div class="rule"></div>'+
'<div class="grid g3">'+
'<div class="qc mindful"><h4><span class="ico">🪞</span>我今天學到了……</h4></div>'+
'<div class="qc energy"><h4><span class="ico">🎯</span>下次我是紅／黃色時，我想試試看……</h4></div>'+
'<div class="qc reflect"><h4><span class="ico">💡</span>這張溫度計最能提醒我的一件事是……</h4></div>'+
'</div>'},

{t:'怎麼帶回去用', part:'💬 回饋', time:'01:38', html:
'<h2 class="h-slide">溫度計做完了，接下來呢</h2>'+
'<p class="sub">工具的價值在於持續使用。給幾個簡單、不增加負擔的做法。</p>'+
'<div class="rule"></div>'+
'<ul class="bul">'+
'<li><b>貼在看得到的地方：</b>書桌前、聯絡簿封面、置物櫃內側。</li>'+
'<li><b>每天花 10 秒：</b>早自習或睡前，指一下今天是哪個顏色，不用多做什麼。</li>'+
'<li><b>連續七天小追蹤：</b>在溫度計旁邊貼一張小紙條，畫七個格子，每天用顏色貼紙或畫記標一下——一週後回頭看看哪個顏色出現最多次。</li>'+
'<li><b>身邊的人可以怎麼呼應：</b>看到有人比出顏色，就順著溫度計上寫的「我可以做的事」陪伴，而不是急著糾正情緒。</li>'+
'</ul>'+
'<div class="note blue"><b>與 115 學年度 Check-out 呼應：</b>可以在每天的品格 Check-out 多加一句——「我今天做到的品格是＿＿＿，因為＿＿＿」，讓溫度計和品格語言接在一起用。</div>'},

{t:'謝謝', part:'謝謝', time:'01:42', html:
'<div class="divider">'+
'<div class="num" style="color:var(--dawn)">🌈</div>'+
'<h2>謝謝大家</h2>'+
'<p>你今天做的，不只是一張紙——是一個願意誠實面對自己情緒、也願意練習理解別人的過程。</p>'+
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
'<p class="sub">列印或截圖帶著跑，現場照這個節奏走就不會超時。標「加碼」的項目時間不足可省略。</p>'+
'<div class="rule"></div>'+
'<table>'+
'<tr><th>時間</th><th>段落</th><th>內容</th></tr>'+
'<tr><td>00:00</td><td>CHECK-IN</td><td>舉色卡 ＋ 兩人快速分享</td></tr>'+
'<tr><td>00:10</td><td>介紹</td><td>為什麼需要溫度計 → 命名情緒原理 → SEL 五大能力 → 四色語言 → 迷思澄清 → 身體訊號 → 溫度計示意 → 五元素</td></tr>'+
'<tr><td>00:42</td><td>實作</td><td>畫外框 → 標色／詞彙／身體訊號 → 我可以做的事（含觸發情境） → 裝飾命名 → 加碼：看懂別人的顏色</td></tr>'+
'<tr><td>01:30</td><td>回饋</td><td>全班分享 ＋ 五大能力對照 ＋ 反思三句話 ＋ 怎麼帶回去用</td></tr>'+
'<tr><td>01:42</td><td>結束</td><td>—</td></tr>'+
'</table>'}

];
