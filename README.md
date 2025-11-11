# 臺灣網際網路技術推廣組織 - 首頁

網頁客戶端 | [伺服器端](https://github.com/web-tech-tw/template.recv)

本系統為本組織的官方首頁，採用 Nuxt 4 框架打造。

## 系統架構

本系統採用 Nuxt 4 + Vue 3 + Tailwind CSS 打造，使用 Bun 作為開發與編譯工具。

### 技術棧

- **Nuxt 4**: 全端 Vue.js 框架，提供 SSR/SSG 支援
- **Vue 3**: 使用 Composition API
- **@nuxt/ui**: UI 元件庫
- **@nuxt/image**: 圖片最佳化
- **Tailwind CSS**: 工具類優先的 CSS 框架
- **TypeScript**: 型別安全支援

## 系統設定

### 安裝相依套件

本專案使用 Bun 作為套件管理器。

請先安裝 [Bun](https://bun.sh/)。

該指令會安裝專案所需的相依套件。

```sh
bun install
```

### 開發除錯模式

該指令會啟動開發除錯模式，可配合瀏覽器進行開發。當網頁變動時，會自動重新載入。

```sh
bun run dev
```

### 正式產品模式

該指令會將專案編譯成正式產品模式，壓縮檔案並進行最佳化，最後輸出至 `.output` 目錄。

```sh
bun run build
```

### 預覽正式產品

在本地預覽生產環境編譯後的成果。

```sh
bun run preview
```

## 專案結構

```
├── app/
│   ├── app.vue          # 應用程式進入點
│   ├── assets/          # 靜態資源 (CSS, 圖片等)
│   ├── components/      # Vue 元件
│   ├── composables/     # Composition API 函式
│   ├── layouts/         # 佈局模板
│   └── pages/           # 頁面 (自動路由)
├── public/              # 公開靜態檔案
├── nuxt.config.ts       # Nuxt 設定檔
└── package.json         # 專案依賴
```

## 環境變數

複製 `.env` 檔案並根據需求修改：

```env
NUXT_PUBLIC_HOME_INTE_HOST=https://web-tech.tw
NUXT_PUBLIC_SARA_INTE_HOST=https://web-tech.tw/sara
NUXT_PUBLIC_SARA_TOKEN_NAME=unified_token
```

## 開放原始碼授權

本專案採用 MIT 開放原始碼授權。

詳細可參閱 [LICENSE](LICENSE) 檔案。

---

&copy; [Taiwan Web Technology Promotion Organization](https://web-tech.tw)
