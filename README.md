```markdown
# 🎧 ISA English Phonics Weekly Challenge: 每週聽力解碼任務系統

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-blue.svg)](https://pages.github.com/)
[![Web Audio API](https://img.shields.io/badge/Audio-Web%20Audio%20API-green.svg)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
[![Google Apps Script](https://img.shields.io/badge/Backend-Google%20Apps%20Script-red.svg)](https://developers.google.com/apps-script)

專為英語學習者設計的**互動式語音盲測特訓系統**。結合自然發音音素解析、程序化神寵收集矩陣，以及 Google 試算表（Google Sheets）即時後端同步，兼具學習成效驗收與遊戲化激勵機制。

---

## 📖 目錄

- [專案特色與實用價值](#-專案特色與實用價值)
- [系統架構與檔案清單](#-系統架構與檔案清單)
- [快速上手指南](#-快速上手指南)
  - [本機預覽與執行](#本機預覽與執行)
  - [部署至 GitHub Pages](#部署至-github-pages)
  - [Google 試算表後端串接](#google-試算表後端串接)
- [題庫管理與擴充](#-題庫管理與擴充)
- [常見問題與支援管道](#-常見問題與支援管道)
- [維護者與貢獻指南](#-維護者與貢獻指南)
- [授權條款](#-授權條款)

---

## 🌟 專案特色與實用價值

- **音素盲測（Phonics Decoding）**：透過雙重強制聆聽解鎖機制，阻斷學童對文字視覺的依賴，強化對純聲音（Phonemes）與長短母音的直覺反射。
- **篇章結構可視化（Paragraph Highlighting）**：完整展開單元全篇長文，切換關卡時以即時螢光筆定位段落，解決學生「只認零碎單字、缺乏宏觀篇章意識」的問題。
- **程序化神寵矩陣（4,000 隻獨立圖鑑）**：採用 $20 \times 10 \times 20$ 程序化生成矩陣，產出 4,000 種完全獨立的怪獸稱號與屬性，搭配動態虛擬渲染，維持高收集動機且行動裝置極致流暢。
- **高鑑別度隨堂演練（10 題實戰）**：整合「微型母音置換拼字、語境克漏字、真音標最小對立體（Minimal Pairs）、形近字題」，並具備跨單元動態補題去重演算法。
- **零伺服器後端整合（Serverless Logging）**：利用 Google Apps Script (GAS) Web App 接收非同步通關資料，教師可在 Google 試算表端一覽所有學生的時間戳記、單字成效與解鎖寵物。

---

## 📂 系統架構與檔案清單

本專案採無依賴（Vanilla JS/CSS/HTML5）純靜態架構，載入速度快且維護成本極低：

```text
.
├── index.html       # 應用程式主介面、音訊引擎、遊戲邏輯與 GAS 串接
├── quests.js        # 各週單元題庫、發音提示、干擾項及篇章全文設定
├── favicon.png      # 網站圖示
└── README.md        # 專案說明文件

```

---

## 🚀 快速上手指南

### 本機預覽與執行

本專案無需任何建置工具（No Build Step），可直接透過瀏覽器開啟：

1. **複製儲存庫**：
```bash
git clone [https://github.com/your-username/isa-efl-listening-arena.git](https://github.com/your-username/isa-efl-listening-arena.git)
cd isa-efl-listening-arena

```


2. **啟動靜態伺服器**（推薦以本地伺服器執行，確保音訊路徑正常讀取）：
```bash
# 使用 Python 內建伺服器
python3 -m http.server 8080

```


3. 開啟瀏覽器造訪 `http://localhost:8080`。

### 部署至 GitHub Pages

1. 將本專案推送至 GitHub 儲存庫。
2. 進入儲存庫頁面，點選 **Settings** $\rightarrow$ **Pages**。
3. 在 **Build and deployment** 來源選擇 **Deploy from a branch**。
4. Branch 選擇 `main`（或 `master`），資料夾選擇 `/ (root)` 後點擊 **Save**。
5. 部署完成後，即可透過 `https://<your-account>.github.io/<repo-name>/` 分享給學生使用。

### Google 試算表後端串接

若需記錄學生通關數據至個人的 Google 試算表，請按以下步驟操作：

1. **建立 Google 試算表**，將首列（A1~F1）依序命名為：
`時間戳記` | `學生姓名` | `通關單元` | `盲測分數` | `單字聆聽進度` | `獲得神寵`
2. 點選選單 **擴充功能** $\rightarrow$ **Apps Script**，貼上接收腳本：
```javascript
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = (e.postData && e.postData.contents) ? JSON.parse(e.postData.contents) : (e.parameter || {});
    var timestamp = Utilities.formatDate(new Date(), "Asia/Taipei", "yyyy/MM/dd HH:mm:ss");
    sheet.appendRow([
      timestamp,
      data.studentName || "學生",
      data.questLabel || "未指定單元",
      data.phonicsScore || "4/4 全數通過",
      data.articleStatus || "完成",
      data.petName || "未記錄"
    ]);
    return ContentService.createTextOutput("SUCCESS").setMimeType(ContentService.MimeType.TEXT);
  } catch (err) {
    return ContentService.createTextOutput("ERROR: " + err.toString()).setMimeType(ContentService.MimeType.TEXT);
  } finally {
    lock.releaseLock();
  }
}

```


3. 點選右上角 **部署** $\rightarrow$ **新增部署作業**：
* 種類選 **網頁應用程式 (Web app)**。
* **誰可以存取** 務必設定為 **所有人 (Anyone)**。


4. 複製產生的 Web App URL，開啟 `index.html`，將變數替換為您的網址：
```javascript
const GAS_SUBMIT_URL = "[https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec](https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec)";

```



---

## 📝 題庫管理與擴充

題庫資料獨立維護於 [`quests.js`](https://www.google.com/search?q=quests.js)，便於教師每週更新教學內容：

```javascript
// 1. 全文段落定義（供全域螢光筆比對）
const FULL_ARTICLE_TEXTS = {
  u35: {
    title: "Unit 35: Is a Crow Smarter Than a Seven-Year-Old?",
    paragraphs: [
      { id: "u35_p1", text: "When we think of intelligent animals..." }
    ]
  }
};

// 2. 關卡與單字屬性
const ALL_QUESTS = [
  {
    id: "u35_p1",
    articleGroup: "u35",
    label: "📅 [10/03] Unit 35 · Part 1 (第 1 段)",
    words: [
      { 
        en: "intelligent", 
        display: "in · tel · li · gent", 
        zh: "聰明的", 
        audio: "audio/intelligent.mp3", // 若留空則自動降級至 Web Speech TTS
        distractor: "diligent", 
        hint: "注意前綴 in- 與結尾 -gent 軟音 /dʒənt/。" 
      }
    ],
    sentence: {
      en: "A crow is among the most intelligent animals in the world.",
      zh: "烏鴉是世界上最聰明的動物之一。",
      audio: "audio/crow_u35.mp3"
    }
  }
];

```

---

## 💬 常見問題與支援管道

* **Q: 試算表沒有寫入任何記錄？**
* 請確認 Apps Script 部署作業中的權限是否設為「所有人 (Anyone)」。
* 重新修改 Apps Script 後，必須選擇「管理部署作業」$\rightarrow$「建立新版本」重新部署，舊網址才會載入最新邏輯。


* **Q: 點擊喇叭沒有聲音？**
* 若未放置自訂音檔，系統會自動調用瀏覽器原生 `SpeechSynthesis`（Web Speech API）。請確認裝置未開啟靜音模式，且瀏覽器允許播放音訊。



若在使用或部署過程中遇到問題，歡迎透過 GitHub Issues 提交回報。

---

## 👥 維護者與貢獻指南

* **維護者**：專案開發與教學內容架構設計團隊。
* **參與貢獻**：歡迎提交 Pull Request 以優化題型演算法、新增 UI 主題或擴充功能。

---

## 📄 授權條款

本專案採用 [MIT License](https://www.google.com/search?q=LICENSE) 授權釋出，歡迎教育機構與個人開發者自由修改與應用。

```

```
