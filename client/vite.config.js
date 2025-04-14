import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../backend/dist",
    emptyOutDir: true,
  },
  base: "./",
});
