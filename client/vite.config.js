import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:1337",
      "/api2": "http:https://procolis.com/api_v1",
    },
  },
  assetsInclude: ["**/*.webp"],
});
