# Template INTE - Vue 3 & Vite 前端開發範本

網頁客戶端 | [伺服器端](https://github.com/web-tech-tw/template.recv)

一個基於 Vue 3、Vite 和 Tailwind CSS，為敏捷開發而生的前端專案範本。

A boilerplate for agile frontend development, powered by Vue 3, Vite, and Tailwind CSS.

---

每次從頭開始建構一個新的前端專案，我們是否都需要重複設定 Vite、Vue Router、Tailwind CSS，並處理 ESLint、路徑別名、環境變數等繁瑣配置？

**Template INTE** 正是為了解決這個問題而生。

它是一個「功能齊全 (batteries-included)」的前端專案範本，為您準備好了現代化單頁應用 (SPA) 所需的一切。讓您能立即投入到元件和頁面的開發中，實現真正的敏捷開發。

## ✨ 設計理念

* **現代化技術棧:** 採用 Vite + Vue 3 + Tailwind CSS 的黃金組合，享受極致的開發體驗和建置效能。
* **結構清晰:** 遵循社群最佳實踐，提供合理的目錄結構，易於理解和擴充。
* **開箱即用:** 整合了路由、常用工具和 UI 元件，無需額外配置即可開始開發。

## 🛠️ 技術棧與特色 (What's Inside?)

* **⚡️ 現代化前端框架:**
    * **Vite:** 下一代前端建置工具，提供閃電般的熱模組更新 (HMR) 速度。
    * **Vue 3:** 採用 Composition API，讓程式碼組織更靈活、邏輯更容易複用。
    * **Vue Router:** 官方路由管理器，輕鬆建構多頁面體驗的單頁應用。

* **🎨 樣式與 UI:**
    * **Tailwind CSS:** 一個 Utility-First 的 CSS 框架，讓您能快速建構任何設計，無需離開 HTML。
    * **Heroicons:** 由 Tailwind CSS 團隊打造的精美 SVG 圖示集。
    * **PostCSS & Autoprefixer:** 自動處理 CSS 的瀏覽器前綴，確保兼容性。

* **🛠️ 開發體驗:**
    * **ESLint:** 整合最新的設定風格，確保程式碼品質與一致性。
    * **Husky & lint-staged:** 在 Git 提交 (commit) 前自動執行程式碼檢查，從源頭保證程式碼品質。
    * **Commitlint:** 規範 Git 提交訊息，讓版本歷史更清晰。

* **🔒 客戶端驗證:**
    * **jwt-decode:** 內建輕量級的 JWT 解析工具，方便處理來自後端的 Token。
    * **登入狀態管理範例:** 在 `src/plugins/profile.js` 中提供了處理 Token、解析使用者資訊及登入跳轉的實用範例。

* **🚀 自動化部署:**
    * **GitHub Actions:** 內建持續整合 (CI) 工作流程，能自動將專案編譯並部署到 GitHub Pages。

## 系統需求

* **Node.js:** `v18.x` 或更高版本。

## 🚀 快速開始 (Getting Started)

1.  **使用此範本建立新專案**
    點擊頁面右上角的 `Use this template` > `Create a new repository`。

2.  **複製 (Clone) 您的新專案至本地**
    ```sh
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git)
    cd YOUR_REPOSITORY
    ```

3.  **安裝相依套件**
    ```sh
    npm install
    ```

4.  **設定環境變數 (可選)**
    如果您的 API 後端位址或其他設定需要客製化，可以建立一個 `.env.local` 檔案來覆寫預設值。
    ```env
    # .env.local
    VITE_SARA_INTE_HOST=[http://your-auth-server.com](http://your-auth-server.com)
    VITE_API_BASE_URL=[http://your-api-server.com](http://your-api-server.com)
    ```
    > **注意:** Vite 的環境變數必須以 `VITE_` 開頭才能在客戶端程式碼中被讀取。

5.  **啟動開發伺服器！**
    ```sh
    npm run dev
    ```
    恭喜！您的 Vue 應用程式已在本地啟動，並已具備熱重載功能。

## 📜 常用指令 (Available Scripts)

| 指令 | 說明 |
| :--- | :--- |
| `npm run dev` | 啟動開發伺服器，支援熱模組更新 (HMR)。 |
| `npm run build` | 將專案編譯成適用於生產環境的靜態檔案 (輸出至 `dist` 目錄)。 |
| `npm run preview` | 在本地預覽生產環境編譯後的成果。 |
| `npm run lint` | 檢查所有相關檔案的程式碼風格。 |

## 📁 專案結構

```
├── public/              # 靜態資源，會被直接複製到輸出目錄
├── src/
│   ├── assets/          # 圖片、字型等靜態資源
│   ├── components/      # 可複用的 Vue 元件
│   ├── plugins/         # 插件或工具函式 (如 profile.js)
│   ├── router/          # Vue Router 路由設定
│   ├── views/           # 頁面對應的 Vue 元件
│   ├── App.vue          # 根元件
│   └── main.js          # 應用程式進入點
├── index.html           # 應用程式主 HTML 檔案
├── package.json         # 專案依賴與腳本設定
└── vite.config.js       # Vite 設定檔
```

## 📄 開放原始碼授權

本專案採用 **MIT License** 授權。

---

&copy; [Taiwan Web Technology Promotion Organization (臺灣網際網路技術推廣組織)](https://web-tech.tw)
