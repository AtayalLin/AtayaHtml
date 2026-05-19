# 林家齊 · Frontend Engineer Portfolio

> 從行政轉職前端工程師，用程式碼說故事。
> 個人作品集網站，結合 Glassmorphism、Motion-Driven 設計與深淺模式切換。

[![Live Demo](https://img.shields.io/badge/Live%20Demo-atayallin.github.io%2FAtayaHtml-6366F1?style=for-the-badge&logo=github&logoColor=white)](https://atayallin.github.io/AtayaHtml/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Bootstrap 5](https://img.shields.io/badge/Bootstrap%205-7952B3?style=flat&logo=bootstrap&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat&logo=greensock&logoColor=black)
![AOS](https://img.shields.io/badge/AOS-FF6B6B?style=flat)

---

## 目錄

- [專案簡介](#專案簡介)
- [線上預覽](#線上預覽)
- [主要特色](#主要特色)
- [技術棧](#技術棧)
- [專案結構](#專案結構)
- [頁面區塊](#頁面區塊)
- [作品集連結](#作品集連結)
- [設計系統](#設計系統)
- [本地運行](#本地運行)
- [瀏覽器支援](#瀏覽器支援)
- [更新紀錄](#更新紀錄)
- [聯絡方式](#聯絡方式)
- [授權](#授權)

---

## 專案簡介

`AtayaHtml` 是 **林家齊（Chia-Chi Lin）** 的個人作品集網站，定位為求職用的前端工程師門面，
展示個人介紹、技能堆疊、6 個精選作品、跨域證照與聯絡方式。

**設計方向**：採用 [UI UX Pro Max Skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
推薦的「Exaggerated Minimalism + Motion-Driven」風格，
配色以 Indigo `#6366F1` → Violet `#A855F7` → Cyan `#06B6D4` 漸層為主軸，
CSS 寫作遵循 [Will 保哥 CSS Guidelines](https://github.com/doggy8088/CSS-Guidelines) 的 BEM 命名與規範。

## 線上預覽

🔗 **[atayallin.github.io/AtayaHtml](https://atayallin.github.io/AtayaHtml/)**

## 主要特色

| 類別 | 細節 |
|---|---|
| 🎨 **視覺風格** | Glassmorphism 玻璃擬態 / 漸層強調色 / Aurora 動態背景 / Code 終端機卡片 |
| 🌗 **深淺模式** | 一鍵切換 + `localStorage` 記住偏好，淺色模式以冷灰調避免眩光 |
| 🎬 **動畫互動** | Hero 打字機效果、滾動觸發進場、Hover 微互動、進度條動態填充、計數器數字遞增 |
| 📱 **響應式** | 375px ~ 1440px 全斷點適配，手機版漢堡選單、卡片自動堆疊 |
| ⚡ **效能** | `loading="lazy"` 圖片延遲載入、`requestAnimationFrame` 節流捲動事件、IntersectionObserver 取代 scroll 監聽 |
| ♿ **無障礙** | WCAG AA 對比、可見 focus 樣式、`prefers-reduced-motion` 尊重、Skip link、語意化標籤 |
| 🧱 **工程化** | BEM 命名、Design Tokens 集中、CSS 變數系統、目錄索引 `$CONTENTS` |

## 技術棧

### 前端核心

| 技術 | 版本 | 用途 |
|---|---|---|
| **HTML5** | — | 語意化結構、ARIA 屬性、SEO 友善 meta |
| **CSS3** | — | Flexbox / Grid / 自定義屬性 / Container Queries |
| **JavaScript** | ES6+ | DOM 操作、IntersectionObserver、無框架純 Vanilla |
| **Bootstrap** | 5.3.3 | Grid 系統、Container、Utilities |

### 動畫與圖示

| 套件 | 用途 |
|---|---|
| **GSAP 3.12** + ScrollTrigger | 證照 Badges 進場 stagger 動畫 |
| **AOS 2.3** | 卡片、區塊滾動進場 (`fade-up`, `fade-left`, `zoom-in`) |
| **Devicon 2.16** | 技術 stack logo (Vue / TS / Java / Spring Boot 等) |
| **Google Fonts** | Space Grotesk (標題) + Inter (內文) + JetBrains Mono (代碼) + Noto Sans TC |

### 開發工具

- **VS Code** + Live Server
- **Git** + GitHub
- **GitHub Pages** (自動部署)

## 專案結構

```
AtayaHtml/
├── index.html                     # 主頁面（6 大區塊）
├── contact.html                   # 履歷 PDF 瀏覽頁
├── app.js                         # 互動邏輯（主題、打字機、計數器、IO）
├── style/
│   ├── style.css                  # 主要樣式（含 $CONTENTS 索引）
│   ├── style.scss                 # SCSS 源檔（保留歷史）
│   └── bubble.css                 # 舊版泡泡動畫（已停用）
├── 照片/
│   ├── 合成背景圖.png             # Hero 個人照
│   └── projects/                  # 作品集首頁截圖
│       ├── lazybaobao.jpg
│       ├── vue-shop.jpg
│       ├── game-hall.jpg
│       ├── qsdemo.jpg
│       ├── atayahtml.jpg
│       └── japan-food.jpg
├── p3-0資源包/ICONS/              # 本地 SVG 圖示（Angular、AutoCAD、SketchUp...）
├── 履歷pdf/
│   └── 104林家齊(2026前端履歷0514).pdf
├── 作品1/                          # 日本美食推薦網（嵌入式作品）
├── README.md
├── LICENSE
└── .gitignore
```

## 頁面區塊

| 區塊 | ID | 內容重點 |
|---|---|---|
| **00 Hero** | `#hero` | 大標題 + 打字機角色切換（5 種職稱）+ 圓形人像 + Vue/Angular/React 浮動貼紙 + 數字統計 |
| **01 About** | `#about` | 自我介紹 + 跨域整合力／實作驅動／持續學習 三大亮點 + `about.json` 終端機卡片 |
| **02 Skills** | `#skills` | 4 分類技能堆疊（Frontend / Backend / Tools / Design）+ 5 項熟練度自評條 |
| **03 Projects** | `#projects` | 6 個精選作品卡片，含 GitHub 連結、Live Demo、技術 stack 標籤、首頁截圖 |
| **04 Credentials** | `#credentials` | 9 項證照與成就 Pills（AutoCAD、丙乙級電子、TQC、六角學院鐵人完賽…） |
| **05 Contact** | `#contact` | Email CTA、履歷 PDF、GitHub、電話、地點 |

## 作品集連結

| # | 專案 | 技術棧 | 連結 |
|---|---|---|---|
| 01 | **LazyBaoBao 懶飽飽智慧點餐系統** （團隊專案・前端負責人） | Angular 19 · TS · Signals · Spring Boot · MySQL · GSAP · Lottie | [Source](https://github.com/AtayalLin/Angular-Team-Frontend) |
| 02 | **Vue 日式電商 Demo** | Vue 3 · Vite · Pinia · vee-validate + Zod · GitHub Actions | [Live](https://atayallin.github.io/Vueshop-Side-Project-Demo-/) · [Code](https://github.com/AtayalLin/Vueshop-Side-Project-Demo-) |
| 03 | **Vue H5 模擬遊戲大廳** （IGS 面試試題） | Vue 3 · H5 | [Live](https://atayallin.github.io/Igs-test-vue/) · [Code](https://github.com/AtayalLin/Igs-test-vue) |
| 04 | **QSDemo 企業級問卷系統** | Angular 19 · Spring Boot 3.x · MySQL 8.x | [Live](https://atayallin.github.io/Angular-qsdemo/) · [Code](https://github.com/AtayalLin/Angular-qsdemo) |
| 05 | **AtayaHtml 個人作品集** （本站） | HTML5 · BS5 · AOS · GSAP | [Code](https://github.com/AtayalLin/AtayaHtml) |
| 06 | **日本美食推薦網** | HTML · CSS · AOS · RWD | 內嵌於本站 `/作品1/` |

## 設計系統

### 配色 Tokens

```css
/* Dark Mode (default) */
--bg-0: #07090f;          /* 主背景 */
--bg-card: rgba(20, 26, 44, 0.65);
--accent: #6366f1;        /* Indigo */
--accent-2: #06b6d4;      /* Cyan */
--accent-3: #a855f7;      /* Violet */
--accent-gradient: linear-gradient(135deg, #6366f1 0%, #a855f7 45%, #06b6d4 100%);

/* Light Mode */
--bg-0: #eef2f8;          /* 冷灰調，減少眩光 */
--bg-card: #ffffff;       /* 純白卡片 + 陰影 */
--border: rgba(15, 23, 42, 0.12);
```

### 字體系統

- **標題**: `Space Grotesk` + `Noto Sans TC` (weight 600–700)
- **內文**: `Inter` + `Noto Sans TC` (weight 400–500)
- **代碼**: `JetBrains Mono` (weight 400–600)

### 動畫時間

```css
--t-fast: 150ms;
--t-base: 250ms;
--t-slow: 450ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
```

## 本地運行

### 直接開啟

```bash
git clone https://github.com/AtayalLin/AtayaHtml.git
cd AtayaHtml
# 直接用瀏覽器打開 index.html
```

### 推薦：使用 VS Code Live Server

1. 在 VS Code 安裝 `Live Server` 擴展
2. 右鍵 `index.html` → `Open with Live Server`
3. 瀏覽器自動開啟 `http://127.0.0.1:5500/`（含熱重載）

> 此專案為**純靜態網站**，無需 build step、無需 npm install，所有資源（Bootstrap / AOS / GSAP / Devicon / Google Fonts）皆以 CDN 載入。

## 瀏覽器支援

| 瀏覽器 | 支援版本 |
|---|---|
| Chrome / Edge | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| 行動 Safari / Chrome | iOS 14+ / Android 9+ |

> 使用 `backdrop-filter`、`aspect-ratio`、`color-mix`、CSS Custom Properties，
> 不支援上述特性的舊瀏覽器會 graceful degrade 為較簡化的視覺。

## 更新紀錄

### 2026/05/19 — Major Redesign 🎉

- ✨ 全站重新設計，深色為主、Glassmorphism + Motion-Driven 風格
- 🎨 新增深淺模式切換（`localStorage` 持久化偏好）
- ⌨️ Hero 區加入打字機效果（5 種職稱輪播）
- 📊 新增數字計數器、進度條動態填充、IntersectionObserver-driven scroll-spy
- 🖼️ 作品集卡片改用本地首頁截圖，移除 Vite Sample Test
- 🏆 學經歷時間軸改為「證照與成就」獨立區塊
- 📐 套用 [Will 保哥 CSS Guidelines](https://github.com/doggy8088/CSS-Guidelines) BEM 命名規範
- 🎯 套用 [UI UX Pro Max Skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) 設計清單
- 📄 履歷更新為 2026/05/14 版

### 2025/08/24

- 導覽列改用 Bootstrap Columns 版型
- 平板斷點 (769–1024px) 啟用漢堡選單

## 聯絡方式

- 📧 **Email**: [a437777@gmail.com](mailto:a437777@gmail.com)
- ☎️ **Phone**: 0967-187-303
- 🐙 **GitHub**: [@AtayalLin](https://github.com/AtayalLin)
- 📍 **Location**: 高雄市左營區（接受遠端）
- 💼 **求職狀態**: Available for Hire — 前端工程師職缺

## 授權

本專案採用 [MIT License](LICENSE) 授權。

---

⭐ 如果這個專案對您有幫助，歡迎給個 Star！

**Crafted with ❤️ in Kaohsiung, Taiwan**
