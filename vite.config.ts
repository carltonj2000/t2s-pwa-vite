import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";

export default defineConfig({
  plugins: [ViteEjsPlugin()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "[name][extname]",
        chunkFileNames: "[name].js",
        entryFileNames: "[name].js",
      },
    },
  },
});
