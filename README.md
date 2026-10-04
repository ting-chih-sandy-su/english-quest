# 🎮 ISA EFL 聽力競技場 / ISA EFL Listening Arena

> 為兒童英語學習者打造的互動式英語聽力訓練平台，融合遊戲化機制與系統化課程設計

A gamified, interactive English listening training platform for children, combining engaging game mechanics with structured ESL curriculum.

---

## 📝 專案簡介 / About This Project

**兒童菁英英語中心 (ISA English Center)** 開發的線上聽力訓練系統，針對中文母語的兒童設計。

本系統採用：
- 🎯 **漸進式聽力挑戰**：從單字音素盲測到完整段落理解
- 🎁 **遊戲化獎勵機制**：通過任務並集蒐神寵圖鑑（4,000隻珍藏生物）
- 📚 **系統化課程**：按 Unit 與段落組織，整合課文、單字拆解、隨堂演練
- 🎧 **語音反饋**：標記聽過的單字、追蹤學習進度、父母面板概覽

**適用對象**：國小中高年級英語學習者  
**核心功能**：聽音識字、發音細節辨識、詞彙理解、閱讀對照

---

## 🎯 核心功能 / Key Features

### 1. **多階段聽力驗收系統**
- **STAGE 1-3**：單字音素盲測（聽2遍，選出該單字）
- **STAGE 4 (Final)**：段落聽力抓鬼（找出未出現在課文中的干擾詞）
- 進度可視化追蹤條

### 2. **核心單字拆解（必聽模塊）**
- 標準發音 + 美式發音對照
- 詳細的音素提示（如 `/ɪ/ 短母音`、`/dʒ/ 擦濁音`）
- 易混淆詞對比（干擾詞提示）
- 點擊 🐢「拆解」按鈕播放，自動標記已聽單字

### 3. **課文朗讀與螢光筆對照**
- 整個單元課文分段顯示
- 當前段落自動高亮
- 全文 MP3 朗讀
- 段落與單字無縫關聯

### 4. **隨堂考模擬測驗**
- 10 題零重複實戰考卷
- 題型混合：拼字形近字、克漏字、發音陷阱
- 即時評分 + 題目解釋
- 學習報告自動生成

### 5. **萬物圖鑑集蒐系統**
- 完成任務時隨機獲得稀有 / 傳奇 / 神話級生物
- 4,000 隻全服寶寶圖鑑（組合生成）
- LocalStorage 永久保存進度
- 視覺化錄取通知系統

### 6. **家長大綱面板**
- 一鍵展開本週學習目標
- 課程進度自動統計
- 完成狀況評語（系統生成）

---

## 🚀 快速開始 / Getting Started

### 零設定直接使用

本專案是靜態 HTML 應用，**無需伺服器或編譯**。

#### 1. 克隆或下載
```bash
git clone https://github.com/ting-chih-sandy-su/isa-efl-listening-arena.git
cd isa-efl-listening-arena
```

#### 2. 開啟瀏覽器
直接雙擊 `index.html` 或以本地伺服器開啟：
```bash
# Python 3
python -m http.server 8000

# 或 Node.js (npx)
npx http-server
```

訪問 `http://localhost:8000` → 進入聽力競技場

#### 3. 開始使用
1. 在彈窗提示輸入學生名字（例：「小明」）
2. 從下拉選單選擇任務（如 `Unit 35 · Part 1`）
3. 點擊 🔊 大喇叭聽段落
4. 選擇正確的單字卡片
5. 完成 4 關聽力驗收 + 點聽所有單字 → 解鎖開箱抽神寵！

---

## 📂 專案結構 / Project Structure

```
isa-efl-listening-arena/
├── index.html              HTML 主程式 (55KB)
│                           • 完整應用 UI 與邏輯
│                           • 遊戲化引擎、模態框、動畫
│                           • Google Apps Script 數據提交
├── quests.js               課程資料庫 (10KB)
│                           • ALL_QUESTS: 課程陣列
│                           • FULL_ARTICLE_TEXTS: 課文文檔
│                           • 單字拆解詳情、發音提示
├── audio/
│   └── crow_u35.mp3        Unit 35 段落朗讀音檔
│
├── favicon.png             應用圖標 (34KB)
├── README.md               本文件
└── .github/
    └── workflows/          (可選) CI/CD 設定
```

**運行流程**：
- `index.html` 加載 → 初始化用戶存儲 (LocalStorage) → 導入 `quests.js`
- 用戶選擇課程 → 渲染挑戰模組（聽力、選擇、進度）
- 完成 4 關 + 單字全聽 → 觸發勝利動畫 → 隨機生成神寵 → 提交學習記錄

---

## 🛠️ 技術棧 / Tech Stack

- **語言**：HTML + CSS + Vanilla JavaScript (100% 無框架)
- **存儲**：瀏覽器 LocalStorage (用戶名、圖鑑進度)
- **音频**：Web Audio API + `<audio>` 標籤
- **動畫**：CSS 關鍵幀 + Canvas (彩帶特效)
- **響應式**：移動優先設計 (最適解析度 460px，支援平板)
- **集成**：Google Apps Script 數據提交（可選）
- **字體**：Google Fonts (Fredoka, Noto Sans TC)

---

## ✨ 主要類功能詳解

### 聽力驗收 (Challenge Arena)
```javascript
generateChallengeStage()  // 生成 4 關聽力挑戰
handleChallengeSpeakerClick()  // 播放音檔、計數聆聽次數
handleChoiceClick()  // 判斷答案、更新進度
```

### 單字追蹤 (Word Listener)
```javascript
handleWordItemClick()  // 播放單字音頻、標記已聽
updateWordTrackerBadge()  // 更新進度徽章
listenedWordsSet  // 全局已聽單字集合
```

### 圖鑑系統 (Gacha)
```javascript
getPetByIndex(idx)  // 根據編號生成神寵名稱、屬性
executeVictory()  // 開啟模態框、播放彩帶特效
openBagModal() / closeBagModal()  // 展示已收集圖鑑
```

### 測驗模組 (Quiz)
```javascript
generateQuizQuestions()  // 生成 10 題隨機題目
handleQuizAnswer()  // 判斷答案、顯示解釋
calculateQuizScore()  // 計分、生成反饋
```

---

## 🎓 課程資料格式 / Quest Data Schema

### 單一課程物件
```javascript
{
  id: "u35_p1",
  articleGroup: "u35",  // 文章組 ID（用於多段落關聯）
  label: "📅 [10/03] Unit 35 · Part 1 (第 1 段)",
  words: [
    {
      en: "intelligent",
      display: "in · tel · li · gent",  // 音節拆解顯示
      zh: "聰明的",
      audio: "",  // 音檔路徑（可選）
      distractor: "diligent",  // 干擾詞
      hint: "前綴 in- 開頭；注意中間短母音 /ɛ/ 與結尾 -gent 軟音..."
    },
    // ... 更多單字
  ],
  sentence: {
    en: "When we think of intelligent animals...",
    zh: "當我們想到聰明的動物時...",
    audio: "audio/crow_u35.mp3"
  }
}
```

要新增課程，編輯 `quests.js` 中的 `ALL_QUESTS` 陣列。

---

## 💾 數據存儲 / Data Storage

### LocalStorage 鍵值
| 鍵 | 說明 | 例值 |
|---|---|---|
| `phonics_student_name` | 學生名字 | `"小明"` |
| `unlocked_catalog_ids` | 已解鎖圖鑑 | `["pet_1", "pet_42"]` |
| `quiz_scores` | 測驗分數 | `[{date, score, total}]` |

所有數據存儲在用戶瀏覽器本地，**無伺服器依賴**。

### 可選：上傳至 Google Sheets
在 `index.html` 第 728 行修改：
```javascript
const GAS_SUBMIT_URL = "https://script.google.com/macros/s/YOUR_GAS_ID/exec";
```

---

## 🎨 自訂主題色 / Customization

在 `index.html` `<style>` 區塊修改 CSS 變數（第 15-26 行）：
```css
:root {
  --bg: #0b1120;           /* 背景深藍 */
  --gold: #facc15;         /* 金色高亮 */
  --cyan: #38bdf8;         /* 靛青藍 */
  --green: #22c55e;        /* 綠色 (通過) */
  --red: #ef4444;          /* 紅色 (錯誤) */
  --purple: #a855f7;       /* 紫色 (測驗) */
  /* ... 更多顏色 */
}
```

---

## 🐛 常見問題 / FAQ

**Q: 音檔無法播放？**  
A: 確認 `audio/` 資料夾與 MP3 檔案存在。檢查瀏覽器開發工具 (F12) 的 Network 標籤是否正確加載。

**Q: LocalStorage 數據遺失？**  
A: 檢查瀏覽器隱私模式是否禁用了存儲。重新進入應用時按 F12 → Application → LocalStorage 驗證鍵值。

**Q: 如何新增新課程？**  
A: 編輯 `quests.js` 的 `ALL_QUESTS` 陣列，按 `Quest Data Schema` 格式添加物件，重新整理瀏覽器即可生效。

**Q: 支援多人帳號？**  
A: 目前單瀏覽器存儲。若需多人，可在應用層加入後端帳號系統，或讓每位學生使用獨立瀏覽器設定檔。

---

## 🤝 貢獻 / Contributing

歡迎報告 Bug、提交功能建議或貢獻程式碼！

### 報告問題
請提交 Issue，包含：
- 現象描述（螢幕截圖 / 錯誤訊息）
- 複現步驟
- 瀏覽器版本

### 貢獻代碼
1. Fork 本倉庫
2. 在 `feature/` 分支開發
3. 測試功能完整性
4. 提交 Pull Request，附上變動說明

---

## 📄 授權 / License

本專案開源，歡迎教育機構、家長、開發者自由使用與修改。  
如用於商業用途，請先與作者聯繫。

---

## 👨‍💻 作者 / Author

**兒童菁英英語中心 (ISA English Center)**  
開發者：Ting-Chih (Sandy) Su  
📧 聯絡：[GitHub](https://github.com/ting-chih-sandy-su)

---

## 🌐 線上體驗 / Live Demo

訪問 GitHub Pages：  
👉 [https://ting-chih-sandy-su.github.io/isa-efl-listening-arena/](https://ting-chih-sandy-su.github.io/isa-efl-listening-arena/)

---

## 🎯 後續功能路線圖 / Roadmap

- [ ] 多語言支持（英文 UI）
- [ ] 後端帳號系統與進度雲端同步
- [ ] 教師面板（批量新增課程、查看全班進度）
- [ ] VR / AR 聽力沉浸式學習
- [ ] 社群排行榜與成就系統
- [ ] 離線模式支持

---

## ⭐ 致謝 / Acknowledgments

感謝所有使用、測試與反饋的教育者和學生家長！

---

**最後更新**：2026-10-04  
**版本**：1.0 (Beta)

