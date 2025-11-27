import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    target: "esnext",
    cssCodeSplit: false, // Merge CSS into JS
    assetsInlineLimit: 100000000, // Large limit to inline assets
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
    minify: "terser", // Ensures JS and CSS are minified
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
