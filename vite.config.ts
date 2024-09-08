import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";
import fs from "fs";
import path from "path";

const hostname = "https://rapidread.io";

// Function to generate sitemap index
const generateSitemapIndex = () => {
  const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${hostname}/sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${hostname}/blog/sitemap.xml</loc>
  </sitemap>
</sitemapindex>`;

  // Write sitemap index to file
  fs.writeFileSync(
    path.resolve(__dirname, "dist/sitemap-index.xml"),
    sitemapIndexContent
  );
};

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: hostname,
      outDir: "./dist",
      generateRobotsTxt: true,
      exclude: ["/blog/**"], // Exclude blog routes from main sitemap
      robots: [{ userAgent: "*", allow: "/" }],
    }),
    {
      name: "generate-sitemap-index",
      closeBundle() {
        generateSitemapIndex();
      },
    },
  ],
  resolve: {
    alias: {
      "@emotion/react": "@emotion/react",
      "@emotion/styled": "@emotion/styled",
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://feed-summarizer.onrender.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
