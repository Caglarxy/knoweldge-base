import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    outDir: resolve(currentDir, "../vendor/vue-document-preview"),
    emptyOutDir: true,
    sourcemap: false,
    cssCodeSplit: false,
    lib: {
      entry: resolve(currentDir, "src/main.js"),
      formats: ["es"],
      fileName: () => "preview.js",
      cssFileName: "preview",
    },
    rollupOptions: {
      output: {
        entryFileNames: "preview.js",
        assetFileNames: "preview.[ext]",
        chunkFileNames: "chunks/[name]-[hash].js",
      },
    },
  },
});
