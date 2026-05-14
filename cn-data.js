/* ================================================================
   中文 (Chinese) — Grade 3, Volume 2 (G3-2)
   Units: 第七課 to 第十二課
   每課的生字 (from textbook G3-2 第7-12課生字.pdf):
     第七課: 漬 疑 惑 產 適 益 腸 健 康 裝 封 厲 騙 承 貪 罐 醃 菌
     第八課: 護 者 展 潑 談 秩 倍 疾 徐 抬 胸 或 某 扮 型 芒 邁 伐 挺
     第九課: 湯 筷 慣 較 圍 餐 套 煮 端 免 取 垃 圾 化 舉 扁 廚
     第十課: 員 幕 無 際 幅 帽 圖 蛇 瞪 呆 揮 既 胃 瞧 豎 鯨 寵 拇
     第十一課: 維 肖 寺 尚 困 擾 邀 逼 孫 追 旦 相 朗 布 蹤 佛 梁 糞 鷹
     第十二課: 夏 聊 幻 糕 跌 央 鼠 咦 刺 牌 后 脾 令 夢 兵 錶 槌 賽 鶴 蝟

   每題給注音,讓學生選出正確的「國字」(missing character) 填入語詞中。
   只測驗該課的生字 (the blanks are always one of the new 生字).
   ================================================================ */

const CN_UNITS = {
  l7: {
    title: "第七課",
    subtitle: "做泡菜",
    emoji: "📜",
    cssClass: "cn",
    bigQuestion: "看注音、寫國字 — 第七課生字練習 (18 個生字)。",
    // 本課生字 (from textbook G3-2 第七課)
    vocab: [
      { w: "漬", z: "ㄗˋ" },
      { w: "疑", z: "ㄧˊ" },
      { w: "惑", z: "ㄏㄨㄛˋ" },
      { w: "產", z: "ㄔㄢˇ" },
      { w: "適", z: "ㄕˋ" },
      { w: "益", z: "ㄧˋ" },
      { w: "腸", z: "ㄔㄤˊ" },
      { w: "健", z: "ㄐㄧㄢˋ" },
      { w: "康", z: "ㄎㄤ" },
      { w: "裝", z: "ㄓㄨㄤ" },
      { w: "封", z: "ㄈㄥ" },
      { w: "厲", z: "ㄌㄧˋ" },
      { w: "騙", z: "ㄆㄧㄢˋ" },
      { w: "承", z: "ㄔㄥˊ" },
      { w: "貪", z: "ㄊㄢ" },
      { w: "罐", z: "ㄍㄨㄢˋ" },
      { w: "醃", z: "ㄧㄢ" },
      { w: "菌", z: "ㄐㄩㄣˋ" }
    ],
    // 國字填寫 worksheet — matches 考生字.tw 第七課.
    // Each item shows a 詞語 with some characters provided and others blank (with 注音).
    // Student writes the missing 國字 on paper, then can reveal the answer key.
    // chars: array — each char is either {show: "字"} (provided) or {blank: "字", z: "ㄗㄨ"} (to write)
    // 成語 idiom bank for this lesson (used as multiple choice options)
    idioms: ["適可而止", "將信將疑", "康莊大道", "故步自封", "鐵石心腸"],
    // 成語填空練習 (from 成語填空練習卷 L7-12) — sentence with ___ where the 成語 goes
    quiz_idiom_fill: [
      { sentence: "面對災民的請求,他表現得像____一樣冷漠。", answer: "鐵石心腸" },
      { sentence: "弟弟哭著求媽媽不要丟掉玩具,但媽媽還是____。", answer: "鐵石心腸" },
      { sentence: "努力學習能帶你走向____。", answer: "康莊大道" },
      { sentence: "爸爸說他中獎了,我一開始還____。", answer: "將信將疑" },
      { sentence: "做事情過頭了,就應該____。", answer: "適可而止" },
      { sentence: "我對他的解釋感到____。", answer: "將信將疑" },
      { sentence: "吃零食雖然開心,但也要____。", answer: "適可而止" },
      { sentence: "開玩笑要____,不要讓同學生氣。", answer: "適可而止" },
      { sentence: "做人不能____,要勇於改變。", answer: "故步自封" },
      { sentence: "誠實做人是人生的____。", answer: "康莊大道" },
      { sentence: "他不願學新方法,實在太____。", answer: "故步自封" },
      { sentence: "他靠著勤奮與堅持,走上____。", answer: "康莊大道" },
      { sentence: "如果總是____,就很難進步。", answer: "故步自封" },
      { sentence: "小狗受傷了,他卻完全不理會,真是____。", answer: "鐵石心腸" },
      { sentence: "聽到這個消息後,大家都____。", answer: "將信將疑" }
    ],

    quiz_write_char: [
      { full: "生產", chars: [{show: "生"}, {blank: "產", z: "ㄔㄢˇ"}] },
      { full: "益生菌", chars: [{blank: "益", z: "ㄧˋ"}, {show: "生"}, {blank: "菌", z: "ㄐㄩㄣˋ"}] },
      { full: "服裝", chars: [{blank: "服", z: "ㄈㄨˊ"}, {show: "裝"}] },
      { full: "承認", chars: [{blank: "承", z: "ㄔㄥˊ"}, {show: "認"}] },
      { full: "貪心", chars: [{blank: "貪", z: "ㄊㄢ"}, {show: "心"}] },
      { full: "疑惑", chars: [{blank: "疑", z: "ㄧˊ"}, {blank: "惑", z: "ㄏㄨㄛˋ"}] },
      { full: "健康", chars: [{blank: "健", z: "ㄐㄧㄢˋ"}, {blank: "康", z: "ㄎㄤ"}] },
      { full: "舒適", chars: [{show: "舒"}, {blank: "適", z: "ㄕˋ"}] },
      { full: "欺騙", chars: [{show: "欺"}, {blank: "騙", z: "ㄆㄧㄢˋ"}] },
      { full: "厲害", chars: [{blank: "厲", z: "ㄌㄧˋ"}, {show: "害"}] },
      { full: "信封", chars: [{show: "信"}, {blank: "封", z: "ㄈㄥ"}] },
      { full: "腸胃不適", chars: [{blank: "腸", z: "ㄔㄤˊ"}, {show: "胃"}, {show: "不"}, {blank: "適", z: "ㄕˋ"}] },
      { full: "懷疑", chars: [{show: "懷"}, {blank: "疑", z: "ㄧˊ"}] },
      { full: "去除汙漬", chars: [{show: "去"}, {show: "除"}, {show: "汙"}, {blank: "漬", z: "ㄗˋ"}] }
    ],

    // Each quiz blank IS a target textbook 生字 (e.g. 產, 適, 益, etc.)
    quiz_fill_char: [
      { q: "<strong>生___</strong> <span class='cn-zhuyin'>(ㄔㄢˇ)</span>", options: ["產", "鏟", "剷", "嬋"], answer: 0, full: "生產", explain: "「生產」 ㄕㄥ ㄔㄢˇ — 製造物品或養育孩子。" },
      { q: "<strong>舒___</strong> <span class='cn-zhuyin'>(ㄕˋ)</span>", options: ["適", "市", "式", "事"], answer: 0, full: "舒適", explain: "「舒適」 ㄕㄨ ㄕˋ — 很舒服。" },
      { q: "<strong>___生菌</strong> <span class='cn-zhuyin'>(ㄧˋ)</span>", options: ["益", "意", "翼", "易"], answer: 0, full: "益生菌", explain: "「益生菌」 — 對身體有好處的細菌。" },
      { q: "<strong>益生___</strong> <span class='cn-zhuyin'>(ㄐㄩㄣˋ)</span>", options: ["菌", "君", "軍", "均"], answer: 0, full: "益生菌", explain: "「益生菌」 ㄧˋ ㄕㄥ ㄐㄩㄣˋ。" },
      { q: "<strong>___胃不適</strong> <span class='cn-zhuyin'>(ㄔㄤˊ)</span>", options: ["腸", "場", "長", "嘗"], answer: 0, full: "腸胃不適", explain: "「腸胃不適」 — 肚子不舒服。" },
      { q: "<strong>___康</strong> <span class='cn-zhuyin'>(ㄐㄧㄢˋ)</span>", options: ["健", "件", "建", "見"], answer: 0, full: "健康", explain: "「健康」 ㄐㄧㄢˋ ㄎㄤ。" },
      { q: "<strong>健___</strong> <span class='cn-zhuyin'>(ㄎㄤ)</span>", options: ["康", "扛", "抗", "炕"], answer: 0, full: "健康", explain: "「健康」 ㄐㄧㄢˋ ㄎㄤ。" },
      { q: "<strong>服___</strong> <span class='cn-zhuyin'>(ㄓㄨㄤ)</span>", options: ["裝", "莊", "妝", "壯"], answer: 0, full: "服裝", explain: "「服裝」 ㄈㄨˊ ㄓㄨㄤ — 衣服。" },
      { q: "<strong>信___</strong> <span class='cn-zhuyin'>(ㄈㄥ)</span>", options: ["封", "風", "豐", "蜂"], answer: 0, full: "信封", explain: "「信封」 ㄒㄧㄣˋ ㄈㄥ — 裝信的紙袋。" },
      { q: "<strong>___害</strong> <span class='cn-zhuyin'>(ㄌㄧˋ)</span>", options: ["厲", "麗", "歷", "立"], answer: 0, full: "厲害", explain: "「厲害」 ㄌㄧˋ ㄏㄞˋ。" },
      { q: "<strong>欺___</strong> <span class='cn-zhuyin'>(ㄆㄧㄢˋ)</span>", options: ["騙", "片", "篇", "偏"], answer: 0, full: "欺騙", explain: "「欺騙」 ㄑㄧ ㄆㄧㄢˋ — 用假話騙人。" },
      { q: "<strong>___認</strong> <span class='cn-zhuyin'>(ㄔㄥˊ)</span>", options: ["承", "成", "城", "誠"], answer: 0, full: "承認", explain: "「承認」 ㄔㄥˊ ㄖㄣˋ — 點頭認錯。" },
      { q: "<strong>___心</strong> <span class='cn-zhuyin'>(ㄊㄢ)</span>", options: ["貪", "探", "灘", "攤"], answer: 0, full: "貪心", explain: "「貪心」 ㄊㄢ ㄒㄧㄣ — 想要太多。" },
      { q: "<strong>疑___</strong> <span class='cn-zhuyin'>(ㄏㄨㄛˋ)</span>", options: ["惑", "禍", "或", "活"], answer: 0, full: "疑惑", explain: "「疑惑」 ㄧˊ ㄏㄨㄛˋ — 心中有問題。" },
      { q: "<strong>懷___</strong> <span class='cn-zhuyin'>(ㄧˊ)</span>", options: ["疑", "宜", "儀", "夷"], answer: 0, full: "懷疑", explain: "「懷疑」 ㄏㄨㄞˊ ㄧˊ。" },
      { q: "<strong>去除汙___</strong> <span class='cn-zhuyin'>(ㄗˋ)</span>", options: ["漬", "字", "自", "刺"], answer: 0, full: "去除汙漬", explain: "「汙漬」 — 髒的污點。" },
      { q: "<strong>___子</strong> <span class='cn-zhuyin'>(ㄍㄨㄢˋ)</span>", options: ["罐", "貫", "灌", "館"], answer: 0, full: "罐子", explain: "「罐子」 — 裝東西的圓筒容器。" },
      { q: "<strong>___菜</strong> <span class='cn-zhuyin'>(ㄧㄢ)</span>", options: ["醃", "煙", "閹", "焉"], answer: 0, full: "醃菜", explain: "「醃菜」 — 用鹽巴醃製的菜。" }
    ]
  },

  l8: {
    title: "第八課",
    subtitle: "行人的守護者",
    emoji: "🦁",
    cssClass: "cn",
    bigQuestion: "看注音、寫國字 — 第八課生字練習 (19 個生字)。",
    // 本課生字 (from textbook G3-2 第八課)
    vocab: [
      { w: "護", z: "ㄏㄨˋ" },
      { w: "者", z: "ㄓㄜˇ" },
      { w: "展", z: "ㄓㄢˇ" },
      { w: "潑", z: "ㄆㄛ" },
      { w: "談", z: "ㄊㄢˊ" },
      { w: "秩", z: "ㄓˋ" },
      { w: "倍", z: "ㄅㄟˋ" },
      { w: "疾", z: "ㄐㄧˊ" },
      { w: "徐", z: "ㄒㄩˊ" },
      { w: "抬", z: "ㄊㄞˊ" },
      { w: "胸", z: "ㄒㄩㄥ" },
      { w: "或", z: "ㄏㄨㄛˋ" },
      { w: "某", z: "ㄇㄡˇ" },
      { w: "扮", z: "ㄅㄢˋ" },
      { w: "型", z: "ㄒㄧㄥˊ" },
      { w: "芒", z: "ㄇㄤˊ" },
      { w: "邁", z: "ㄇㄞˋ" },
      { w: "伐", z: "ㄈㄚˊ" },
      { w: "挺", z: "ㄊㄧㄥˇ" }
    ],
    idioms: ["愁眉不展", "抬頭挺胸", "事半功倍", "紙上談兵", "胸有成竹", "疾言厲色", "不疾不徐"],
    quiz_write_char: [
      { full: "秩序", chars: [{blank: "秩", z: "ㄓˋ"}, {show: "序"}] },
      { full: "展覽", chars: [{blank: "展", z: "ㄓㄢˇ"}, {show: "覽"}] },
      { full: "角色扮演", chars: [{show: "角"}, {show: "色"}, {blank: "扮", z: "ㄅㄢˋ"}, {show: "演"}] },
      { full: "勇氣倍增", chars: [{show: "勇"}, {show: "氣"}, {blank: "倍", z: "ㄅㄟˋ"}, {show: "增"}] },
      { full: "模型", chars: [{show: "模"}, {blank: "型", z: "ㄒㄧㄥˊ"}] },
      { full: "醫護人員", chars: [{show: "醫"}, {blank: "護", z: "ㄏㄨˋ"}, {show: "人"}, {show: "員"}] },
      { full: "抬頭挺胸", chars: [{blank: "抬", z: "ㄊㄞˊ"}, {show: "頭"}, {show: "挺"}, {blank: "胸", z: "ㄒㄩㄥ"}] },
      { full: "或許", chars: [{blank: "或", z: "ㄏㄨㄛˋ"}, {show: "許"}] },
      { full: "微風徐徐", chars: [{show: "微"}, {show: "風"}, {blank: "徐", z: "ㄒㄩˊ"}, {blank: "徐", z: "ㄒㄩˊ"}] },
      { full: "活潑", chars: [{show: "活"}, {blank: "潑", z: "ㄆㄛ"}] },
      { full: "心胸寬大", chars: [{show: "心"}, {blank: "胸", z: "ㄒㄩㄥ"}, {show: "寬"}, {show: "大"}] },
      { full: "疾病", chars: [{blank: "疾", z: "ㄐㄧˊ"}, {show: "病"}] },
      { full: "座談會", chars: [{show: "座"}, {blank: "談", z: "ㄊㄢˊ"}, {show: "會"}] },
      { full: "新聞記者", chars: [{show: "新"}, {show: "聞"}, {show: "記"}, {blank: "者", z: "ㄓㄜˇ"}] },
      { full: "某些", chars: [{blank: "某", z: "ㄇㄡˇ"}, {show: "些"}] }
    ],
    quiz_idiom_fill: [
      { sentence: "他____地完成了這幅畫。", answer: "不疾不徐" },
      { sentence: "先做好計畫,做事就能____。", answer: "事半功倍" },
      { sentence: "因為平時努力練習,他回答問題時____。", answer: "胸有成竹" },
      { sentence: "軍人們____地接受檢閱。", answer: "抬頭挺胸" },
      { sentence: "小華考試失敗後,一整天都____。", answer: "愁眉不展" },
      { sentence: "面對問題,他看起來____。", answer: "胸有成竹" },
      { sentence: "只會____,卻沒有真正行動,是不行的。", answer: "紙上談兵" },
      { sentence: "爸爸看到我說謊時,立刻____。", answer: "疾言厲色" },
      { sentence: "爸爸工作遇到困難,最近總是____。", answer: "愁眉不展" },
      { sentence: "老師____地批評不守規矩的同學。", answer: "疾言厲色" },
      { sentence: "她因為擔心比賽結果而____。", answer: "愁眉不展" },
      { sentence: "用對方法學習,可以____。", answer: "事半功倍" },
      { sentence: "他____地提醒大家注意安全。", answer: "疾言厲色" },
      { sentence: "我們要____,做個有自信的人。", answer: "抬頭挺胸" },
      { sentence: "小美準備充分,所以比賽時____。", answer: "胸有成竹" },
      { sentence: "他講得頭頭是道,其實只是____。", answer: "紙上談兵" },
      { sentence: "主持人____地介紹活動內容。", answer: "不疾不徐" },
      { sentence: "得獎後,他____地走上台。", answer: "抬頭挺胸" },
      { sentence: "做實驗不能只是____。", answer: "紙上談兵" },
      { sentence: "爺爺____地走在公園裡。", answer: "不疾不徐" },
      { sentence: "老師教我們整理重點,讓大家____。", answer: "事半功倍" }
    ],
    quiz_fill_char: [
      { q: "<strong>___序</strong> <span class='cn-zhuyin'>(ㄓˋ)</span>", options: ["秩", "至", "致", "智"], answer: 0, full: "秩序", explain: "「秩序」 ㄓˋ ㄒㄩˋ — 整齊有規律。" },
      { q: "<strong>___覽</strong> <span class='cn-zhuyin'>(ㄓㄢˇ)</span>", options: ["展", "戰", "占", "斬"], answer: 0, full: "展覽", explain: "「展覽」 ㄓㄢˇ ㄌㄢˇ — 擺出物品給人看。" },
      { q: "<strong>角色___演</strong> <span class='cn-zhuyin'>(ㄅㄢˋ)</span>", options: ["扮", "辦", "半", "伴"], answer: 0, full: "角色扮演", explain: "「角色扮演」 — 模仿人物。" },
      { q: "<strong>勇氣___增</strong> <span class='cn-zhuyin'>(ㄅㄟˋ)</span>", options: ["倍", "備", "輩", "背"], answer: 0, full: "勇氣倍增", explain: "「勇氣倍增」 — 勇氣增加好幾倍。" },
      { q: "<strong>模___</strong> <span class='cn-zhuyin'>(ㄒㄧㄥˊ)</span>", options: ["型", "形", "刑", "行"], answer: 0, full: "模型", explain: "「模型」 ㄇㄛˊ ㄒㄧㄥˊ — 仿做的小東西。" },
      { q: "<strong>醫___人員</strong> <span class='cn-zhuyin'>(ㄏㄨˋ)</span>", options: ["護", "互", "戶", "湖"], answer: 0, full: "醫護人員", explain: "「醫護人員」 — 醫生護士。" },
      { q: "<strong>新聞記___</strong> <span class='cn-zhuyin'>(ㄓㄜˇ)</span>", options: ["者", "這", "遮", "折"], answer: 0, full: "新聞記者", explain: "「新聞記者」 — 採訪新聞的人。" },
      { q: "<strong>___頭挺胸</strong> <span class='cn-zhuyin'>(ㄊㄞˊ)</span>", options: ["抬", "台", "颱", "苔"], answer: 0, full: "抬頭挺胸", explain: "「抬頭挺胸」 — 表示有自信。" },
      { q: "<strong>抬頭___胸</strong> <span class='cn-zhuyin'>(ㄊㄧㄥˇ)</span>", options: ["挺", "聽", "庭", "停"], answer: 0, full: "抬頭挺胸", explain: "「抬頭挺胸」 ㄊㄞˊ ㄊㄡˊ ㄊㄧㄥˇ ㄒㄩㄥ。" },
      { q: "<strong>抬頭挺___</strong> <span class='cn-zhuyin'>(ㄒㄩㄥ)</span>", options: ["胸", "兄", "凶", "雄"], answer: 0, full: "抬頭挺胸", explain: "「抬頭挺胸」 — 表示自信。" },
      { q: "<strong>___許</strong> <span class='cn-zhuyin'>(ㄏㄨㄛˋ)</span>", options: ["或", "惑", "禍", "獲"], answer: 0, full: "或許", explain: "「或許」 ㄏㄨㄛˋ ㄒㄩˇ — 也許。" },
      { q: "<strong>微風___徐</strong> <span class='cn-zhuyin'>(ㄒㄩˊ)</span>", options: ["徐", "許", "敘", "緒"], answer: 0, full: "微風徐徐", explain: "「微風徐徐」 — 風緩緩地吹。" },
      { q: "<strong>活___</strong> <span class='cn-zhuyin'>(ㄆㄛ)</span>", options: ["潑", "破", "婆", "迫"], answer: 0, full: "活潑", explain: "「活潑」 ㄏㄨㄛˊ ㄆㄛ — 開朗有朝氣。" },
      { q: "<strong>心___寬大</strong> <span class='cn-zhuyin'>(ㄒㄩㄥ)</span>", options: ["胸", "兄", "凶", "雄"], answer: 0, full: "心胸寬大", explain: "「心胸寬大」 — 心地寬廣。" },
      { q: "<strong>___病</strong> <span class='cn-zhuyin'>(ㄐㄧˊ)</span>", options: ["疾", "及", "急", "級"], answer: 0, full: "疾病", explain: "「疾病」 ㄐㄧˊ ㄅㄧㄥˋ — 生病。" },
      { q: "<strong>座___會</strong> <span class='cn-zhuyin'>(ㄊㄢˊ)</span>", options: ["談", "彈", "潭", "壇"], answer: 0, full: "座談會", explain: "「座談會」 ㄗㄨㄛˋ ㄊㄢˊ ㄏㄨㄟˋ。" },
      { q: "<strong>___些</strong> <span class='cn-zhuyin'>(ㄇㄡˇ)</span>", options: ["某", "謀", "牡", "畝"], answer: 0, full: "某些", explain: "「某些」 ㄇㄡˇ ㄒㄧㄝ — 不特定的一部分。" },
      { q: "<strong>某___</strong> <span class='cn-zhuyin'>(ㄒㄧㄝ)</span>", options: ["些", "歇", "邪", "謝"], answer: 0, full: "某些", explain: "「某些」 ㄇㄡˇ ㄒㄧㄝ — 不特定的一部分。" }
    ]
  },

  l9: {
    title: "第九課",
    subtitle: "就愛兩兩在一起",
    emoji: "🌱",
    cssClass: "cn",
    bigQuestion: "看注音、寫國字 — 第九課生字練習 (17 個生字)。",
    // 本課生字 (from textbook G3-2 第九課)
    vocab: [
      { w: "湯", z: "ㄊㄤ" },
      { w: "筷", z: "ㄎㄨㄞˋ" },
      { w: "慣", z: "ㄍㄨㄢˋ" },
      { w: "較", z: "ㄐㄧㄠˋ" },
      { w: "圍", z: "ㄨㄟˊ" },
      { w: "餐", z: "ㄘㄢ" },
      { w: "套", z: "ㄊㄠˋ" },
      { w: "煮", z: "ㄓㄨˇ" },
      { w: "端", z: "ㄉㄨㄢ" },
      { w: "免", z: "ㄇㄧㄢˇ" },
      { w: "取", z: "ㄑㄩˇ" },
      { w: "垃", z: "ㄌㄜˋ" },
      { w: "圾", z: "ㄙㄜˋ" },
      { w: "化", z: "ㄏㄨㄚˋ" },
      { w: "舉", z: "ㄐㄩˇ" },
      { w: "扁", z: "ㄅㄧㄢˇ" },
      { w: "廚", z: "ㄔㄨˊ" }
    ],
    idioms: ["赴湯蹈火", "化險為夷", "一舉兩得", "輕而易舉"],
    quiz_write_char: [
      { full: "入圍", chars: [{show: "入"}, {blank: "圍", z: "ㄨㄟˊ"}] },
      { full: "名單", chars: [{show: "名"}, {blank: "單", z: "ㄉㄢ"}] },
      { full: "變化", chars: [{show: "變"}, {blank: "化", z: "ㄏㄨㄚˋ"}] },
      { full: "舉辦", chars: [{blank: "舉", z: "ㄐㄩˇ"}, {show: "辦"}] },
      { full: "餐會", chars: [{blank: "餐", z: "ㄘㄢ"}, {show: "會"}] },
      { full: "取消", chars: [{blank: "取", z: "ㄑㄩˇ"}, {show: "消"}] },
      { full: "熱湯", chars: [{show: "熱"}, {blank: "湯", z: "ㄊㄤ"}] },
      { full: "習慣", chars: [{show: "習"}, {blank: "慣", z: "ㄍㄨㄢˋ"}] },
      { full: "免洗筷", chars: [{blank: "免", z: "ㄇㄧㄢˇ"}, {show: "洗"}, {blank: "筷", z: "ㄎㄨㄞˋ"}] },
      { full: "垃圾分類", chars: [{blank: "垃", z: "ㄌㄜˋ"}, {blank: "圾", z: "ㄙㄜˋ"}, {show: "分"}, {blank: "類", z: "ㄌㄟˋ"}] },
      { full: "姿勢端正", chars: [{show: "姿"}, {show: "勢"}, {blank: "端", z: "ㄉㄨㄢ"}, {show: "正"}] },
      { full: "舉行", chars: [{blank: "舉", z: "ㄐㄩˇ"}, {show: "行"}] },
      { full: "免費", chars: [{blank: "免", z: "ㄇㄧㄢˇ"}, {show: "費"}] },
      { full: "比較", chars: [{show: "比"}, {blank: "較", z: "ㄐㄧㄠˋ"}] },
      { full: "手套", chars: [{show: "手"}, {blank: "套", z: "ㄊㄠˋ"}] },
      { full: "煮飯", chars: [{blank: "煮", z: "ㄓㄨˇ"}, {show: "飯"}] }
    ],
    quiz_idiom_fill: [
      { sentence: "騎腳踏車上學,既運動又環保,真是____。", answer: "一舉兩得" },
      { sentence: "大家互相合作,終於____。", answer: "化險為夷" },
      { sentence: "幫媽媽買東西還能順便散步,真是____。", answer: "一舉兩得" },
      { sentence: "幸好警察及時趕到,才讓大家____。", answer: "化險為夷" },
      { sentence: "他一下子就完成作業,真是____。", answer: "輕而易舉" },
      { sentence: "這個方法能節省時間,又能提高效率,可說是____。", answer: "一舉兩得" },
      { sentence: "爸媽為了孩子,再辛苦也願意____。", answer: "赴湯蹈火" },
      { sentence: "小明跑得很快,贏得比賽對他來說____。", answer: "輕而易舉" },
      { sentence: "對哥哥來說,搬這張桌子是____的事。", answer: "輕而易舉" },
      { sentence: "經過醫生急救後,病人終於____。", answer: "化險為夷" },
      { sentence: "為了朋友,他願意____。", answer: "赴湯蹈火" },
      { sentence: "消防員為了救人,常常____。", answer: "赴湯蹈火" }
    ],
    quiz_fill_char: [
      { q: "<strong>入___</strong> <span class='cn-zhuyin'>(ㄨㄟˊ)</span>", options: ["圍", "違", "微", "為"], answer: 0, full: "入圍", explain: "「入圍」 ㄖㄨˋ ㄨㄟˊ — 進入決選範圍。" },
      { q: "<strong>___辦</strong> <span class='cn-zhuyin'>(ㄐㄩˇ)</span>", options: ["舉", "巨", "矩", "局"], answer: 0, full: "舉辦", explain: "「舉辦」 ㄐㄩˇ ㄅㄢˋ — 辦活動。" },
      { q: "<strong>___會</strong> <span class='cn-zhuyin'>(ㄘㄢ)</span>", options: ["餐", "慚", "殘", "蠶"], answer: 0, full: "餐會", explain: "「餐會」 ㄘㄢ ㄏㄨㄟˋ — 一起吃飯的聚會。" },
      { q: "<strong>熱___</strong> <span class='cn-zhuyin'>(ㄊㄤ)</span>", options: ["湯", "燙", "趟", "堂"], answer: 0, full: "熱湯", explain: "「熱湯」 ㄖㄜˋ ㄊㄤ — 燙熱的湯。" },
      { q: "<strong>習___</strong> <span class='cn-zhuyin'>(ㄍㄨㄢˋ)</span>", options: ["慣", "貫", "罐", "灌"], answer: 0, full: "習慣", explain: "「習慣」 ㄒㄧˊ ㄍㄨㄢˋ — 長期養成的行為。" },
      { q: "<strong>免洗___</strong> <span class='cn-zhuyin'>(ㄎㄨㄞˋ)</span>", options: ["筷", "塊", "快", "會"], answer: 0, full: "免洗筷", explain: "「免洗筷」 — 用一次就丟。" },
      { q: "<strong>___洗筷</strong> <span class='cn-zhuyin'>(ㄇㄧㄢˇ)</span>", options: ["免", "面", "麵", "勉"], answer: 0, full: "免洗筷", explain: "「免洗筷」 ㄇㄧㄢˇ ㄒㄧˇ ㄎㄨㄞˋ。" },
      { q: "<strong>___圾</strong> <span class='cn-zhuyin'>(ㄌㄜˋ)</span>", options: ["垃", "勒", "肋", "樂"], answer: 0, full: "垃圾", explain: "「垃圾」 ㄌㄜˋ ㄙㄜˋ。" },
      { q: "<strong>垃___</strong> <span class='cn-zhuyin'>(ㄙㄜˋ)</span>", options: ["圾", "色", "瑟", "塞"], answer: 0, full: "垃圾", explain: "「垃圾」 ㄌㄜˋ ㄙㄜˋ — 不要的廢物。" },
      { q: "<strong>姿勢___正</strong> <span class='cn-zhuyin'>(ㄉㄨㄢ)</span>", options: ["端", "短", "段", "斷"], answer: 0, full: "姿勢端正", explain: "「端正」 — 不歪斜。" },
      { q: "<strong>___行</strong> <span class='cn-zhuyin'>(ㄐㄩˇ)</span>", options: ["舉", "巨", "矩", "局"], answer: 0, full: "舉行", explain: "「舉行」 ㄐㄩˇ ㄒㄧㄥˊ — 進行活動。" },
      { q: "<strong>比___</strong> <span class='cn-zhuyin'>(ㄐㄧㄠˋ)</span>", options: ["較", "叫", "教", "覺"], answer: 0, full: "比較", explain: "「比較」 ㄅㄧˇ ㄐㄧㄠˋ — 對照。" },
      { q: "<strong>手___</strong> <span class='cn-zhuyin'>(ㄊㄠˋ)</span>", options: ["套", "討", "陶", "桃"], answer: 0, full: "手套", explain: "「手套」 ㄕㄡˇ ㄊㄠˋ — 戴在手上。" },
      { q: "<strong>___飯</strong> <span class='cn-zhuyin'>(ㄓㄨˇ)</span>", options: ["煮", "主", "住", "助"], answer: 0, full: "煮飯", explain: "「煮飯」 ㄓㄨˇ ㄈㄢˋ — 把飯煮熟。" },
      { q: "<strong>___消</strong> <span class='cn-zhuyin'>(ㄑㄩˇ)</span>", options: ["取", "去", "區", "曲"], answer: 0, full: "取消", explain: "「取消」 ㄑㄩˇ ㄒㄧㄠ — 不做了。" },
      { q: "<strong>變___</strong> <span class='cn-zhuyin'>(ㄏㄨㄚˋ)</span>", options: ["化", "話", "畫", "華"], answer: 0, full: "變化", explain: "「變化」 ㄅㄧㄢˋ ㄏㄨㄚˋ — 情況改變。" },
      { q: "<strong>___平</strong> <span class='cn-zhuyin'>(ㄅㄧㄢˇ)</span>", options: ["扁", "便", "辨", "鞭"], answer: 0, full: "扁平", explain: "「扁平」 — 又薄又平。" },
      { q: "<strong>___房</strong> <span class='cn-zhuyin'>(ㄔㄨˊ)</span>", options: ["廚", "除", "鋤", "雛"], answer: 0, full: "廚房", explain: "「廚房」 — 煮飯做菜的地方。" }
    ]
  },

  l10: {
    title: "第十課",
    subtitle: "飛行員和小王子",
    emoji: "📚",
    cssClass: "cn",
    bigQuestion: "看注音、寫國字 — 第十課生字練習 (18 個生字)。",
    // 本課生字 (from textbook G3-2 第十課)
    vocab: [
      { w: "員", z: "ㄩㄢˊ" },
      { w: "幕", z: "ㄇㄨˋ" },
      { w: "無", z: "ㄨˊ" },
      { w: "際", z: "ㄐㄧˋ" },
      { w: "幅", z: "ㄈㄨˊ" },
      { w: "帽", z: "ㄇㄠˋ" },
      { w: "圖", z: "ㄊㄨˊ" },
      { w: "蛇", z: "ㄕㄜˊ" },
      { w: "瞪", z: "ㄉㄥˋ" },
      { w: "呆", z: "ㄉㄞ" },
      { w: "揮", z: "ㄏㄨㄟ" },
      { w: "既", z: "ㄐㄧˋ" },
      { w: "胃", z: "ㄨㄟˋ" },
      { w: "瞧", z: "ㄑㄧㄠˋ" },
      { w: "豎", z: "ㄕㄨˋ" },
      { w: "鯨", z: "ㄐㄧㄥ" },
      { w: "寵", z: "ㄔㄨㄥˇ" },
      { w: "拇", z: "ㄇㄨˇ" }
    ],
    idioms: ["既往不咎", "一望無際", "不修邊幅", "按圖索驥"],
    quiz_write_char: [
      { full: "圖書館", chars: [{blank: "圖", z: "ㄊㄨˊ"}, {show: "書"}, {show: "館"}] },
      { full: "無所謂", chars: [{blank: "無", z: "ㄨˊ"}, {show: "所"}, {show: "謂"}] },
      { full: "發呆", chars: [{show: "發"}, {blank: "呆", z: "ㄉㄞ"}] },
      { full: "指揮", chars: [{show: "指"}, {blank: "揮", z: "ㄏㄨㄟ"}] },
      { full: "眼鏡蛇", chars: [{show: "眼"}, {show: "鏡"}, {blank: "蛇", z: "ㄕㄜˊ"}] },
      { full: "豎笛", chars: [{blank: "豎", z: "ㄕㄨˋ"}, {show: "笛"}] },
      { full: "電腦螢幕", chars: [{show: "電"}, {show: "腦"}, {show: "螢"}, {blank: "幕", z: "ㄇㄨˋ"}] },
      { full: "一眼瞧見", chars: [{show: "一"}, {show: "眼"}, {blank: "瞧", z: "ㄑㄧㄠˋ"}, {show: "見"}] },
      { full: "開胃菜", chars: [{show: "開"}, {blank: "胃", z: "ㄨㄟˋ"}, {show: "菜"}] },
      { full: "帽子", chars: [{blank: "帽", z: "ㄇㄠˋ"}, {show: "子"}] },
      { full: "工作人員", chars: [{show: "工"}, {show: "作"}, {show: "人"}, {blank: "員", z: "ㄩㄢˊ"}] },
      { full: "既然如此", chars: [{blank: "既", z: "ㄐㄧˋ"}, {show: "然"}, {show: "如"}, {show: "此"}] },
      { full: "瞪大眼睛", chars: [{blank: "瞪", z: "ㄉㄥˋ"}, {show: "大"}, {show: "眼"}, {show: "睛"}] },
      { full: "不切實際", chars: [{show: "不"}, {show: "切"}, {show: "實"}, {blank: "際", z: "ㄐㄧˋ"}] },
      { full: "一幅畫", chars: [{show: "一"}, {blank: "幅", z: "ㄈㄨˊ"}, {show: "畫"}] }
    ],
    quiz_idiom_fill: [
      { sentence: "哥哥平時____,不太注意外表。", answer: "不修邊幅" },
      { sentence: "老師決定____,原諒犯錯的同學。", answer: "既往不咎" },
      { sentence: "爸爸希望大家____,重新開始。", answer: "既往不咎" },
      { sentence: "站在海邊,可以看到____的大海。", answer: "一望無際" },
      { sentence: "他總是頭髮亂亂的,看起來很____。", answer: "不修邊幅" },
      { sentence: "那位畫家雖然____,但很有才華。", answer: "不修邊幅" },
      { sentence: "依照說明書操作,就像____一樣簡單。", answer: "按圖索驥" },
      { sentence: "我們____,終於找到目的地。", answer: "按圖索驥" },
      { sentence: "我們看到____的天空。", answer: "一望無際" },
      { sentence: "小偵探____地找到了線索。", answer: "按圖索驥" },
      { sentence: "草原____,非常美麗。", answer: "一望無際" },
      { sentence: "只要你願意改過,我們就____。", answer: "既往不咎" }
    ],
    quiz_fill_char: [
      { q: "<strong>___書館</strong> <span class='cn-zhuyin'>(ㄊㄨˊ)</span>", options: ["圖", "途", "塗", "禿"], answer: 0, full: "圖書館", explain: "「圖書館」 ㄊㄨˊ ㄕㄨ ㄍㄨㄢˇ。" },
      { q: "<strong>工作人___</strong> <span class='cn-zhuyin'>(ㄩㄢˊ)</span>", options: ["員", "圓", "原", "源"], answer: 0, full: "工作人員", explain: "「工作人員」 — 工作的人。" },
      { q: "<strong>電腦螢___</strong> <span class='cn-zhuyin'>(ㄇㄨˋ)</span>", options: ["幕", "暮", "墓", "慕"], answer: 0, full: "電腦螢幕", explain: "「電腦螢幕」 ㄉㄧㄢˋ ㄋㄠˇ ㄧㄥˊ ㄇㄨˋ。" },
      { q: "<strong>___所謂</strong> <span class='cn-zhuyin'>(ㄨˊ)</span>", options: ["無", "吳", "巫", "舞"], answer: 0, full: "無所謂", explain: "「無所謂」 ㄨˊ ㄙㄨㄛˇ ㄨㄟˋ — 沒關係。" },
      { q: "<strong>不切實___</strong> <span class='cn-zhuyin'>(ㄐㄧˋ)</span>", options: ["際", "記", "繼", "計"], answer: 0, full: "不切實際", explain: "「不切實際」 — 不符合實際。" },
      { q: "<strong>一___畫</strong> <span class='cn-zhuyin'>(ㄈㄨˊ)</span>", options: ["幅", "服", "福", "佛"], answer: 0, full: "一幅畫", explain: "「一幅畫」 — 「幅」是畫的量詞。" },
      { q: "<strong>___子</strong> <span class='cn-zhuyin'>(ㄇㄠˋ)</span>", options: ["帽", "貌", "茂", "冒"], answer: 0, full: "帽子", explain: "「帽子」 ㄇㄠˋ ˙ㄗ。" },
      { q: "<strong>眼鏡___</strong> <span class='cn-zhuyin'>(ㄕㄜˊ)</span>", options: ["蛇", "舌", "捨", "設"], answer: 0, full: "眼鏡蛇", explain: "「眼鏡蛇」 ㄧㄢˇ ㄐㄧㄥˋ ㄕㄜˊ。" },
      { q: "<strong>___大眼睛</strong> <span class='cn-zhuyin'>(ㄉㄥˋ)</span>", options: ["瞪", "登", "凳", "等"], answer: 0, full: "瞪大眼睛", explain: "「瞪大眼睛」 — 把眼睛張很大。" },
      { q: "<strong>發___</strong> <span class='cn-zhuyin'>(ㄉㄞ)</span>", options: ["呆", "帶", "代", "袋"], answer: 0, full: "發呆", explain: "「發呆」 ㄈㄚ ㄉㄞ — 心思不集中。" },
      { q: "<strong>指___</strong> <span class='cn-zhuyin'>(ㄏㄨㄟ)</span>", options: ["揮", "輝", "灰", "回"], answer: 0, full: "指揮", explain: "「指揮」 ㄓˇ ㄏㄨㄟ — 領導。" },
      { q: "<strong>___然如此</strong> <span class='cn-zhuyin'>(ㄐㄧˋ)</span>", options: ["既", "記", "繼", "計"], answer: 0, full: "既然如此", explain: "「既然如此」 — 事情既然這樣。" },
      { q: "<strong>開___菜</strong> <span class='cn-zhuyin'>(ㄨㄟˋ)</span>", options: ["胃", "為", "謂", "未"], answer: 0, full: "開胃菜", explain: "「開胃菜」 — 餐前小菜。" },
      { q: "<strong>一眼___見</strong> <span class='cn-zhuyin'>(ㄑㄧㄠˋ)</span>", options: ["瞧", "巧", "翹", "悄"], answer: 0, full: "一眼瞧見", explain: "「一眼瞧見」 — 一看就看見。" },
      { q: "<strong>___笛</strong> <span class='cn-zhuyin'>(ㄕㄨˋ)</span>", options: ["豎", "樹", "數", "述"], answer: 0, full: "豎笛", explain: "「豎笛」 ㄕㄨˋ ㄉㄧˊ — 直立吹奏的樂器。" },
      { q: "<strong>___魚</strong> <span class='cn-zhuyin'>(ㄐㄧㄥ)</span>", options: ["鯨", "京", "經", "驚"], answer: 0, full: "鯨魚", explain: "「鯨魚」 — 海洋中最大的動物。" },
      { q: "<strong>___物</strong> <span class='cn-zhuyin'>(ㄔㄨㄥˇ)</span>", options: ["寵", "充", "衝", "崇"], answer: 0, full: "寵物", explain: "「寵物」 — 家裡飼養的動物。" },
      { q: "<strong>___指</strong> <span class='cn-zhuyin'>(ㄇㄨˇ)</span>", options: ["拇", "母", "畝", "牡"], answer: 0, full: "拇指", explain: "「拇指」 — 大拇指。" }
    ]
  },

  l11: {
    title: "第十一課",
    subtitle: "畫龍點睛",
    emoji: "🐲",
    cssClass: "cn",
    bigQuestion: "看注音、寫國字 — 第十一課生字練習 (19 個生字)。",
    // 本課生字 (from textbook G3-2 第十一課)
    vocab: [
      { w: "維", z: "ㄨㄟˊ" },
      { w: "肖", z: "ㄒㄧㄠˋ" },
      { w: "寺", z: "ㄙˋ" },
      { w: "尚", z: "ㄕㄤˋ" },
      { w: "困", z: "ㄎㄨㄣˋ" },
      { w: "擾", z: "ㄖㄠˇ" },
      { w: "邀", z: "ㄧㄠ" },
      { w: "逼", z: "ㄅㄧ" },
      { w: "孫", z: "ㄙㄨㄣ" },
      { w: "追", z: "ㄓㄨㄟ" },
      { w: "旦", z: "ㄉㄢˋ" },
      { w: "相", z: "ㄒㄧㄤ" },
      { w: "朗", z: "ㄌㄤˇ" },
      { w: "布", z: "ㄅㄨˋ" },
      { w: "蹤", z: "ㄗㄨㄥ" },
      { w: "佛", z: "ㄈㄛˊ" },
      { w: "梁", z: "ㄌㄧㄤˊ" },
      { w: "糞", z: "ㄈㄣˋ" },
      { w: "鷹", z: "ㄧㄥ" }
    ],
    idioms: ["烏雲密布", "豁然開朗", "開誠布公", "目瞪口呆", "維妙維肖", "無影無蹤"],
    quiz_write_char: [
      { full: "追蹤", chars: [{blank: "追", z: "ㄓㄨㄟ"}, {blank: "蹤", z: "ㄗㄨㄥ"}] },
      { full: "互相", chars: [{show: "互"}, {blank: "相", z: "ㄒㄧㄤ"}] },
      { full: "孫女", chars: [{blank: "孫", z: "ㄙㄨㄣ"}, {show: "女"}] },
      { full: "困擾", chars: [{blank: "困", z: "ㄎㄨㄣˋ"}, {blank: "擾", z: "ㄖㄠˇ"}] },
      { full: "寺廟", chars: [{blank: "寺", z: "ㄙˋ"}, {show: "廟"}] },
      { full: "天氣晴朗", chars: [{show: "天"}, {show: "氣"}, {show: "晴"}, {blank: "朗", z: "ㄌㄤˇ"}] },
      { full: "邀請函", chars: [{blank: "邀", z: "ㄧㄠ"}, {show: "請"}, {show: "函"}] },
      { full: "公布答案", chars: [{show: "公"}, {blank: "布", z: "ㄅㄨˋ"}, {show: "答"}, {show: "案"}] },
      { full: "流行時尚", chars: [{show: "流"}, {show: "行"}, {show: "時"}, {blank: "尚", z: "ㄕㄤˋ"}] },
      { full: "逼迫", chars: [{blank: "逼", z: "ㄅㄧ"}, {show: "迫"}] },
      { full: "元旦", chars: [{show: "元"}, {blank: "旦", z: "ㄉㄢˋ"}] },
      { full: "維修", chars: [{blank: "維", z: "ㄨㄟˊ"}, {show: "修"}] },
      { full: "十二生肖", chars: [{show: "十"}, {show: "二"}, {show: "生"}, {blank: "肖", z: "ㄒㄧㄠˋ"}] },
      { full: "擾亂秩序", chars: [{blank: "擾", z: "ㄖㄠˇ"}, {show: "亂"}, {show: "秩"}, {show: "序"}] }
    ],
    quiz_idiom_fill: [
      { sentence: "經過____的談話後,誤會終於解開了。", answer: "開誠布公" },
      { sentence: "下午突然____,大家急忙收衣服。", answer: "烏雲密布" },
      { sentence: "大家看到魔術表演後,全都____。", answer: "目瞪口呆" },
      { sentence: "畫中的小貓看起來____。", answer: "維妙維肖" },
      { sentence: "小鳥一下子飛得____。", answer: "無影無蹤" },
      { sentence: "她演戲演得____,大家都拍手叫好。", answer: "維妙維肖" },
      { sentence: "經過討論後,大家終於____。", answer: "豁然開朗" },
      { sentence: "我們應該____地討論問題。", answer: "開誠布公" },
      { sentence: "聽了老師的解釋後,我頓時____。", answer: "豁然開朗" },
      { sentence: "小明不小心打破花瓶,媽媽氣得讓他____。", answer: "目瞪口呆" },
      { sentence: "朋友之間要____,不要隱瞞。", answer: "開誠布公" },
      { sentence: "走出山洞後,眼前景色令人____。", answer: "豁然開朗" },
      { sentence: "我的鉛筆突然____,怎麼找都找不到。", answer: "無影無蹤" },
      { sentence: "天空____,看起來快下雨了。", answer: "烏雲密布" },
      { sentence: "弟弟模仿老師的樣子,真是____。", answer: "維妙維肖" },
      { sentence: "魔術師一揮手,兔子就____了。", answer: "無影無蹤" },
      { sentence: "他心情不好,臉上像____一樣。", answer: "烏雲密布" },
      { sentence: "他聽到這個消息時,立刻____。", answer: "目瞪口呆" }
    ],
    quiz_fill_char: [
      { q: "<strong>___修</strong> <span class='cn-zhuyin'>(ㄨㄟˊ)</span>", options: ["維", "圍", "違", "微"], answer: 0, full: "維修", explain: "「維修」 ㄨㄟˊ ㄒㄧㄡ — 保養修理。" },
      { q: "<strong>十二生___</strong> <span class='cn-zhuyin'>(ㄒㄧㄠˋ)</span>", options: ["肖", "笑", "孝", "校"], answer: 0, full: "十二生肖", explain: "「十二生肖」 — 十二種動物。" },
      { q: "<strong>___廟</strong> <span class='cn-zhuyin'>(ㄙˋ)</span>", options: ["寺", "四", "似", "肆"], answer: 0, full: "寺廟", explain: "「寺廟」 ㄙˋ ㄇㄧㄠˋ — 拜神的地方。" },
      { q: "<strong>流行時___</strong> <span class='cn-zhuyin'>(ㄕㄤˋ)</span>", options: ["尚", "上", "賞", "晌"], answer: 0, full: "流行時尚", explain: "「流行時尚」 — 流行的風格。" },
      { q: "<strong>___擾</strong> <span class='cn-zhuyin'>(ㄎㄨㄣˋ)</span>", options: ["困", "捆", "綑", "坤"], answer: 0, full: "困擾", explain: "「困擾」 ㄎㄨㄣˋ ㄖㄠˇ — 受打擾。" },
      { q: "<strong>困___</strong> <span class='cn-zhuyin'>(ㄖㄠˇ)</span>", options: ["擾", "繞", "撓", "嬈"], answer: 0, full: "困擾", explain: "「困擾」 — 受打擾。" },
      { q: "<strong>___請函</strong> <span class='cn-zhuyin'>(ㄧㄠ)</span>", options: ["邀", "搖", "瑤", "腰"], answer: 0, full: "邀請函", explain: "「邀請函」 ㄧㄠ ㄑㄧㄥˇ ㄏㄢˊ。" },
      { q: "<strong>___迫</strong> <span class='cn-zhuyin'>(ㄅㄧˋ)</span>", options: ["逼", "畢", "壁", "幣"], answer: 0, full: "逼迫", explain: "「逼迫」 ㄅㄧˋ ㄆㄛˋ — 強迫。" },
      { q: "<strong>___女</strong> <span class='cn-zhuyin'>(ㄙㄨㄣ)</span>", options: ["孫", "蓀", "酸", "損"], answer: 0, full: "孫女", explain: "「孫女」 ㄙㄨㄣ ㄋㄩˇ — 兒女的女兒。" },
      { q: "<strong>___蹤</strong> <span class='cn-zhuyin'>(ㄓㄨㄟ)</span>", options: ["追", "錐", "墜", "贅"], answer: 0, full: "追蹤", explain: "「追蹤」 ㄓㄨㄟ ㄗㄨㄥ — 跟蹤。" },
      { q: "<strong>追___</strong> <span class='cn-zhuyin'>(ㄗㄨㄥ)</span>", options: ["蹤", "宗", "綜", "鬃"], answer: 0, full: "追蹤", explain: "「追蹤」 ㄓㄨㄟ ㄗㄨㄥ。" },
      { q: "<strong>元___</strong> <span class='cn-zhuyin'>(ㄉㄢˋ)</span>", options: ["旦", "蛋", "彈", "但"], answer: 0, full: "元旦", explain: "「元旦」 ㄩㄢˊ ㄉㄢˋ — 1月1日。" },
      { q: "<strong>互___</strong> <span class='cn-zhuyin'>(ㄒㄧㄤ)</span>", options: ["相", "香", "鄉", "湘"], answer: 0, full: "互相", explain: "「互相」 ㄏㄨˋ ㄒㄧㄤ — 彼此之間。" },
      { q: "<strong>天氣晴___</strong> <span class='cn-zhuyin'>(ㄌㄤˇ)</span>", options: ["朗", "狼", "浪", "廊"], answer: 0, full: "天氣晴朗", explain: "「晴朗」 ㄑㄧㄥˊ ㄌㄤˇ — 天空很藍。" },
      { q: "<strong>公___</strong> <span class='cn-zhuyin'>(ㄅㄨˋ)</span>", options: ["布", "不", "步", "部"], answer: 0, full: "公布", explain: "「公布」 — 讓大家知道。" },
      { q: "<strong>___祖</strong> <span class='cn-zhuyin'>(ㄈㄛˊ)</span>", options: ["佛", "彿", "拂", "弗"], answer: 0, full: "佛祖", explain: "「佛祖」 — 佛教中最尊敬的神。" },
      { q: "<strong>棟___</strong> <span class='cn-zhuyin'>(ㄌㄧㄤˊ)</span>", options: ["梁", "良", "兩", "量"], answer: 0, full: "棟梁", explain: "「棟梁」 — 房屋的主要支柱;比喻人才。" },
      { q: "<strong>___便</strong> <span class='cn-zhuyin'>(ㄈㄣˋ)</span>", options: ["糞", "份", "憤", "墳"], answer: 0, full: "糞便", explain: "「糞便」 — 大便。" },
      { q: "<strong>老___</strong> <span class='cn-zhuyin'>(ㄧㄥ)</span>", options: ["鷹", "英", "迎", "嬰"], answer: 0, full: "老鷹", explain: "「老鷹」 — 大型猛禽鳥。" }
    ]
  },

  l12: {
    title: "第十二課",
    subtitle: "掉進一個兔子洞",
    emoji: "🌙",
    cssClass: "cn",
    bigQuestion: "看注音、寫國字 — 第十二課生字練習 (20 個生字)。",
    // 本課生字 (from textbook G3-2 第十二課)
    vocab: [
      { w: "夏", z: "ㄒㄧㄚˋ" },
      { w: "聊", z: "ㄌㄧㄠˊ" },
      { w: "幻", z: "ㄏㄨㄢˋ" },
      { w: "糕", z: "ㄍㄠ" },
      { w: "跌", z: "ㄉㄧㄝˊ" },
      { w: "央", z: "ㄧㄤ" },
      { w: "鼠", z: "ㄕㄨˇ" },
      { w: "咦", z: "ㄧˊ" },
      { w: "刺", z: "ㄘˋ" },
      { w: "牌", z: "ㄆㄞˊ" },
      { w: "后", z: "ㄏㄡˋ" },
      { w: "脾", z: "ㄆㄧˊ" },
      { w: "令", z: "ㄌㄧㄥˋ" },
      { w: "夢", z: "ㄇㄥˋ" },
      { w: "兵", z: "ㄅㄧㄥ" },
      { w: "錶", z: "ㄅㄧㄠˇ" },
      { w: "槌", z: "ㄔㄨㄟˊ" },
      { w: "賽", z: "ㄙㄞˋ" },
      { w: "鶴", z: "ㄏㄜˋ" },
      { w: "蝟", z: "ㄨㄟˋ" }
    ],
    idioms: ["朝令夕改", "抱頭鼠竄", "芒刺在背", "民不聊生", "夢寐以求"],
    quiz_write_char: [
      { full: "正中央", chars: [{show: "正"}, {show: "中"}, {blank: "央", z: "ㄧㄤ"}] },
      { full: "命令", chars: [{show: "命"}, {blank: "令", z: "ㄌㄧㄥˋ"}] },
      { full: "跌倒", chars: [{blank: "跌", z: "ㄉㄧㄝˊ"}, {show: "倒"}] },
      { full: "刺痛", chars: [{blank: "刺", z: "ㄘˋ"}, {show: "痛"}] },
      { full: "幻覺", chars: [{blank: "幻", z: "ㄏㄨㄢˋ"}, {show: "覺"}] },
      { full: "士兵", chars: [{show: "士"}, {blank: "兵", z: "ㄅㄧㄥ"}] },
      { full: "車牌", chars: [{show: "車"}, {blank: "牌", z: "ㄆㄞˊ"}] },
      { full: "做惡夢", chars: [{show: "做"}, {show: "惡"}, {blank: "夢", z: "ㄇㄥˋ"}] },
      { full: "咦！", chars: [{blank: "咦", z: "ㄧˊ"}, {show: "！"}] },
      { full: "無聊", chars: [{show: "無"}, {blank: "聊", z: "ㄌㄧㄠˊ"}] },
      { full: "松鼠", chars: [{show: "松"}, {blank: "鼠", z: "ㄕㄨˇ"}] },
      { full: "炎炎夏日", chars: [{show: "炎"}, {show: "炎"}, {blank: "夏", z: "ㄒㄧㄚˋ"}, {show: "日"}] },
      { full: "發脾氣", chars: [{show: "發"}, {blank: "脾", z: "ㄆㄧˊ"}, {show: "氣"}] },
      { full: "皇太后", chars: [{show: "皇"}, {show: "太"}, {blank: "后", z: "ㄏㄡˋ"}] },
      { full: "蛋糕", chars: [{show: "蛋"}, {blank: "糕", z: "ㄍㄠ"}] }
    ],
    quiz_idiom_fill: [
      { sentence: "做錯事後,他感到____。", answer: "芒刺在背" },
      { sentence: "做事情不能____,否則容易失敗。", answer: "朝令夕改" },
      { sentence: "如果政策____,大家會很困擾。", answer: "朝令夕改" },
      { sentence: "老師一直盯著我,我覺得____。", answer: "芒刺在背" },
      { sentence: "古代遇到災荒時,百姓生活____。", answer: "民不聊生" },
      { sentence: "被大家批評後,她整天____。", answer: "芒刺在背" },
      { sentence: "能到國外旅行,是她____的願望。", answer: "夢寐以求" },
      { sentence: "老鼠被貓追得____。", answer: "抱頭鼠竄" },
      { sentence: "這台腳踏車是我____的禮物。", answer: "夢寐以求" },
      { sentence: "戰爭時期常常讓百姓____。", answer: "民不聊生" },
      { sentence: "小偷看到警察後,立刻____。", answer: "抱頭鼠竄" },
      { sentence: "敵人被打敗後,只好____地逃走。", answer: "抱頭鼠竄" },
      { sentence: "他終於得到____的冠軍獎盃。", answer: "夢寐以求" },
      { sentence: "如果物價一直上漲,人民可能____。", answer: "民不聊生" },
      { sentence: "老闆____,讓員工不知道該怎麼做。", answer: "朝令夕改" }
    ],
    quiz_fill_char: [
      { q: "<strong>炎炎___日</strong> <span class='cn-zhuyin'>(ㄒㄧㄚˋ)</span>", options: ["夏", "下", "嚇", "廈"], answer: 0, full: "炎炎夏日", explain: "「炎炎夏日」 ㄧㄢˊ ㄧㄢˊ ㄒㄧㄚˋ ㄖˋ — 很熱的夏天。" },
      { q: "<strong>無___</strong> <span class='cn-zhuyin'>(ㄌㄧㄠˊ)</span>", options: ["聊", "遼", "撩", "寮"], answer: 0, full: "無聊", explain: "「無聊」 ㄨˊ ㄌㄧㄠˊ — 沒事做。" },
      { q: "<strong>___覺</strong> <span class='cn-zhuyin'>(ㄏㄨㄢˋ)</span>", options: ["幻", "換", "患", "緩"], answer: 0, full: "幻覺", explain: "「幻覺」 ㄏㄨㄢˋ ㄐㄩㄝˊ — 不存在但感覺看到。" },
      { q: "<strong>蛋___</strong> <span class='cn-zhuyin'>(ㄍㄠ)</span>", options: ["糕", "高", "膏", "篙"], answer: 0, full: "蛋糕", explain: "「蛋糕」 ㄉㄢˋ ㄍㄠ — 甜點。" },
      { q: "<strong>___倒</strong> <span class='cn-zhuyin'>(ㄉㄧㄝˊ)</span>", options: ["跌", "蝶", "迭", "諜"], answer: 0, full: "跌倒", explain: "「跌倒」 ㄉㄧㄝˊ ㄉㄠˇ — 摔下來。" },
      { q: "<strong>正中___</strong> <span class='cn-zhuyin'>(ㄧㄤ)</span>", options: ["央", "秧", "鴦", "殃"], answer: 0, full: "正中央", explain: "「正中央」 — 正好在中間。" },
      { q: "<strong>松___</strong> <span class='cn-zhuyin'>(ㄕㄨˇ)</span>", options: ["鼠", "署", "暑", "曙"], answer: 0, full: "松鼠", explain: "「松鼠」 ㄙㄨㄥ ㄕㄨˇ。" },
      { q: "<strong>___!</strong> <span class='cn-zhuyin'>(ㄧˊ)</span>", options: ["咦", "宜", "儀", "怡"], answer: 0, full: "咦！", explain: "「咦」 — 表示驚訝的聲音。" },
      { q: "<strong>___痛</strong> <span class='cn-zhuyin'>(ㄘˋ)</span>", options: ["刺", "次", "賜", "伺"], answer: 0, full: "刺痛", explain: "「刺痛」 ㄘˋ ㄊㄨㄥˋ — 尖銳的痛。" },
      { q: "<strong>車___</strong> <span class='cn-zhuyin'>(ㄆㄞˊ)</span>", options: ["牌", "排", "派", "拍"], answer: 0, full: "車牌", explain: "「車牌」 ㄔㄜ ㄆㄞˊ — 車上的號碼牌。" },
      { q: "<strong>皇太___</strong> <span class='cn-zhuyin'>(ㄏㄡˋ)</span>", options: ["后", "後", "厚", "候"], answer: 0, full: "皇太后", explain: "「皇太后」 ㄏㄨㄤˊ ㄊㄞˋ ㄏㄡˋ — 皇帝的母親。" },
      { q: "<strong>發___氣</strong> <span class='cn-zhuyin'>(ㄆㄧˊ)</span>", options: ["脾", "皮", "疲", "啤"], answer: 0, full: "發脾氣", explain: "「發脾氣」 — 不高興而生氣。" },
      { q: "<strong>命___</strong> <span class='cn-zhuyin'>(ㄌㄧㄥˋ)</span>", options: ["令", "另", "零", "玲"], answer: 0, full: "命令", explain: "「命令」 ㄇㄧㄥˋ ㄌㄧㄥˋ — 上級的吩咐。" },
      { q: "<strong>做惡___</strong> <span class='cn-zhuyin'>(ㄇㄥˋ)</span>", options: ["夢", "猛", "孟", "盟"], answer: 0, full: "做惡夢", explain: "「做惡夢」 ㄗㄨㄛˋ ㄜˋ ㄇㄥˋ — 夢到壞事。" },
      { q: "<strong>士___</strong> <span class='cn-zhuyin'>(ㄅㄧㄥ)</span>", options: ["兵", "並", "丙", "餅"], answer: 0, full: "士兵", explain: "「士兵」 ㄕˋ ㄅㄧㄥ — 軍中戰士。" },
      { q: "<strong>手___</strong> <span class='cn-zhuyin'>(ㄅㄧㄠˇ)</span>", options: ["錶", "表", "婊", "裱"], answer: 0, full: "手錶", explain: "「手錶」 — 戴在手腕上看時間。" },
      { q: "<strong>木___</strong> <span class='cn-zhuyin'>(ㄔㄨㄟˊ)</span>", options: ["槌", "捶", "錘", "椎"], answer: 0, full: "木槌", explain: "「木槌」 — 木頭做的槌子。" },
      { q: "<strong>比___</strong> <span class='cn-zhuyin'>(ㄙㄞˋ)</span>", options: ["賽", "塞", "賴", "篩"], answer: 0, full: "比賽", explain: "「比賽」 — 雙方競賽。" },
      { q: "<strong>白___</strong> <span class='cn-zhuyin'>(ㄏㄜˋ)</span>", options: ["鶴", "賀", "喝", "和"], answer: 0, full: "白鶴", explain: "「白鶴」 — 白色的大鳥。" },
      { q: "<strong>刺___</strong> <span class='cn-zhuyin'>(ㄨㄟˋ)</span>", options: ["蝟", "胃", "謂", "未"], answer: 0, full: "刺蝟", explain: "「刺蝟」 — 身上長刺的小動物。" }
    ]
  },

  // 總複習 — content from G3-2 中文 L7-L12 review worksheets.
  // - quiz_write_char: from PDF "G3-2 中文L7-12.pdf" (國字練習)
  // - quiz_idiom_fill: from "G3-2 L7-12 綜合成語填空練習卷.docx" (成語練習, 31 sentences)
  // - quiz_text: from "中文課文練習.pdf" (課文練習, multiple choice)
  review: {
    title: "總複習",
    subtitle: "第七課～第十二課",
    emoji: "📚",
    cssClass: "cn",
    bigQuestion: "綜合複習 — 把七到十二課的生字、成語、課文一次練個夠!",
    isReview: true,
    // === 國字練習 — 看注音寫國字 (from PDF) ===
    quiz_write_char: [
      { full: "困擾", chars: [{blank: "困", z: "ㄎㄨㄣˋ"}, {blank: "擾", z: "ㄖㄠˇ"}] },
      { full: "垃圾桶", chars: [{blank: "垃", z: "ㄌㄜˋ"}, {blank: "圾", z: "ㄙㄜˋ"}, {show: "桶"}] },
      { full: "舒適", chars: [{show: "舒"}, {blank: "適", z: "ㄕˋ"}] },
      { full: "微風徐徐", chars: [{show: "微"}, {show: "風"}, {blank: "徐", z: "ㄒㄩˊ"}, {blank: "徐", z: "ㄒㄩˊ"}] },
      { full: "疾病", chars: [{blank: "疾", z: "ㄐㄧˊ"}, {show: "病"}] },
      { full: "貪心", chars: [{blank: "貪", z: "ㄊㄢ"}, {show: "心"}] },
      { full: "豎琴", chars: [{blank: "豎", z: "ㄕㄨˋ"}, {show: "琴"}] },
      { full: "追蹤", chars: [{blank: "追", z: "ㄓㄨㄟ"}, {blank: "蹤", z: "ㄗㄨㄥ"}] },
      { full: "習慣", chars: [{show: "習"}, {blank: "慣", z: "ㄍㄨㄢˋ"}] },
      { full: "追求", chars: [{blank: "追", z: "ㄓㄨㄟ"}, {show: "求"}] },
      { full: "無聊", chars: [{show: "無"}, {blank: "聊", z: "ㄌㄧㄠˊ"}] },
      { full: "秩序", chars: [{blank: "秩", z: "ㄓˋ"}, {show: "序"}] },
      { full: "姿勢端正", chars: [{show: "姿"}, {show: "勢"}, {blank: "端", z: "ㄉㄨㄢ"}, {show: "正"}] },
      { full: "舉辦", chars: [{blank: "舉", z: "ㄐㄩˇ"}, {show: "辦"}] },
      { full: "雜誌封面", chars: [{show: "雜"}, {show: "誌"}, {blank: "封", z: "ㄈㄥ"}, {show: "面"}] },
      { full: "產品型號", chars: [{show: "產"}, {show: "品"}, {blank: "型", z: "ㄒㄧㄥˊ"}, {show: "號"}] },
      { full: "老鼠", chars: [{show: "老"}, {blank: "鼠", z: "ㄕㄨˇ"}] },
      { full: "無形之中", chars: [{show: "無"}, {blank: "形", z: "ㄒㄧㄥˊ"}, {show: "之"}, {show: "中"}] },
      { full: "互相", chars: [{show: "互"}, {blank: "相", z: "ㄒㄧㄤ"}] },
      { full: "懷疑", chars: [{show: "懷"}, {blank: "疑", z: "ㄧˊ"}] },
      { full: "避免", chars: [{show: "避"}, {blank: "免", z: "ㄇㄧㄢˇ"}] },
      { full: "性格爽朗", chars: [{show: "性"}, {show: "格"}, {show: "爽"}, {blank: "朗", z: "ㄌㄤˇ"}] },
      { full: "一旦", chars: [{show: "一"}, {blank: "旦", z: "ㄉㄢˋ"}] },
      { full: "皇后", chars: [{show: "皇"}, {blank: "后", z: "ㄏㄡˋ"}] },
      { full: "說謊騙人", chars: [{show: "說"}, {show: "謊"}, {blank: "騙", z: "ㄆㄧㄢˋ"}, {show: "人"}] },
      { full: "挺起胸膛", chars: [{blank: "挺", z: "ㄊㄧㄥˇ"}, {show: "起"}, {blank: "胸", z: "ㄒㄩㄥ"}, {show: "膛"}] },
      { full: "加倍奉還", chars: [{show: "加"}, {blank: "倍", z: "ㄅㄟˋ"}, {show: "奉"}, {show: "還"}] },
      { full: "厲害", chars: [{blank: "厲", z: "ㄌㄧˋ"}, {show: "害"}] },
      { full: "好脾氣", chars: [{show: "好"}, {blank: "脾", z: "ㄆㄧˊ"}, {show: "氣"}] },
      { full: "夏令營", chars: [{blank: "夏", z: "ㄒㄧㄚˋ"}, {blank: "令", z: "ㄌㄧㄥˋ"}, {show: "營"}] },
      { full: "逼迫", chars: [{blank: "逼", z: "ㄅㄧ"}, {show: "迫"}] },
      { full: "烤香腸", chars: [{show: "烤"}, {show: "香"}, {blank: "腸", z: "ㄔㄤˊ"}] },
      { full: "大幅上升", chars: [{show: "大"}, {blank: "幅", z: "ㄈㄨˊ"}, {show: "上"}, {show: "升"}] },
      { full: "人際關係", chars: [{show: "人"}, {blank: "際", z: "ㄐㄧˋ"}, {show: "關"}, {show: "係"}] },
      { full: "奧運金牌", chars: [{show: "奧"}, {show: "運"}, {show: "金"}, {blank: "牌", z: "ㄆㄞˊ"}] },
      { full: "跌落谷底", chars: [{blank: "跌", z: "ㄉㄧㄝˊ"}, {show: "落"}, {show: "谷"}, {show: "底"}] },
      { full: "蟒蛇", chars: [{show: "蟒"}, {blank: "蛇", z: "ㄕㄜˊ"}] },
      { full: "行程", chars: [{show: "行"}, {blank: "程", z: "ㄔㄥˊ"}] },
      { full: "傳承經驗", chars: [{show: "傳"}, {blank: "承", z: "ㄔㄥˊ"}, {show: "經"}, {show: "驗"}] },
      { full: "團隊成員", chars: [{show: "團"}, {show: "隊"}, {show: "成"}, {blank: "員", z: "ㄩㄢˊ"}] },
      { full: "指揮", chars: [{show: "指"}, {blank: "揮", z: "ㄏㄨㄟ"}] },
      { full: "年糕", chars: [{show: "年"}, {blank: "糕", z: "ㄍㄠ"}] },
      { full: "安全帽", chars: [{show: "安"}, {show: "全"}, {blank: "帽", z: "ㄇㄠˋ"}] },
      { full: "進展順利", chars: [{show: "進"}, {blank: "展", z: "ㄓㄢˇ"}, {show: "順"}, {show: "利"}] },
      { full: "去除汙漬", chars: [{show: "去"}, {show: "除"}, {show: "汙"}, {blank: "漬", z: "ㄗˋ"}] },
      { full: "布置房間", chars: [{blank: "布", z: "ㄅㄨˋ"}, {show: "置"}, {show: "房"}, {show: "間"}] },
      { full: "發呆", chars: [{show: "發"}, {blank: "呆", z: "ㄉㄞ"}] },
      { full: "收益良多", chars: [{show: "收"}, {blank: "益", z: "ㄧˋ"}, {show: "良"}, {show: "多"}] },
      { full: "既定行程", chars: [{blank: "既", z: "ㄐㄧˋ"}, {show: "定"}, {show: "行"}, {show: "程"}] },
      { full: "爭取權益", chars: [{show: "爭"}, {blank: "取", z: "ㄑㄩˇ"}, {show: "權"}, {show: "益"}] },
      { full: "或者", chars: [{blank: "或", z: "ㄏㄨㄛˋ"}, {blank: "者", z: "˙ㄓㄜ"}] },
      { full: "免洗筷", chars: [{blank: "免", z: "ㄇㄧㄢˇ"}, {show: "洗"}, {blank: "筷", z: "ㄎㄨㄞˋ"}] },
      { full: "梳妝打扮", chars: [{show: "梳"}, {show: "妝"}, {show: "打"}, {blank: "扮", z: "ㄅㄢˋ"}] },
      { full: "士兵", chars: [{show: "士"}, {blank: "兵", z: "ㄅㄧㄥ"}] },
      { full: "煮開水", chars: [{blank: "煮", z: "ㄓㄨˇ"}, {show: "開"}, {show: "水"}] },
      { full: "湯圓", chars: [{blank: "湯", z: "ㄊㄤ"}, {show: "圓"}] },
      { full: "家庭聚餐", chars: [{show: "家"}, {show: "庭"}, {show: "聚"}, {blank: "餐", z: "ㄘㄢ"}] },
      { full: "活潑", chars: [{show: "活"}, {blank: "潑", z: "ㄆㄛ"}] },
      { full: "抬起左手", chars: [{blank: "抬", z: "ㄊㄞˊ"}, {show: "起"}, {show: "左"}, {show: "手"}] },
      { full: "和尚", chars: [{show: "和"}, {blank: "尚", z: "ㄕㄤˋ"}] },
      { full: "座談會", chars: [{show: "座"}, {blank: "談", z: "ㄊㄢˊ"}, {show: "會"}] },
      { full: "身體健朗", chars: [{show: "身"}, {show: "體"}, {show: "健"}, {blank: "朗", z: "ㄌㄤˇ"}] },
      { full: "驚險刺激", chars: [{show: "驚"}, {show: "險"}, {blank: "刺", z: "ㄘˋ"}, {show: "激"}] },
      { full: "疑惑", chars: [{blank: "疑", z: "ㄧˊ"}, {blank: "惑", z: "ㄏㄨㄛˋ"}] },
      { full: "或許", chars: [{blank: "或", z: "ㄏㄨㄛˋ"}, {show: "許"}] },
      { full: "命令", chars: [{show: "命"}, {blank: "令", z: "ㄌㄧㄥˋ"}] },
      { full: "受邀參加", chars: [{show: "受"}, {blank: "邀", z: "ㄧㄠ"}, {show: "參"}, {show: "加"}] },
      { full: "康樂股長", chars: [{blank: "康", z: "ㄎㄤ"}, {show: "樂"}, {show: "股"}, {show: "長"}] },
      { full: "腸胃範圍", chars: [{blank: "腸", z: "ㄔㄤˊ"}, {show: "胃"}, {show: "範"}, {blank: "圍", z: "ㄨㄟˊ"}] },
      { full: "書套", chars: [{show: "書"}, {blank: "套", z: "ㄊㄠˋ"}] },
      { full: "不計較", chars: [{show: "不"}, {show: "計"}, {blank: "較", z: "ㄐㄧㄠˋ"}] },
      { full: "震央", chars: [{show: "震"}, {blank: "央", z: "ㄧㄤ"}] },
      { full: "咦！", chars: [{blank: "咦", z: "ㄧˊ"}, {show: "！"}] },
      { full: "後代子孫", chars: [{show: "後"}, {show: "代"}, {show: "子"}, {blank: "孫", z: "ㄙㄨㄣ"}] },
      { full: "人物肖像", chars: [{show: "人"}, {show: "物"}, {blank: "肖", z: "ㄒㄧㄠˋ"}, {show: "像"}] },
      { full: "憑空幻想", chars: [{show: "憑"}, {show: "空"}, {blank: "幻", z: "ㄏㄨㄢˋ"}, {show: "想"}] },
      { full: "變化", chars: [{show: "變"}, {blank: "化", z: "ㄏㄨㄚˋ"}] },
      { full: "保護", chars: [{show: "保"}, {blank: "護", z: "ㄏㄨˋ"}] },
      { full: "或許", chars: [{blank: "或", z: "ㄏㄨㄛˋ"}, {show: "許"}] },
      { full: "寺廟", chars: [{blank: "寺", z: "ㄙˋ"}, {show: "廟"}] },
      { full: "腸胃不適", chars: [{blank: "腸", z: "ㄔㄤˊ"}, {show: "胃"}, {show: "不"}, {blank: "適", z: "ㄕˋ"}] },
      { full: "擾亂秩序", chars: [{blank: "擾", z: "ㄖㄠˇ"}, {show: "亂"}, {show: "秩"}, {show: "序"}] },
      { full: "當地特產", chars: [{show: "當"}, {show: "地"}, {show: "特"}, {show: "產"}] },
      { full: "做夢", chars: [{show: "做"}, {blank: "夢", z: "ㄇㄥˋ"}] },
      { full: "瞪大眼睛", chars: [{blank: "瞪", z: "ㄉㄥˋ"}, {show: "大"}, {show: "眼"}, {show: "睛"}] },
      { full: "清除垃圾", chars: [{show: "清"}, {show: "除"}, {blank: "垃", z: "ㄌㄜˋ"}, {blank: "圾", z: "ㄙㄜˋ"}] },
      { full: "瓶裝水", chars: [{show: "瓶"}, {blank: "裝", z: "ㄓㄨㄤ"}, {show: "水"}] },
      { full: "維護", chars: [{blank: "維", z: "ㄨㄟˊ"}, {blank: "護", z: "ㄏㄨˋ"}] },
      { full: "某些", chars: [{blank: "某", z: "ㄇㄡˇ"}, {show: "些"}] },
      { full: "試圖逃跑", chars: [{show: "試"}, {blank: "圖", z: "ㄊㄨˊ"}, {show: "逃"}, {show: "跑"}] },
      { full: "內幕消息", chars: [{show: "內"}, {blank: "幕", z: "ㄇㄨˋ"}, {show: "消"}, {show: "息"}] }
    ],
    // === 成語練習 — 31 sentences (from docx) ===
    // The full L7-L12 idiom bank is shown as multiple-choice options for each question.
    idioms: [
      "適可而止", "將信將疑", "康莊大道", "故步自封", "鐵石心腸",
      "愁眉不展", "抬頭挺胸", "事半功倍", "紙上談兵", "胸有成竹", "疾言厲色", "不疾不徐",
      "赴湯蹈火", "化險為夷", "一舉兩得", "輕而易舉",
      "既往不咎", "一望無際", "不修邊幅", "按圖索驥",
      "烏雲密布", "豁然開朗", "開誠布公", "目瞪口呆", "維妙維肖", "無影無蹤",
      "朝令夕改", "抱頭鼠竄", "芒刺在背", "民不聊生", "夢寐以求"
    ],
    quiz_idiom_fill: [
      { sentence: "天空____,眼看就要下雨了。", answer: "烏雲密布" },
      { sentence: "他平常____,不太注重穿著。", answer: "不修邊幅" },
      { sentence: "爺爺____地在公園散步。", answer: "不疾不徐" },
      { sentence: "戰亂時代常常讓百姓____。", answer: "民不聊生" },
      { sentence: "努力讀書是通往成功的____。", answer: "康莊大道" },
      { sentence: "看到流浪狗受傷,他還是不理不睬,真是____。", answer: "鐵石心腸" },
      { sentence: "聽完老師的說明後,我頓時____。", answer: "豁然開朗" },
      { sentence: "老師____地責備不守秩序的學生。", answer: "疾言厲色" },
      { sentence: "他模仿老師說話的樣子,真是____。", answer: "維妙維肖" },
      { sentence: "我們____,終於找到目的地。", answer: "按圖索驥" },
      { sentence: "得獎後,他____地走上舞台。", answer: "抬頭挺胸" },
      { sentence: "玩遊戲要____,不能影響功課。", answer: "適可而止" },
      { sentence: "如果一直____,就不會進步。", answer: "故步自封" },
      { sentence: "他準備充分,因此回答問題時____。", answer: "胸有成竹" },
      { sentence: "只要你願意改過,我們就____。", answer: "既往不咎" },
      { sentence: "小偷看到警察後,立刻____。", answer: "抱頭鼠竄" },
      { sentence: "這道題目對他來說簡直____。", answer: "輕而易舉" },
      { sentence: "做事不能____,否則大家會很困擾。", answer: "朝令夕改" },
      { sentence: "大家互相合作,終於____。", answer: "化險為夷" },
      { sentence: "先做好計畫,才能____。", answer: "事半功倍" },
      { sentence: "小貓一下子跑得____。", answer: "無影無蹤" },
      { sentence: "做事情不能只會____。", answer: "紙上談兵" },
      { sentence: "朋友之間應該____地溝通。", answer: "開誠布公" },
      { sentence: "大家看到魔術表演後,全都____。", answer: "目瞪口呆" },
      { sentence: "每天走路上學,既運動又環保,真是____。", answer: "一舉兩得" },
      { sentence: "被老師一直盯著,我感到____。", answer: "芒刺在背" },
      { sentence: "聽完他的解釋後,我還是____。", answer: "將信將疑" },
      { sentence: "站在海邊,可以看到____的大海。", answer: "一望無際" },
      { sentence: "為了救人,消防員願意____。", answer: "赴湯蹈火" },
      { sentence: "他考試失利後,整天____。", answer: "愁眉不展" },
      { sentence: "這份禮物是我____的東西。", answer: "夢寐以求" }
    ],
    // === 課文練習 — multiple choice (from PDF) ===
    quiz_text: [
      // Section 1 (L7 — 做泡菜)
      { q: "「哪個語詞的意思是『模仿得精細巧妙,逼真傳神』?」", options: ["目瞪口呆", "雷電交加", "維妙維肖", "烏雲密布"], answer: 2 },
      { q: "下面哪個情況適合使用「貪吃」來描述?", options: ["吃多少拿多少", "大口大口的吃,完全就飽了", "只吃一些就吃飽了", "用餐時定時定量"], answer: 1 },
      { q: "誰說對「承認」的意思?", options: ["恩恩:供認", "誠誠:認識", "杰杰:接受", "彤彤:一種客氣的說法。"], answer: 0 },
      // Section 2
      { q: "下面哪個情況可以用「大胃王」來形容?", options: ["妹妹吃了半碗飯", "哥哥寫完五樣功課", "弟弟一口氣吃下五碗飯", "姐姐一下子讀完十本書。"], answer: 2 },
      { q: "「多運動★可以減重,★能舉兩得。」 ★中不適合填入?", options: ["一方面/一方面", "不但/還", "不管/都", "一方面/還"], answer: 1 },
      // Section 3 (L11 — 畫龍點睛)
      { q: "張僧繇一開始為什麼不幫龍畫上眼珠?對的打 V:", options: ["這些龍都是假的。", "畫上眼珠龍會飛走。", "想吸引大家的注意。"], answer: 1 },
      // Section 4
      { q: "「弟弟□鬼臉,逗得我呵呵笑。」 □中應填入?", options: ["粉", "扮", "紛", "盼"], answer: 3 },
      { q: "「不疾不徐」指速度如何?", options: ["適當", "很慢", "飛快", "悠快/悠慢。"], answer: 0 },
      { q: "有關「破折號」的敘述,哪個錯誤?", options: ["占一個格", "可以補充說明", "一條長直線", "有時代表聲音拉長。"], answer: 0 },
      { q: "課文中,小綠人的自我介紹不包含下面哪一個?", options: ["外貌描寫", "工作地點", "同伴介紹", "誕生原因。"], answer: 3 },
      { q: "下面哪一個語詞結構和「平平安安的回家」一樣?", options: ["輕輕柔柔的音樂", "匆匆忙忙地離開", "高高低低的樓房", "一方方花花綠綠的鈔票。"], answer: 1 },
      // Section 5 (L10 — 飛行員和小王子)
      { q: "飛行員最後畫了什麼東西,讓小王子很滿意?", options: ["帽子", "箱子", "袋子", "褲子。"], answer: 1 },
      { q: "飛行員說小王子能用「心」看畫,是因為小王子?", options: ["變成畫家", "運用想像力看畫", "看畫很細心", "有繪畫天分。"], answer: 1 },
      { q: "小王子想像中的羊正在做什麼事?", options: ["開心的吃草", "不停的打嗝", "對著小王子咩咩叫", "睡著還打呼。"], answer: 3 },
      { q: "小王子對於飛行員畫的羊有什麼要求?", options: ["希望是健康又活潑的羊", "希望羊的食量大", "希望是老公羊", "希望多畫一些羊毛。"], answer: 0 },
      // Section 6
      { q: "下面哪一個「倒」的注音和其他三個不同?", options: ["倒數", "倒貼", "倒閉", "倒退。"], answer: 2 },
      { q: "哪組語詞的意思相近?", options: ["集合/會合", "適量/過量", "心願/心情", "有益/無益。"], answer: 0 },
      { q: "「承認錯誤」中的「承」是什麼意思?", options: ["接續,繼續", "擔當,負責", "辨識,分別", "供認。"], answer: 3 },
      { q: "下面哪個不是環保的行為?", options: ["奶奶自備購物袋", "哥哥多買瓶裝水", "爸爸提高冷氣的溫度", "媽媽用空罐子澆花。"], answer: 1 },
      // Section 7
      { q: "哪個情況可用「溫柔」來描述?", options: ["氣急敗壞的爸爸", "笑容可掬的奶奶", "個性急的姐姐", "傷心難過的哥哥。"], answer: 1 },
      { q: "下面哪個「量」的讀音和其他三個不同?", options: ["數量", "商量", "測量", "考量。"], answer: 0 },
      { q: "課文中「我們家的小貓真厲害,會開罐子偷吃呢!」 指?", options: ["家中的寵物貓", "路上的野貓", "小斯的爸爸", "小斯。"], answer: 3 },
      { q: "「我□老師說明事情的經過。」 □中不適合填入?", options: ["被", "跟", "向", "對。"], answer: 0 },
      { q: "「承認」的相似詞是?", options: ["否認", "招認", "公認", "相認。"], answer: 1 },

      // === Section 8: 「心」字四字語詞 (IMG_5050) ===
      // Bank shown in each prompt so student knows the choices.
      { q: "「他上課時一直發呆,看起來_____。」 哪個成語最適合?<br><em>選項:ㄅ.心不在焉 ㄆ.心平氣和 ㄇ.心急如焚 ㄈ.心甘情願 ㄉ.心裡有數 ㄊ.心心相印</em>",
        options: ["心不在焉", "心平氣和", "心急如焚", "心心相印"], answer: 0 },
      { q: "「在外地工作的他看到家鄉發生嚴重土石流的新聞時,_____地聯絡家人。」 哪個成語最適合?<br><em>選項:ㄅ.心不在焉 ㄆ.心平氣和 ㄇ.心急如焚 ㄈ.心甘情願 ㄉ.心裡有數 ㄊ.心心相印</em>",
        options: ["心平氣和", "心急如焚", "心不在焉", "心裡有數"], answer: 1 },
      { q: "「他倆交往多年,_____,最近決定共結連理,一起組成家庭。」 哪個成語最適合?<br><em>選項:ㄅ.心不在焉 ㄆ.心平氣和 ㄇ.心急如焚 ㄈ.心甘情願 ㄉ.心裡有數 ㄊ.心心相印</em>",
        options: ["心甘情願", "心平氣和", "心心相印", "心裡有數"], answer: 2 },
      { q: "「過了兩個小時,弟弟終於放下手邊的玩具,_____地去寫功課。」 哪個成語最適合?<br><em>選項:ㄅ.心不在焉 ㄆ.心平氣和 ㄇ.心急如焚 ㄈ.心甘情願 ㄉ.心裡有數 ㄊ.心心相印</em>",
        options: ["心不在焉", "心心相印", "心急如焚", "心甘情願"], answer: 3 },
      { q: "「詳細比對線索後,警方對這件事情的真相已經_____。」 哪個成語最適合?<br><em>選項:ㄅ.心不在焉 ㄆ.心平氣和 ㄇ.心急如焚 ㄈ.心甘情願 ㄉ.心裡有數 ㄊ.心心相印</em>",
        options: ["心心相印", "心甘情願", "心裡有數", "心平氣和"], answer: 2 },
      { q: "「他的修養很好,即便被人冒犯,依然能夠_____地和對方溝通。」 哪個成語最適合?<br><em>選項:ㄅ.心不在焉 ㄆ.心平氣和 ㄇ.心急如焚 ㄈ.心甘情願 ㄉ.心裡有數 ㄊ.心心相印</em>",
        options: ["心平氣和", "心心相印", "心不在焉", "心急如焚"], answer: 0 },

      // === Section 9: 量詞填空 (IMG_5052) ===
      // Short passage about a 大胃王比賽.
      { q: "「這一_____大胃王比賽競爭激烈。」 量詞應填入?",
        options: ["場", "隻", "位", "分"], answer: 0 },
      { q: "「每一_____選手必須在十分鐘內吃完。」 量詞應填入?",
        options: ["場", "隻", "位", "分"], answer: 2 },
      { q: "「選手必須在十_____鐘內吃完一隻烤雞。」 量詞應填入?",
        options: ["場", "隻", "位", "分"], answer: 3 },
      { q: "「吃完一_____烤雞、三十根熱狗。」 量詞應填入?",
        options: ["場", "隻", "位", "分"], answer: 1 },

      // === Section 10: 動作詞代替閱讀短文 (IMG_5051) ===
      // Bank: ㄅ.抓了抓頭 ㄆ.瞧了又瞧 ㄇ.豎起大拇指 ㄉ.打量
      { q: "短文:「我在路上撿到錢包,打開裡面確認、_____。」 畫線處的動作是?<br><em>選項:ㄅ.抓了抓頭 ㄆ.瞧了又瞧 ㄇ.豎起大拇指 ㄉ.打量</em>",
        options: ["抓了抓頭", "瞧了又瞧", "豎起大拇指", "打量"], answer: 3 },
      { q: "短文:「打開裡面確認、打量,_____。」 接下來的動作是?<br><em>選項:ㄅ.抓了抓頭 ㄆ.瞧了又瞧 ㄇ.豎起大拇指 ㄉ.打量</em>",
        options: ["瞧了又瞧", "抓了抓頭", "打量", "豎起大拇指"], answer: 0 },
      { q: "短文:「都找不到主人的資料,只好將錢包拿去警局,警察稱讚_____表揚我。」 畫線處的動作是?<br><em>選項:ㄅ.抓了抓頭 ㄆ.瞧了又瞧 ㄇ.豎起大拇指 ㄉ.打量</em>",
        options: ["打量", "豎起大拇指", "抓了抓頭", "瞧了又瞧"], answer: 1 },
      { q: "短文:「我不好意思地_____道謝,臉都紅了。」 畫線處的動作是?<br><em>選項:ㄅ.抓了抓頭 ㄆ.瞧了又瞧 ㄇ.豎起大拇指 ㄉ.打量</em>",
        options: ["瞧了又瞧", "豎起大拇指", "打量", "抓了抓頭"], answer: 3 }
    ]
  }
};

/* ================================================================
   中文 FLOW
   ================================================================ */

function startCnLesson() {
  state.mode = 'cn_lesson';
  const u = CN_UNITS[state.currentUnit];
  let html = `<strong>📜 ${u.title}: ${u.subtitle}</strong> ${u.emoji}`;
  html += `<div class='cn-lesson-content'><p><em>🔑 學習目標:</em> <strong>${u.bigQuestion}</strong></p></div>`;
  html += `<div class='cn-lesson-content'><h4>本課語詞 (${u.vocab.length} 個)</h4>`;
  u.vocab.forEach(v => {
    html += `<div class='cn-vocab-card'><strong>${v.w}</strong> <span class='cn-zhuyin'>(${v.z})</span></div>`;
  });
  html += `</div>`;
  html += `<br><em>+2 Honour 認真學習!</em> ✠`;
  botSay(html);
  addStars(2);
  setTimeout(() => {
    botSay(
      "<em>讀完了本課的語詞,要不要來考考自己?</em> ⚔",
      [
        { label: "🔑 詞語複習 Vocab Review", onClick: () => { userSay("詞語複習"); startCnVocab(); } },
        { label: "✍ 看注音寫國字 Fill in 國字", onClick: () => { userSay("看注音寫國字"); startCnQuiz('fill_char'); } },
        { label: "📖 選擇另一課", onClick: () => { userSay("選擇另一課"); showUnitMenu(); } },
        { label: "🏛 回到主選單", onClick: () => { userSay("回到主選單"); showSectionMenu(); } }
      ]
    );
  }, 400);
}

function startCnIdiomQuiz() {
  state.mode = 'cn_idiom_quiz';
  const u = CN_UNITS[state.currentUnit];
  if (!u.quiz_idiom_fill || !u.quiz_idiom_fill.length) {
    botSay("⚠ 這一課的成語練習尚未準備好。");
    return;
  }
  state.cnIdiomIndex = 0;
  state.cnIdiomCorrect = 0;
  // Shuffle questions
  state.cnIdiomPool = u.quiz_idiom_fill.slice().sort(() => Math.random() - 0.5);
  // Show 成語 bank
  let html = `<strong>📜 ${u.title}: ${u.subtitle} — 成語填空練習</strong>`;
  html += `<div class='cn-idiom-bank'><div class='cn-idiom-bank-title'>本課成語:</div>`;
  u.idioms.forEach(idiom => {
    html += `<span class='cn-idiom-chip'>${idiom}</span>`;
  });
  html += `</div>`;
  html += `<div class='cn-write-instruction'>📝 共 ${state.cnIdiomPool.length} 題。讀句子,選出最合適的成語填入空格。</div>`;
  botSay(html);
  setTimeout(askCnIdiomQuestion, 500);
}

function askCnIdiomQuestion() {
  const u = CN_UNITS[state.currentUnit];
  const item = state.cnIdiomPool[state.cnIdiomIndex];
  let qHTML = `<strong>第 ${state.cnIdiomIndex + 1} / ${state.cnIdiomPool.length} 題</strong><br><br>`;
  // Replace ____ with a visible blank
  const sentenceHTML = item.sentence.replace(/_{2,}/, "<span class='cn-idiom-blank'>＿＿＿＿</span>");
  qHTML += `<div class='cn-idiom-sentence'>${sentenceHTML}</div>`;

  // Build the option list. When the idiom bank is small (per-lesson, 4-7 items)
  // show them all. When it's large (e.g. 總複習 has 31), show only 4 choices:
  // the correct answer + 3 random distractors, shuffled.
  let optionIdioms;
  const MAX_OPTIONS = 4;
  if (u.idioms.length <= MAX_OPTIONS) {
    optionIdioms = u.idioms.slice();
  } else {
    const distractors = u.idioms.filter(i => i !== item.answer).sort(() => Math.random() - 0.5).slice(0, MAX_OPTIONS - 1);
    optionIdioms = [item.answer, ...distractors].sort(() => Math.random() - 0.5);
  }

  const opts = optionIdioms.map(idiom => ({
    label: idiom,
    onClick: (btn) => handleCnIdiomAnswer(idiom, btn)
  }));
  botSay(qHTML, opts);
}

function handleCnIdiomAnswer(chosen, btn) {
  const item = state.cnIdiomPool[state.cnIdiomIndex];
  const allBtns = btn.parentElement.querySelectorAll('button');
  allBtns.forEach(b => b.disabled = true);

  const correct = (chosen === item.answer);
  userSay(chosen);

  if (correct) {
    btn.classList.add('correct');
    state.cnIdiomCorrect++;
    addStars(1);
    const filledSentence = item.sentence.replace(/_{2,}/, "「<strong>" + item.answer + "</strong>」");
    botSay(`<div class='feedback-correct'>✠ <strong>答對了!</strong> ${filledSentence}<br><em>+1 Honour</em></div>`);
  } else {
    btn.classList.add('wrong');
    // Find and mark the correct button
    allBtns.forEach(b => {
      if (b.textContent.trim() === item.answer) b.classList.add('correct');
    });
    const filledSentence = item.sentence.replace(/_{2,}/, "「<strong>" + item.answer + "</strong>」");
    botSay(`<div class='feedback-wrong'>⚔ <strong>正確答案是「${item.answer}」。</strong><br>${filledSentence}<br><em>別氣餒,繼續努力!</em></div>`);
  }
  logAnswer(correct, item.sentence, chosen, item.answer, "", CN_UNITS[state.currentUnit].idioms);

  state.cnIdiomIndex++;
  setTimeout(() => {
    if (state.cnIdiomIndex < state.cnIdiomPool.length) {
      askCnIdiomQuestion();
    } else {
      finishCnIdiomQuiz();
    }
  }, 1000);
}

function finishCnIdiomQuiz() {
  const u = CN_UNITS[state.currentUnit];
  const total = state.cnIdiomPool.length;
  const got = state.cnIdiomCorrect;
  const bonus = (got === total) ? 3 : (got >= total - 1) ? 2 : (got >= total / 2) ? 1 : 0;
  let msg;
  if (got === total) {
    msg = `✠✠✠ <strong>滿分太棒了!</strong> ${total} 題全部答對! <em>成語高手!</em> 額外 +${bonus} Honour!`;
  } else if (got >= total - 1) {
    msg = `⚔ <strong>非常好!</strong> 答對了 ${got} / ${total} 題。額外 +${bonus} Honour!`;
  } else if (got >= total / 2) {
    msg = `✠ <strong>不錯喔!</strong> 答對 ${got} / ${total} 題。額外 +${bonus} Honour。 <em>再多複習一下吧!</em>`;
  } else {
    msg = `你答對 ${got} / ${total} 題。 <em>沒關係,再多讀幾次成語,一定可以!</em>`;
  }
  if (bonus) addStars(bonus);

  botSay(
    msg,
    [
      { label: "🎲 再考一次", onClick: () => { userSay("再考一次"); startCnIdiomQuiz(); } },
      { label: "🔑 查看生字", onClick: () => { userSay("查看生字"); startCnVocab(); } },
      { label: "✍ 國字填寫", onClick: () => { userSay("國字填寫"); startCnWriteChar(); } },
      { label: "📖 選擇另一課", onClick: () => { userSay("選擇另一課"); showUnitMenu(); } },
      { label: "🏛 回到主選單", onClick: () => { userSay("回到主選單"); showSectionMenu(); } }
    ]
  );
}

// Renders zhuyin (注音) inside a write-char cell: bopomofo letters stacked
// vertically, with the tone mark (ˊ ˇ ˋ ˙) on the right side of the column.
// First tone has no mark.
function formatZhuyinHtml(z) {
  if (!z) return '';
  const toneMarks = ['ˊ', 'ˇ', 'ˋ', '˙'];
  let base = z;
  let tone = '';
  // Tone mark can appear at any position; strip the (single) tone char out.
  for (const m of toneMarks) {
    if (base.indexOf(m) !== -1) {
      tone = m;
      base = base.replace(m, '');
      break;
    }
  }
  const baseHtml = `<span class='cn-write-z-base'>${base}</span>`;
  const toneHtml = tone ? `<span class='cn-write-z-tone'>${tone}</span>` : '';
  return `<span class='cn-write-z'>${baseHtml}${toneHtml}</span>`;
}

// === 總複習 (Review) — content comes directly from the review unit ===

function startCnReviewWriteChar() {
  // Just delegate to the regular write-char flow; the review unit already
  // has its own quiz_write_char from the L7-L12 worksheet.
  startCnWriteChar();
}

function startCnReviewIdiomQuiz() {
  // The review unit has quiz_idiom_fill (31 sentences) + idioms bank (31).
  startCnIdiomQuiz();
}

// 課文練習 — multiple-choice over key passages/usage from L7-L12.
// Reuses the cn-idiom-quiz UI: question + 4 option buttons, immediate feedback.
function startCnReviewLessons() {
  state.mode = 'cn_text_quiz';
  const u = CN_UNITS[state.currentUnit];
  if (!u || !Array.isArray(u.quiz_text) || !u.quiz_text.length) {
    botSay("⚠ 課文練習尚未準備好。");
    return;
  }
  state.cnTextIndex = 0;
  state.cnTextCorrect = 0;
  state.cnTextPool = u.quiz_text.slice().sort(() => Math.random() - 0.5);

  let html = `<strong>📖 ${u.title}: ${u.subtitle} — 課文練習</strong>`;
  html += `<div class='cn-write-instruction'>📝 共 ${state.cnTextPool.length} 題。讀題目,選出最合適的答案。</div>`;
  botSay(html);
  setTimeout(askCnTextQuestion, 500);
}

function askCnTextQuestion() {
  const item = state.cnTextPool[state.cnTextIndex];
  const total = state.cnTextPool.length;
  const num = state.cnTextIndex + 1;

  const opts = item.options.map((opt, i) => ({
    label: `${String.fromCharCode(65 + i)}. ${opt}`,
    onClick: (btn) => handleCnTextAnswer(i, item, btn)
  }));

  let html = `<strong>第 ${num} / ${total} 題</strong><br>${item.q}`;
  botSay(html, opts);
}

function handleCnTextAnswer(chosen, item, btn) {
  const allBtns = btn.parentElement.querySelectorAll('button');
  allBtns.forEach(b => b.disabled = true);

  const correct = (chosen === item.answer);
  userSay(item.options[chosen]);

  if (correct) {
    btn.classList.add('correct');
    state.cnTextCorrect++;
    addStars(1);
    botSay(`<div class='feedback-correct'>✠ <strong>答對了!</strong> 正確答案是「${item.options[item.answer]}」。<br><em>+1 Honour</em></div>`);
  } else {
    btn.classList.add('wrong');
    allBtns.forEach(b => {
      // mark correct button
      const text = b.textContent.trim();
      if (text.endsWith('. ' + item.options[item.answer]) || text === item.options[item.answer]) {
        b.classList.add('correct');
      }
    });
    botSay(`<div class='feedback-wrong'>⚔ <strong>正確答案是「${item.options[item.answer]}」。</strong><br><em>別氣餒,繼續努力!</em></div>`);
  }
  logAnswer(correct, item.q, item.options[chosen], item.options[item.answer], "");

  state.cnTextIndex++;
  setTimeout(() => {
    if (state.cnTextIndex < state.cnTextPool.length) {
      askCnTextQuestion();
    } else {
      finishCnTextQuiz();
    }
  }, 1000);
}

function finishCnTextQuiz() {
  const total = state.cnTextPool.length;
  const got = state.cnTextCorrect;
  const bonus = (got === total) ? 3 : (got >= total - 1) ? 2 : (got >= total / 2) ? 1 : 0;
  let msg;
  if (got === total) {
    msg = `✠✠✠ <strong>滿分太棒了!</strong> ${total} 題全部答對! 額外 +${bonus} Honour!`;
  } else if (got >= total / 2) {
    msg = `⚔ <strong>不錯喔!</strong> 答對了 ${got} / ${total} 題。額外 +${bonus} Honour!`;
  } else {
    msg = `你答對 ${got} / ${total} 題。 <em>再多複習課文,一定可以進步!</em>`;
  }
  if (bonus) addStars(bonus);
  botSay(msg, [
    { label: "📖 再做一次 課文練習", onClick: () => { userSay("再做一次"); startCnReviewLessons(); } },
    { label: "✍ 國字練習 (L7-L12)", onClick: () => { userSay("國字練習"); startCnReviewWriteChar(); } },
    { label: "📜 成語練習 (L7-L12)", onClick: () => { userSay("成語練習"); startCnReviewIdiomQuiz(); } },
    { label: "📖 選擇另一課", onClick: () => { userSay("選擇另一課"); showUnitMenu(); } },
    { label: "🏛 回到主選單", onClick: () => { userSay("回到主選單"); showSectionMenu(); } }
  ]);
}

function startCnWriteChar() {
  state.mode = 'cn_write_char';
  const u = CN_UNITS[state.currentUnit];
  if (!u.quiz_write_char || !u.quiz_write_char.length) {
    botSay("⚠ 這一課的國字填寫練習尚未準備好。");
    return;
  }
  let html = `<strong>✍ ${u.title}: ${u.subtitle} — 國字填寫練習</strong>`;
  html += `<div class='cn-write-instruction'>📝 請在紙上寫出空格中的<strong>國字</strong>。注音是提示。完成後按下「查看答案」對照。</div>`;
  html += `<div class='cn-write-grid'>`;
  u.quiz_write_char.forEach((item, idx) => {
    html += `<div class='cn-write-row'><span class='cn-write-num'>${idx + 1}.</span>`;
    item.chars.forEach(c => {
      if (c.show) {
        html += `<span class='cn-write-cell cn-write-show'>${c.show}</span>`;
      } else {
        html += `<span class='cn-write-cell cn-write-blank'>${formatZhuyinHtml(c.z)}</span>`;
      }
    });
    html += `</div>`;
  });
  html += `</div>`;
  botSay(html);
  setTimeout(() => {
    botSay(
      "<em>寫完了嗎?準備好對答案了嗎?</em>",
      [
        { label: "✓ 查看答案 Show Answer Key", onClick: () => { userSay("查看答案"); showCnWriteCharAnswers(); } },
        { label: "📖 選擇另一課", onClick: () => { userSay("選擇另一課"); showUnitMenu(); } },
        { label: "🏛 回到主選單", onClick: () => { userSay("回到主選單"); showSectionMenu(); } }
      ]
    );
  }, 400);
}

function showCnWriteCharAnswers() {
  const u = CN_UNITS[state.currentUnit];
  let html = `<strong>✠ ${u.title}: ${u.subtitle} — 答案</strong>`;
  html += `<div class='cn-write-grid'>`;
  u.quiz_write_char.forEach((item, idx) => {
    html += `<div class='cn-write-row'><span class='cn-write-num'>${idx + 1}.</span>`;
    item.chars.forEach(c => {
      if (c.show) {
        html += `<span class='cn-write-cell cn-write-show'>${c.show}</span>`;
      } else {
        html += `<span class='cn-write-cell cn-write-answer'>${c.blank}${formatZhuyinHtml(c.z)}</span>`;
      }
    });
    html += ` <span class='cn-write-full'>= ${item.full}</span></div>`;
  });
  html += `</div>`;
  html += `<br><em>+2 Honour 完成練習!</em> ✠`;
  botSay(html);
  addStars(2);
  setTimeout(() => {
    botSay(
      "<em>需要再練習一次嗎?</em>",
      [
        { label: "✍ 再做一次", onClick: () => { userSay("再做一次"); startCnWriteChar(); } },
        { label: "🔑 查看生字", onClick: () => { userSay("查看生字"); startCnVocab(); } },
        { label: "📖 選擇另一課", onClick: () => { userSay("選擇另一課"); showUnitMenu(); } },
        { label: "🏛 回到主選單", onClick: () => { userSay("回到主選單"); showSectionMenu(); } }
      ]
    );
  }, 400);
}

function startCnVocab() {
  state.mode = 'cn_vocab';
  const u = CN_UNITS[state.currentUnit];
  let html = `<strong>🔑 ${u.title}: ${u.subtitle} — 本課生字 (${u.vocab.length} 個)</strong>`;
  u.vocab.forEach(v => {
    html += `<div class='cn-vocab-card'><strong>${v.w}</strong> <span class='cn-zhuyin'>(${v.z})</span></div>`;
  });
  html += `<br><em>+1 Honour 認真背誦!</em> ✠`;
  botSay(html);
  addStars(1);
  setTimeout(() => {
    botSay(
      "<em>看完了生字,接下來想做什麼?</em>",
      [
        { label: "📖 選擇另一課", onClick: () => { userSay("選擇另一課"); showUnitMenu(); } },
        { label: "🏛 回到主選單", onClick: () => { userSay("回到主選單"); showSectionMenu(); } }
      ]
    );
  }, 400);
}

function buildCnQuizPool(quizType) {
  const u = CN_UNITS[state.currentUnit];
  let pool = [];
  if (quizType === 'fill_char') {
    pool = (u.quiz_fill_char || []).map(item => ({ ...item, _kind: 'mc' }));
  }
  // Shuffle and take up to 15
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, Math.min(15, pool.length));
}

function startCnQuiz(quizType) {
  state.mode = 'cn_quiz';
  state.quizIndex = 0;
  state.quizCorrect = 0;
  state.cnQuizType = quizType;
  state.cnQuizPool = buildCnQuizPool(quizType);
  const u = CN_UNITS[state.currentUnit];
  const labels = { fill_char: '看注音寫國字' };
  botSay(
    `<strong>⚔ ${u.title} — ${labels[quizType] || '測驗'}</strong><br>` +
    `<em>共 ${state.cnQuizPool.length} 題。看注音,選出正確的國字!</em>`
  );
  setTimeout(askCnQuestion, 500);
}

function askCnQuestion() {
  const item = state.cnQuizPool[state.quizIndex];
  let qHTML = `<strong>第 ${state.quizIndex + 1} / ${state.cnQuizPool.length} 題</strong><br><br>${item.q}`;
  const opts = item.options.map((opt, idx) => ({
    label: opt,
    onClick: (btn) => handleCnAnswer(idx, btn)
  }));
  botSay(qHTML, opts);
}

function handleCnAnswer(chosen, btn) {
  const item = state.cnQuizPool[state.quizIndex];
  const allBtns = btn.parentElement.querySelectorAll('button');
  allBtns.forEach(b => b.disabled = true);

  const correct = (chosen === item.answer);
  const chosenLabel = item.options[chosen];
  const truthLabel = item.options[item.answer];
  userSay(chosenLabel);

  if (correct) {
    btn.classList.add('correct');
    state.quizCorrect++;
    addStars(1);
    botSay(`<div class='feedback-correct'>✠ <strong>答對了!</strong> 正確語詞:「<strong>${item.full}</strong>」。 ${item.explain}<br><em>+1 Honour</em></div>`);
  } else {
    btn.classList.add('wrong');
    allBtns[item.answer].classList.add('correct');
    botSay(
      `<div class='feedback-wrong'>⚔ <strong>正確答案是「${truthLabel}」。</strong><br>` +
      `完整語詞:「<strong>${item.full}</strong>」。 ${item.explain}<br><em>別氣餒,繼續努力!</em></div>`
    );
  }
  logAnswer(correct, item.q, chosenLabel, truthLabel, item.explain, item.options);

  state.quizIndex++;
  setTimeout(() => {
    if (state.quizIndex < state.cnQuizPool.length) {
      askCnQuestion();
    } else {
      finishCnQuiz();
    }
  }, 900);
}

function finishCnQuiz() {
  const u = CN_UNITS[state.currentUnit];
  const total = state.cnQuizPool.length;
  const got = state.quizCorrect;
  const bonus = (got === total) ? 3 : (got >= total - 1) ? 2 : (got >= total / 2) ? 1 : 0;
  let msg;
  if (got === total) {
    msg = `✠✠✠ <strong>滿分太棒了!</strong> ${total} 題全部答對! <em>你真厲害!</em> 額外 +${bonus} Honour!`;
  } else if (got >= total - 1) {
    msg = `⚔ <strong>非常好!</strong> 答對了 ${got} / ${total} 題。額外 +${bonus} Honour!`;
  } else if (got >= total / 2) {
    msg = `✠ <strong>不錯喔!</strong> 答對 ${got} / ${total} 題。額外 +${bonus} Honour。 <em>再多複習一下吧!</em>`;
  } else {
    msg = `你答對 ${got} / ${total} 題。 <em>沒關係,再多讀幾次語詞,一定可以!</em>`;
  }
  if (bonus) addStars(bonus);

  botSay(
    msg,
    [
      { label: "🎲 再考一次", onClick: () => { userSay("再考一次"); startCnQuiz(state.cnQuizType); } },
      { label: "📜 回到課文", onClick: () => { userSay("回到課文"); startCnLesson(); } },
      { label: "🔑 詞語複習", onClick: () => { userSay("詞語複習"); startCnVocab(); } },
      { label: "📖 選擇另一課", onClick: () => { userSay("選擇另一課"); showUnitMenu(); } },
      { label: "🏛 回到主選單", onClick: () => { userSay("回到主選單"); showSectionMenu(); } }
    ]
  );
}
