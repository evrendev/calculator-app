import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import { manualChunksPlugin } from "vite-plugin-webpackchunkname";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/calculator-app",
  plugins: [vue(), manualChunksPlugin(), svgLoader()],
  filenameHashing: false,
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 3000,
    hot: true,
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: "static/chunks/[name]-[hash].js",
        entryFileNames: "static/entries/[name]-[hash].js",
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? "")) {
            return "assets/images/[name]-[hash][extname]";
          }

          if (/\.css$/.test(name ?? "")) {
            return "assets/css/[name]-[hash][extname]";
          }

          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return "assets/[name]-[hash][extname]";
        },
      },
    },
    sourcemap: false,
    target: "esnext",
  },
});
