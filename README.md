# 林家齊｜前端工程師作品集

> 從行政與資料處理工作轉職前端。
> 這個網站把作品、經歷和每一段空檔期都整理在同一頁，讓招募方在幾分鐘內確認：
> 我已經準備好以前端／全端工程師的身分投入工作。

[![Live Demo](https://img.shields.io/badge/Live%20Demo-atayallin.github.io%2FAtayaHtml-5C7A2B?style=for-the-badge&logo=github&logoColor=white)](https://atayallin.github.io/AtayaHtml/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![No Framework](https://img.shields.io/badge/No%20Framework-Vanilla-16212B?style=flat)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?style=flat&logo=githubpages&logoColor=white)

---

## 目錄

- [專案簡介](#專案簡介)
- [線上預覽](#線上預覽)
- [設計概念](#設計概念)
- [頁面結構](#頁面結構)
- [主要特色](#主要特色)
- [技術實作](#技術實作)
- [專案結構](#專案結構)
- [收錄作品](#收錄作品)
- [設計系統](#設計系統)
- [本地運行](#本地運行)
- [維護說明](#維護說明)
- [瀏覽器支援](#瀏覽器支援)
- [更新紀錄](#更新紀錄)
- [聯絡方式](#聯絡方式)
- [授權](#授權)

---

## 專案簡介

`AtayaHtml` 是 **林家齊（Lin Chia-Chi）** 的求職作品集網站，應徵職缺為前端工程師／全端工程師。

2026 年 10 月依新版履歷全面翻新，設計目標只有一個：**讓 HR 與面試官快速、可驗證地看懂我**。

- 開場就看到求職條件、主力技術與可驗證的成果數字
- 主要作品附上操作影片，不用離開頁面就能看到實際畫面
- 工作經歷以 git commit graph 呈現，兩段空檔期畫成支線，並說明期間在做什麼

技術上是**純靜態網站**：手寫 HTML、CSS、Vanilla JavaScript，沒有框架、沒有建置工具、不需要 `npm install`。

## 線上預覽

🔗 **[atayallin.github.io/AtayaHtml](https://atayallin.github.io/AtayaHtml/)**

## 設計概念

整體視覺結合兩個背景：**建築製圖**（轉職前的工作）與 **Git 版本控制**（現在的工作方式）。

| 設計元素 | 來源與用意 |
|---|---|
| 製圖紙方格底紋 | 呼應 AutoCAD／SketchUp 製圖經驗 |
| 圖說標題欄（求職條件卡） | 仿建築圖面右下角的標題欄，含「繪製／更新」欄位 |
| Commit graph 經歷 | 主線是工作與轉職，旁支是空檔期，`HEAD` 標示目前狀態 |
| 2014–2026 時間總覽 | 十年經歷壓縮成一條線，不用捲動就能看到全貌 |
| 左側縱書欄 | 參考日本網站的直排側欄，顯示目前閱讀的區塊 |
| 右側 commit 進度欄 | 隨捲動填滿，每個節點可點擊跳轉 |

配色以**橄欖綠**為主色（對應履歷標題色），**琥珀色**只用在空檔期，讓兩種資訊一眼就能區分。

## 頁面結構

| 區塊 | ID | 內容 |
|---|---|---|
| 開場 | `#top` | 求職狀態、姓名與職稱、自我介紹、技術規格表、求職條件標題欄、時間總覽、四個成果數字 |
| 專案作品 | `#work` | 兩個主打全端專案＋四個其他作品，五支操作影片 |
| 工作經歷與轉職歷程 | `#career` | Commit graph 時間線＋固定在側邊的經歷摘要 |
| 技術能力 | `#skills` | 主力／次專長／擴充中三級框架，加上七類技能表 |
| 工作習慣 | `#value` | 轉職背景帶來的三個工作習慣 |
| 學歷、培訓與證照 | `#credentials` | 840 小時全端培訓、六角學院體驗營、技術士與國際證照 |
| 聯絡 | `#contact` | Email、電話、GitHub、履歷線上瀏覽與下載 |

另有 `contact.html`：新版履歷 PDF 的線上瀏覽頁。

## 主要特色

| 類別 | 細節 |
|---|---|
| 🎬 **作品影片** | 捲到畫面內自動靜音循環播放，離開畫面暫停；只載入看得到的影片，每支都可手動暫停 |
| 🌗 **雙主題** | 淺色（paper）／深色（ink），預設跟隨系統，切換結果以 `localStorage` 記住，載入前套用避免閃爍 |
| 🧭 **兩側導覽** | 寬螢幕（≥1360px）左右留白顯示縱書區塊名稱與 commit 進度欄，不覆蓋內容 |
| ✨ **質感細節** | 邊緣柔光、極淡底紋顆粒、經歷 commit graph 依序進場 |
| 📖 **中文排版** | `word-break: keep-all` 只在標點處斷行，關鍵詞組不拆開；手機改回一般斷行 |
| 📱 **響應式** | 1080 / 760 / 480px 三個斷點，手機上的求職條件卡、時間總覽、經歷都另行調整 |
| ♿ **無障礙** | 語意化標籤、ARIA、跳至主要內容連結、可見的 focus 樣式；文字對比皆超過 WCAG AA 4.5:1；尊重 `prefers-reduced-motion`（停止動畫、影片不自動播放） |
| ⚡ **效能** | 圖片 `loading="lazy"`，影片 `preload="none"` 並壓縮為 720p 無聲版本，CSS／JS 加版本號避免快取舊檔 |

## 技術實作

| 技術 | 用途 |
|---|---|
| **HTML5** | 語意化結構、ARIA 屬性、Open Graph meta |
| **CSS3** | Grid、Flexbox、Custom Properties、`clamp()`、`color-mix()`、`mask-image`、`writing-mode`、`text-wrap: balance / pretty` |
| **JavaScript**（Vanilla） | 主題切換、`IntersectionObserver`（導覽高亮、經歷進場、影片自動播放）、`requestAnimationFrame` 節流的捲動進度 |
| **SVG** | 時間總覽線圖、底紋顆粒（`feTurbulence`）、主題切換圖示 |
| **ffmpeg** | 作品影片轉為 720p／30fps H.264、去除音軌、`faststart` 以利串流 |

### 字體（Google Fonts）

| 字體 | 用途 |
|---|---|
| **Noto Serif TC** | 姓名、標題、數字 |
| **IBM Plex Sans** + **Noto Sans TC** | 內文 |
| **IBM Plex Mono** | 日期、技術標籤 |

### 部署

- **GitHub Pages**：push 到 `main` 即自動部署

## 專案結構

```
AtayaHtml/
├── index.html                  # 主頁面
├── contact.html                # 履歷 PDF 線上瀏覽頁
├── app.js                      # 主題切換、側欄進度、影片自動播放、進場動畫
├── style/
│   └── site.css                # 全站樣式（淺色／深色色票、三個斷點）
├── 影片/                        # 作品操作影片（720p、無聲，共約 14MB）
│   ├── lazybaobao.mp4
│   ├── vueshop.mp4
│   ├── react.mp4
│   ├── gamehall.mp4
│   └── japanfood.mp4
├── 照片/
│   ├── 去背個人照.png
│   └── projects/               # 作品截圖（影片封面）
├── 履歷pdf/
│   └── 林家齊履歷_20261008.pdf
├── 作品1/                       # 日本美食推薦網（早期作品，站內線上展示）
├── 專案1/、專案2/                # 早期練習
├── README.md
└── .gitignore
```

> `style/style.css`、`style.scss`、`bubble.css` 與舊版履歷 PDF 為舊版設計遺留，新版頁面不再引用。

## 收錄作品

| 作品 | 類型 | 技術 | 連結 |
|---|---|---|---|
| **懶飽飽智慧點餐系統** | 團隊專案，前端負責人 | Angular 19、TypeScript、Signals、Spring Boot、MySQL、Playwright | [原始碼](https://github.com/AtayalLin/Angular-Team-Frontend) |
| **QSDemo 問卷管理系統** | 獨立完成，前後端分離 | Angular 19 Standalone、Spring Boot、MySQL、RESTful API | [線上展示](https://atayallin.github.io/Angular-qsdemo/)・[原始碼](https://github.com/AtayalLin/Angular-qsdemo) |
| **Vue 日式電商 Demo** | 個人 Side Project | Vue 3、Vite、Pinia、Vue Router、Zod、Vitest、GitHub Actions | [線上展示](https://atayallin.github.io/Vueshop-Side-Project-Demo-/)・[原始碼](https://github.com/AtayalLin/Vueshop-Side-Project-Demo-) |
| **智慧餐飲進銷存管理系統** | 個人專案，開發中 | React 19、TypeScript、TanStack Query、Zod、n8n | [原始碼](https://github.com/AtayalLin/restaurant-inventory-system-React) |
| **Vue 模擬遊戲大廳** | 公司前端試題 | Vue 3、Vite、Pinia、GSAP、GitHub Actions | [線上展示](https://atayallin.github.io/Igs-test-vue/)・[原始碼](https://github.com/AtayalLin/Igs-test-vue) |
| **日本美食推薦網** | 早期練習作品 | HTML5、CSS3、JavaScript、RWD | 站內 [`作品1/`](作品1/index.html) |

## 設計系統

### 色票

```css
/* 淺色 paper（預設） */
--bg:      #F4F5F1;   /* 背景 */
--surface: #FFFFFF;   /* 卡片 */
--ink:     #16212B;   /* 主文字 */
--ink-2:   #3E4B57;   /* 內文 */
--ink-3:   #56616D;   /* 次要文字（對比 5.3:1 以上） */
--accent:  #5C7A2B;   /* 橄欖綠：主色、主線 */
--branch:  #B97A12;   /* 琥珀：只用於空檔期支線 */

/* 深色 ink */
--bg:      #12181E;
--surface: #1C252E;
--ink:     #E8ECE5;
--ink-3:   #A3AEB9;   /* 次要文字（對比 6.9:1 以上） */
--accent:  #9DBE5E;
--branch:  #E2A642;
```

### 字體與尺寸

```css
--f-serif: "Noto Serif TC", serif;                      /* 標題 */
--f-sans:  "IBM Plex Sans", "Noto Sans TC", sans-serif; /* 內文 */
--f-mono:  "IBM Plex Mono", monospace;                  /* 日期、標籤 */

--wrap:    1240px;                    /* 內容最寬 */
--gutter:  clamp(16px, 4vw, 40px);    /* 左右留白 */
--radius:  10px;
```

最小字級 13px，日期與欄位標籤 14–15px。

## 本地運行

```bash
git clone https://github.com/AtayalLin/AtayaHtml.git
cd AtayaHtml
```

推薦使用 VS Code **Live Server**：右鍵 `index.html` →「Open with Live Server」。

> 影片自動播放需要透過 `http://` 開啟（Live Server 或 GitHub Pages）。直接雙擊 `index.html` 以 `file://` 開啟時，部分瀏覽器會限制。

## 維護說明

- **改了 CSS 或 JS 後**：把 `index.html` 與 `contact.html` 裡的 `site.css?v=5`、`app.js?v=5` 版本號加 1，訪客才不會讀到舊快取。
- **新增作品影片**：先壓縮再放進 `影片/`，例如：
  ```bash
  ffmpeg -i 原始影片.mp4 -an -vf "fps=30,scale=1280:-2" -c:v libx264 -crf 30 -preset slow -movflags +faststart 影片/新作品.mp4
  ```
  再複製一組 `.media--video` 區塊，修改 `data-src`、`poster` 與時長。
- **更新履歷**：替換 `履歷pdf/` 內的檔案，並同步修改 `index.html`、`contact.html` 的下載連結。

## 瀏覽器支援

| 瀏覽器 | 支援版本 |
|---|---|
| Chrome / Edge | 114+ |
| Firefox | 121+ |
| Safari | 17.5+ |

> 使用了 `color-mix()`、`text-wrap: balance / pretty`、`mask-image`、`backdrop-filter`。較舊的瀏覽器會失去部分細節（例如文字平衡換行、毛玻璃效果），但版面結構與內容都能正常閱讀。

## 更新紀錄

### 2026/10/12：依新版履歷全面翻新

- 依 2026/10/08 新版履歷重寫全部內容，定位為前端／全端工程師
- 新設計：建築製圖 × Git 版本控制，橄欖綠＋琥珀雙色系統
- 開場加入求職條件標題欄、技術規格表、2014–2026 時間總覽與可點擊的成果數字
- 工作經歷改為 commit graph，空檔期以支線呈現並說明期間內容
- 五個作品加入操作影片，捲到畫面內自動播放
- 寬螢幕加入左側縱書欄、右側 commit 進度欄、邊緣柔光與底紋顆粒
- 中文斷行改為 `keep-all`，小字放大並加深，對比達 WCAG AA
- 樣式拆分為 `style/site.css`，`app.js` 改寫為純 Vanilla JavaScript
- `contact.html` 改為新版履歷線上瀏覽頁

### 2026/05/26：Annual Report 版

- 年度報告風設計（Persimmon＋Navy＋Cream 配色）
- 8 章節結構：Summary、Statement、Work、Capabilities、Timeline、Credentials、Q&A、Contact

### 2026/05/19：Glassmorphism 版

- 深色 Glassmorphism＋打字機效果、Aurora 背景
- Bootstrap 5＋AOS＋GSAP＋Devicon

## 聯絡方式

| 管道 | 連結 |
|---|---|
| ✉️ Email | <a437777@gmail.com> |
| 📞 電話 | 0967-187-303 |
| 🐙 GitHub | [github.com/AtayalLin](https://github.com/AtayalLin) |
| 📍 所在地 | 高雄市左營區（可到台北、新北、台中，或遠端） |
| 📄 履歷 | [線上瀏覽](https://atayallin.github.io/AtayaHtml/contact.html)・[下載 PDF](履歷pdf/林家齊履歷_20261008.pdf) |

## 授權

網站程式碼可自由參考學習。
個人照片、作品影片與履歷 PDF 為個人資料，**不在授權範圍內**，僅供求職用途瀏覽。
