import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../backend/uploads/build",
    emptyOutDir: true,
  },
  base: "./",
});
