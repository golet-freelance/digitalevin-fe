import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://104.248.45.5:8080",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
