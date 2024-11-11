import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";

const {env} = process;
const base = env.BASE_URL || "/";

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [vue()],
});
