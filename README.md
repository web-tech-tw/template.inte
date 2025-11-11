# Wings

一個基於 Nuxt、Vite 和 Tailwind CSS，為敏捷開發而生的全端專案範本。

A boilerplate for agile full-stack development, powered by Nuxt, Vite, and Tailwind CSS.

## 系統架構 System Architecture

本專案採用 Nuxt 4 + Vue 3 + Tailwind CSS 打造，使用 Bun 作為開發與編譯工具。

This project is built with Nuxt 4 + Vue 3 + Tailwind CSS, using Bun as the development and build tool.

### 技術棧 Tech Stack

- **Nuxt 4**: 全端 Vue.js 框架，提供 SSR/SSG 支援
  - Full-stack Vue.js framework with SSR/SSG support
- **Vue 3**: 使用 Composition API
  - Using Composition API
- **Vite**: 極速的前端建置工具
  - Lightning-fast frontend build tool
- **@nuxt/ui**: UI 元件庫
  - UI component library
- **@nuxt/image**: 圖片最佳化
  - Image optimization
- **Tailwind CSS**: 工具類優先的 CSS 框架
  - Utility-first CSS framework
- **TypeScript**: 型別安全支援
  - Type safety support

## 系統設定 Setup

### 安裝相依套件 Install Dependencies

本專案使用 Bun 作為套件管理器。

This project uses Bun as the package manager.

請先安裝 [Bun](https://bun.sh/)。

Please install [Bun](https://bun.sh/) first.

該指令會安裝專案所需的相依套件。

This command will install the required dependencies for the project.

```sh
bun install
```

### 開發除錯模式 Development Mode

該指令會啟動開發除錯模式，可配合瀏覽器進行開發。當網頁變動時，會自動重新載入。

This command starts the development server for debugging. It automatically reloads when files change.

```sh
bun run dev
```

### 正式產品模式 Production Build

該指令會將專案編譯成正式產品模式，壓縮檔案並進行最佳化，最後輸出至 `.output` 目錄。

This command compiles the project for production, compresses files, and optimizes them. The output will be in the `.output` directory.

```sh
bun run build
```

### 本機預覽 Local Preview

在本機預覽生產環境編譯後的成果。

Preview the production build locally.

```sh
bun run preview
```

## 專案結構 Project Structure

```tree
├── app/
│   ├── app.vue          # 應用程式進入點
│   ├── assets/          # 靜態資源 (CSS、圖片等)
│   ├── components/      # Vue 元件
│   ├── composables/     # Composition API 函式
│   ├── layouts/         # 佈局模板
│   └── pages/           # 頁面 (自動路由)
├── public/              # 公開靜態檔案
├── nuxt.config.ts       # Nuxt 設定檔
└── package.json         # 專案依賴
```

```tree
├── app/
│   ├── app.vue          # Application entry point
│   ├── assets/          # Static assets (CSS, images, etc.)
│   ├── components/      # Vue components
│   ├── composables/     # Composition API functions
│   ├── layouts/         # Layout templates
│   └── pages/           # Pages (auto-routing)
├── public/              # Public static files
├── nuxt.config.ts       # Nuxt configuration
└── package.json         # Project dependencies
```

## 環境變數 Environment Variables

複製 `.env` 檔案並根據需求修改：

Copy the `.env` file and modify it according to your needs:

```env
NUXT_PUBLIC_HOME_INTE_HOST=https://web-tech.tw
NUXT_PUBLIC_SARA_INTE_HOST=https://web-tech.tw/sara
NUXT_PUBLIC_SARA_TOKEN_NAME=unified_token
```

## 開放原始碼授權 Open Source License

本專案採用 MIT 開放原始碼授權。

This project is licensed under the MIT License.

詳細可參閱 [LICENSE](LICENSE) 檔案。

See the [LICENSE](LICENSE) file for details.

---

&copy; [Taiwan Web Technology Promotion Organization](https://web-tech.tw)
