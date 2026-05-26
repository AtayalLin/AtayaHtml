# 林家齊 · Frontend Engineer Portfolio

> 從行政、板手到程式碼。
> 以「年度報告 Annual Report FY 2026」為設計隱喻的個人作品集網站,
> 把求職資料當作一份**可以翻閱的文件**來排版。

[![Live Demo](https://img.shields.io/badge/Live%20Demo-atayallin.github.io%2FAtayaHtml-C25430?style=for-the-badge&logo=github&logoColor=white)](https://atayallin.github.io/AtayaHtml/)
[![License: MIT](https://img.shields.io/badge/License-MIT-1E2A26.svg?style=for-the-badge)](LICENSE)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![No Framework](https://img.shields.io/badge/No%20Framework-Vanilla-2E3B36?style=flat)
![Google Fonts](https://img.shields.io/badge/Google%20Fonts-Bricolage%20%C2%B7%20Hanken%20%C2%B7%20JetBrains-4285F4?style=flat&logo=googlefonts&logoColor=white)

---

## 目錄

- [專案簡介](#專案簡介)
- [線上預覽](#線上預覽)
- [設計概念](#設計概念)
- [主要特色](#主要特色)
- [技術棧](#技術棧)
- [專案結構](#專案結構)
- [章節結構](#章節結構)
- [作品集連結](#作品集連結)
- [設計系統](#設計系統)
- [本地運行](#本地運行)
- [瀏覽器支援](#瀏覽器支援)
- [更新紀錄](#更新紀錄)
- [聯絡方式](#聯絡方式)
- [授權](#授權)

---

## 專案簡介

`AtayaHtml` 是 **林家齊(Lin Chia-Chi)** 的個人作品集網站,定位為求職用的前端工程師門面。
2026 年五月重新設計為「**年度報告風 Annual Report FY 2026**」——
把作品集當作一份**封面 → 數字摘要 → 自述 → 精選作品 → 能力清單 → 時間線 → 證照分類 → Q&A → 聯絡**
的完整文件,在排版上採用印刷感的色塊、頁碼索引、與分章編號。

技術上是**純靜態單頁網站**:整份 CSS 內嵌於 `<style>` 區塊,
JavaScript 為原生 Vanilla(僅實作主題切換、平滑捲動、IntersectionObserver 進場動畫)。
不依賴任何前端框架、不需要 build step、不需要 `npm install`。

## 線上預覽

🔗 **[atayallin.github.io/AtayaHtml](https://atayallin.github.io/AtayaHtml/)**

## 設計概念

| 元素 | 對應到年度報告 |
|---|---|
| 封面 (Cover) | 公司年報封面 — 標題 + Fiscal Year + 發行人 + 目錄 |
| Summary | 數字摘要 (KPI bento grid) |
| Statement | CEO 致詞 — 全幅 navy 色塊 |
| Selected Work | 精選作品報導 — 帶色塊 ribbon 的專題頁 |
| Capabilities | 規格清單 (spec sheet) |
| Timeline | 三幕轉職劇本 (Origin / Pivot / Now) |
| Credentials | 證照分類帳 (ledger table) |
| Q&A | 訪談六題 |
| Contact | 聯絡資訊(全幅 persimmon 色塊) |
| Colophon | 出版資訊頁尾 |

## 主要特色

| 類別 | 細節 |
|---|---|
| 📰 **排版** | Annual Report 印刷風 — 頁碼、章節編號、出版資訊頁尾、目錄索引 |
| 🎨 **配色** | Persimmon `#C25430` 黧赭土 + Navy `#1E2A26` 黑墨綠 + Cream `#F6F2E5` 米黃,輔以 Butter `#D9B068` / Moss `#4B5F4F` |
| 🌗 **雙主題** | Paper(米黃紙)/ Ink(深墨)兩種模式,`localStorage` 持久化 |
| 🎬 **動畫** | IntersectionObserver-driven `data-reveal` 進場 + 平滑捲動 + 滾動觸發 active nav |
| 📱 **響應式** | 760 / 900 / 1100px 三斷點,行動裝置自動切換為直式排版 |
| ♿ **無障礙** | 語意化標籤、`prefers-reduced-motion` 尊重、可見 focus 樣式、ARIA labels |
| ⚡ **效能** | 純單檔(`index.html` 約 76KB)、`loading="lazy"`、無外部 CSS/JS 依賴 |
| 🧱 **工程化** | CSS Custom Properties 集中、`color-mix()`、`clamp()` 流體排版、`text-wrap: balance/pretty` |

## 技術棧

### 前端

| 技術 | 用途 |
|---|---|
| **HTML5** | 語意化結構、ARIA 屬性、SEO meta |
| **CSS3** (內嵌) | CSS Grid · Flexbox · Custom Properties · `clamp()` · `color-mix()` · `aspect-ratio` |
| **JavaScript** (Vanilla ES6+) | 主題切換 · 平滑捲動 · `IntersectionObserver` × 2(進場動畫 + active nav) |

### 字體 (Google Fonts CDN)

| 字體 | 用途 |
|---|---|
| **Bricolage Grotesque** | 標題 / 數字 (display) |
| **Hanken Grotesk** | 內文 (sans) |
| **Noto Sans TC** | 中文 fallback |
| **JetBrains Mono** | 標籤、章節編號、技術 chips (mono) |

### 部署

- **GitHub Pages** — push to `main` 即自動部署
- 履歷 PDF 透過 GitHub raw 提供下載

## 專案結構

```
AtayaHtml/
├── index.html                     # 主頁面(年度報告風 · 內嵌 CSS · 約 76KB)
├── 履歷pdf/
│   └── 104林家齊(2026前端履歷0514).pdf
├── 照片/
│   ├── 去背個人照.png             # 封面人像
│   ├── 合成背景圖.png             # (舊版用,保留)
│   ├── 山上生活照.png             # (備用)
│   └── projects/                  # 作品集首頁截圖
│       ├── lazybaobao.jpg
│       ├── vue-shop.jpg
│       ├── game-hall.jpg
│       ├── qsdemo.jpg
│       ├── atayahtml.jpg
│       └── japan-food.jpg
├── 作品1/                          # 嵌入式作品:日本美食推薦網
│
├── (備份 · 不再使用)
│   ├── style/style.css            # 舊版 Glassmorphism 樣式
│   ├── style/style.scss
│   ├── style/bubble.css
│   ├── app.js                     # 舊版互動腳本
│   ├── contact.html               # 舊版履歷瀏覽頁
│   └── p3-0資源包/ICONS/          # 舊版本地 SVG 圖示
│
├── README.md
├── LICENSE
└── .gitignore
```

> **備註**:舊版 `style/`、`app.js`、`contact.html` 暫時保留作備份,新版完全不引用。

## 章節結構

| # | 區塊 | ID | 內容重點 |
|---|---|---|---|
| 00 | **Cover** | (無) | 封面:中英文姓名 + 個人照 + 角色卡片(Persimmon)+ 目錄索引 |
| 01 | **Summary** | `#summary` | 4 個 KPI bento:作品 6 件、培訓 840hrs、證照 9 張、跨域 2+ 年 |
| 02 | **Statement** | `#statement` | 全幅 Navy 色塊 — 自述「從行政與板手,轉身寫程式碼」 |
| 03 | **Selected Work** | `#work` | 3 個精選作品(色塊 ribbon: Persimmon / Navy / Butter)+ 3 個 sub-listings |
| 04 | **Capabilities** | `#cap` | 4 大類技能清單:Frontend / Backend / Tooling / Adjacent |
| 05 | **Timeline** | `#timeline` | 三幕劇:Act 01 Origin(2023)/ Act 02 Pivot(2024)/ Act 03 Now(2025–26) |
| 06 | **Credentials** | `#cred` | 9 項證照 ledger:Autodesk、勞動部乙/丙級、TQC、六角學院、Java 養成班 |
| 07 | **Q&A** | `#qa` | 六題訪談自述 |
| 08 | **Contact** | `#contact` | 全幅 Persimmon 色塊 — Email / Phone / GitHub / Résumé PDF |
| —  | **Colophon** | (footer) | 出版資訊:版權、字體、年份 |

## 作品集連結

| # | 專案 | 技術棧 | 連結 |
|---|---|---|---|
| 01 | **LazyBaoBao 懶飽飽智慧點餐系統** (團隊專案・前端負責人) | Angular 19 · TS · Signals · Spring Boot · MySQL · GSAP · Lottie | [Source](https://github.com/AtayalLin/Angular-Team-Frontend) |
| 02 | **QSDemo 企業級問卷系統** (Solo · Full Stack) | Angular 19 · Spring Boot 3.x · MySQL 8.x · JPA | [Live](https://atayallin.github.io/Angular-qsdemo/) · [Code](https://github.com/AtayalLin/Angular-qsdemo) |
| 03 | **夜色道頓堀 Vue 日式電商 Demo** | Vue 3 · Vite · Pinia · vee-validate · Zod · GitHub Actions | [Live](https://atayallin.github.io/Vueshop-Side-Project-Demo-/) · [Code](https://github.com/AtayalLin/Vueshop-Side-Project-Demo-) |
| 04 | **Vue H5 模擬遊戲大廳** (IGS 面試試題) | Vue 3 · H5 · VIP 等級 · 輪播 | [Live](https://atayallin.github.io/Igs-test-vue/) · [Code](https://github.com/AtayalLin/Igs-test-vue) |
| 05 | **AtayaHtml 個人作品集**(本站) | HTML5 · CSS3 · Vanilla JS | [Code](https://github.com/AtayalLin/AtayaHtml) |
| 06 | **日本美食推薦網** | HTML · CSS · AOS · RWD | 內嵌於本站 `/作品1/` |

## 設計系統

### 配色 Tokens

```css
/* Paper Mode (default) */
--cream:        #F6F2E5;     /* 主背景 米黃紙 */
--cream-2:      #ECE5D2;
--cream-3:      #DDD3B9;
--ink:          #1A1612;     /* 主前景 墨 */
--ink-2:        #4A4138;
--ink-3:        #7E7568;

--persimmon:    #C25430;     /* 黧赭土 · 主強調色 */
--persimmon-d:  #8E3C20;
--navy:         #1E2A26;     /* 黑墨綠 · 自述/CTA 色塊 */
--butter:       #D9B068;     /* 麥麥黃 · 第三色 */
--moss:         #4B5F4F;     /* 苔綠 · 輔助色 */

/* Ink Mode (dark) */
--cream:        #100E0B;
--ink:          #F6F2E5;
--persimmon:    #D9633A;
```

### 字體系統

```css
--f-display:    "Bricolage Grotesque", "Noto Sans TC", system-ui, sans-serif;
--f-sans:       "Hanken Grotesk", "Noto Sans TC", system-ui, sans-serif;
--f-mono:       "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace;
```

### 排版尺度

```css
--gutter:       clamp(20px, 4vw, 56px);    /* 左右留白 */
--max-w:        1480px;                     /* 內容最寬 */
```

## 本地運行

### 直接開啟

```bash
git clone https://github.com/AtayalLin/AtayaHtml.git
cd AtayaHtml
# 用瀏覽器直接打開 index.html
```

### 推薦:VS Code Live Server

1. 安裝 `Live Server` 擴展
2. 右鍵 `index.html` → `Open with Live Server`
3. 自動開啟 `http://127.0.0.1:5500/`(熱重載)

> **純靜態網站**:無 build step、無 `npm install`、無外部 CSS/JS 依賴(僅 Google Fonts CDN)。

## 瀏覽器支援

| 瀏覽器 | 支援版本 |
|---|---|
| Chrome / Edge | 105+ |
| Firefox | 113+ |
| Safari | 16.4+ |
| iOS / Android | iOS 16.4+ / Android 13+ |

> 使用了 `color-mix()`、`text-wrap: balance/pretty`、`aspect-ratio`、`backdrop-filter`、CSS Custom Properties。
> 較舊瀏覽器會 graceful degrade(失去玻璃模糊、文字平衡換行等細節,但排版結構仍正確)。

## 更新紀錄

### 2026/05/26 — Annual Report Redesign 📰

- ✨ **完整重寫**為「年度報告 FY 2026」設計語言
- 🎨 配色改為 Persimmon `#C25430` + Navy `#1E2A26` + Cream `#F6F2E5` 印刷感色調
- 🔤 字體系統換為 **Bricolage Grotesque + Hanken Grotesk + JetBrains Mono + Noto Sans TC**
- 📐 結構重組為 8 章節 + 封面 + Colophon:Cover / Summary / Statement / Work / Capabilities / Timeline / Credentials / Q&A / Contact
- 🧹 **CSS 全部內嵌**於 `<style>` 區塊,不再引用 `style/style.css`、`bubble.css`、Bootstrap、AOS、GSAP、Devicon
- 💡 主題切換改名為 Paper / Ink,沿用 `localStorage` 持久化
- 🗑️ 移除舊版打字機效果、Glassmorphism、漸層強調色、AOS 進場、Aurora 背景
- 📄 履歷 PDF 連結改為直接從 GitHub raw 下載

### 2026/05/19 — Glassmorphism 版

- 深色 Glassmorphism + Motion-Driven 設計
- 打字機效果、Aurora 背景、深淺模式切換
- Bootstrap 5 + AOS + GSAP + Devicon

### 2025/08/24

- 導覽列改用 Bootstrap Columns
- 平板斷點啟用漢堡選單

## 聯絡方式

| 管道 | 連結 |
|---|---|
| ✉️ Email | <a437777@gmail.com> |
| 📞 Phone | 0967-187-303 |
| 🐙 GitHub | [github.com/AtayalLin](https://github.com/AtayalLin) |
| 📍 Location | 高雄市左營區 Kaohsiung, TW |
| 📄 Résumé | [104林家齊(2026 前端履歷 0514).pdf](https://github.com/AtayalLin/AtayaHtml/raw/main/履歷pdf/104林家齊(2026前端履歷0514).pdf) |

## 授權

本專案採用 [MIT License](LICENSE)。
個人照片與履歷 PDF 為個人資料,**不在授權範圍內**,僅供求職用途瀏覽。
