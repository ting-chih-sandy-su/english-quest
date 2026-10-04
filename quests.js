// quests.js - 專屬題庫庫存檔（未來每週更新只改這裡即可！）
const ALL_QUESTS = [
  // ─── 🦅 Unit 35 烏鴉大冒險 (全 36 字拆為 4 階段) ───
  {
    id: "u35_p1",
    label: "Unit 35 (1) 聰明動物篇",
    words: [
      { en: "intelligent", display: "in · tel · li · gent", zh: "聰明的", audio: "", distractor: "diligent", hint: "前綴 in- 開頭；注意中間短母音 /ɛ/ 與結尾 -gent 軟音 /dʒənt/。" },
      { en: "animal", display: "an · i · mal", zh: "動物", audio: "", distractor: "enamel", hint: "開頭 a 發蝴蝶音 /æ/；注意字尾 -mal 為弱化母音 /məl/。" },
      { en: "ape", display: "ape", zh: "猿；人猿", audio: "", distractor: "cape", hint: "字首 a 發長母音 /e/；結尾 p 輕聲爆破釋放。" },
      { en: "crow", display: "cr · ow", zh: "烏鴉", audio: "", distractor: "glow", hint: "雙子音群 /kr/ 不是 /gl/；ow 發雙母音 /o/。" },
      { en: "among", display: "a · mong", zh: "在…之中", audio: "", distractor: "along", hint: "字首 a- 為弱母音 /ə/；mong 發短母音 /ʌ/ 帶鼻音 /ŋ/。" },
      { en: "memory", display: "mem · o · ry", zh: "記憶(力)", audio: "", distractor: "melody", hint: "首音節 mem- 短母音 /ɛ/；注意中間是 /m/ 不是 /l/。" },
      { en: "be able to", display: "be · a · ble · to", zh: "能夠", audio: "", distractor: "be table to", hint: "able 開頭發長母音 /e/；-ble 帶舌尖齒齦邊音 /bəl/。" },
      { en: "imagine", display: "i · mag · ine", zh: "想像", audio: "", distractor: "examine", hint: "重音在第二音節 -mag- /mædʒ/；結尾 -ine 發短母音 /ɪn/。" },
      { en: "solve", display: "solve", zh: "解決；解開", audio: "", distractor: "evolve", hint: "開頭無聲子音 /s/；母音 o 發開口短母音 /ɑ/ 帶舌邊音 /lv/。" }
    ],
    sentence: { 
      en: "When we think of intelligent animals, we usually think dogs, cats, and apes. But a crow is among the most intelligent animals in the world.", 
      zh: "當我們想到聰明的動物時，通常會想到狗、貓和猿類。但烏鴉是世界上最聰明的動物之一。",
      audio: "audio/crow_u35.mp3" 
    }
  },
  {
    id: "u35_p2",
    label: "Unit 35 (2) 工具與覓食篇",
    words: [
      { en: "problem", display: "prob · lem", zh: "問題；難題", audio: "", distractor: "program", hint: "雙子音群 pr- 開頭；第一音節 prob- 發短母音 /ɑ/。" },
      { en: "tool", display: "tool", zh: "工具", audio: "", distractor: "pool", hint: "開頭是舌尖齒齦音 /t/ 不是雙唇爆破音 /p/；oo 發長母音 /u/。" },
      { en: "tiny", display: "ti · ny", zh: "極小的", audio: "", distractor: "shiny", hint: "開頭是清子音 /t/ 不是摩擦音 /ʃ/；第一音節 ti- 發雙母音 /aɪ/。" },
      { en: "stick", display: "stick", zh: "樹枝；棍子", audio: "", distractor: "stack", hint: "雙子音群 st- 開頭；母音 i 發短母音 /ɪ/，不是 /æ/。" },
      { en: "get at", display: "get · at", zh: "構到；取得", audio: "", distractor: "get out", hint: "短母音 e 發 /ɛ/；at 結尾接短母音 /æt/，注意連音讀法。" },
      { en: "tasty", display: "tas · ty", zh: "美味的", audio: "", distractor: "nasty", hint: "字首是清子音 /t/ 不是鼻音 /n/；a 發長母音 /e/。" },
      { en: "insect", display: "in · sect", zh: "昆蟲", audio: "", distractor: "inject", hint: "第二音節 -sect 發清子音 /s/ 不是擦濁音 /dʒ/。" },
      { en: "normal", display: "nor · mal", zh: "正常的", audio: "", distractor: "formal", hint: "字首是鼻音 /n/ 不是唇齒音 /f/；nor- 發 /nɔr/。" },
      { en: "pay attention to", display: "pay · at · ten · tion · to", zh: "注意；留意", audio: "", distractor: "pay intention to", hint: "attention 重音在第二音節 -ten-；-tion 發摩擦音 /ʃən/。" }
    ],
    sentence: { 
      en: "Crows have memories and they are able to imagine the future. A crow can hold a tiny stick in its mouth and use it to get at tasty insects.", 
      zh: "烏鴉有記憶力，而且能夠想像未來。烏鴉能用嘴叼著小樹枝，並用它來取得美味的昆蟲。",
      audio: "audio/crow_u35.mp3" 
    }
  },
  {
    id: "u35_p3",
    label: "Unit 35 (3) 科學驗證篇",
    words: [
      { en: "though", display: "though", zh: "不過(句尾)", audio: "", distractor: "thought", hint: "咬舌濁音 /ð/ 開頭；結尾 gh 不發音，母音發雙母音 /o/。" },
      { en: "remember", display: "re · mem · ber", zh: "記得", audio: "", distractor: "resemble", hint: "重音在第二音節 -mem-；字尾 -ber 發輕濁音 /bɚ/。" },
      { en: "scientist", display: "sci · en · tist", zh: "科學家", audio: "", distractor: "dentist", hint: "sci- 發雙母音 /saɪ/；字尾 -tist 帶舌尖齒齦音群 /tɪst/。" },
      { en: "tell", display: "tell", zh: "分辨；判斷", audio: "", distractor: "yell", hint: "字首是舌尖爆破音 /t/ 不是半母音 /j/；e 發短母音 /ɛ/。" },
      { en: "whether", display: "wheth · er", zh: "是否", audio: "", distractor: "weather", hint: "注意中間 -th- 發咬舌濁音 /ð/；兩字發音同音字異形。" },
      { en: "friendly", display: "friend · ly", zh: "友善的", audio: "", distractor: "freshly", hint: "雙子音群 fr- 開頭；ie 發短母音 /ɛ/，中間帶濁子音 /d/。" },
      { en: "test", display: "test", zh: "測試；測驗", audio: "", distractor: "text", hint: "母音 e 發短母音 /ɛ/；字尾子音群是 -st 不是 -kst。" },
      { en: "compared to", display: "com · pared · to", zh: "與…相比", audio: "", distractor: "prepared to", hint: "字首 com- 為弱母音 /kəm/；-pared 發雙母音帶捲舌 /pɛrd/。" },
      { en: "puzzle", display: "puz · zle", zh: "謎題；拼圖", audio: "", distractor: "muzzle", hint: "雙唇爆破音 /p/ 開頭不是鼻音 /m/；u 發短母音 /ʌ/。" }
    ],
    sentence: { 
      en: "Crows can remember human faces. Some scientists believe that they can even tell other crows whether a human is friendly or not.", 
      zh: "烏鴉能記得人類的臉。有些科學家相信牠們甚至能告訴其他烏鴉某個人類是否友善。",
      audio: "audio/crow_u35.mp3" 
    }
  },
  {
    id: "u35_p4",
    label: "Unit 35 (4) 終極讚美篇",
    words: [
      { en: "just as well as", display: "just · as · well · as", zh: "和…一樣好", audio: "", distractor: "just as good as", hint: "well 為副詞修飾動詞動作；注意 as...as 兩端弱讀連音。" },
      { en: "stage", display: "stage", zh: "階段", audio: "", distractor: "state", hint: "雙子音 st- 開頭；a 發長母音 /e/；字尾 -ge 發擦濁音 /dʒ/。" },
      { en: "within", display: "with · in", zh: "在…之內", audio: "", distractor: "without", hint: "由 with + in 複合；中間 -th- 發咬舌濁音 /ð/。" },
      { en: "be sure to", display: "be · sure · to", zh: "務必；一定要", audio: "", distractor: "be pure to", hint: "sure 開頭發無聲摩擦音 /ʃ/；母音發滑音 /ʊr/。" },
      { en: "bird brain", display: "bird · brain", zh: "笨蛋", audio: "", distractor: "third brain", hint: "bird 帶捲舌母音 /ɝ/；brain 雙子音群 br- 搭配長母音 /e/。" },
      { en: "compliment", display: "com · pli · ment", zh: "讚美(語)", audio: "", distractor: "complement", hint: "首音節 com- 發短母音 /ɑ/；-pli- 發輕母音 /lə/；結尾 -ment。" },
      { en: "notice", display: "no · tice", zh: "注意到；察覺", audio: "", distractor: "native", hint: "第一音節 no- 發雙母音 /o/；字尾 -tice 發短母音清音 /tɪs/。" },
      { en: "likely", display: "like · ly", zh: "很可能的", audio: "", distractor: "lively", hint: "首音節 like- 發雙母音 /aɪ/ 帶無聲爆破音 /k/；字尾加 -ly。" },
      { en: "trick", display: "trick", zh: "欺騙；詭計", audio: "", distractor: "track", hint: "雙子音群 tr- 開頭；母音 i 發短母音 /ɪ/ 不是蝴蝶音 /æ/。" }
    ],
    sentence: { 
      en: "They found that crows were able to solve a puzzle just as well as a seven-year-old human. So if anyone ever calls you 'bird brain,' be sure to thank them for the compliment.", 
      zh: "他們發現烏鴉解謎的能力和七歲小孩一樣好。所以如果有人叫你「鳥腦袋」，一定要謝謝他的讚美！",
      audio: "audio/crow_u35.mp3" 
    }
  },
  // ─── 🌧️ Week 4 (歷史保留複習) ───
];
