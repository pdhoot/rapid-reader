import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";
import fs from "fs";
import path from "path";

const hostname = "https://rapidread.io";

// Function to rename the generated sitemap to sitemap-main.xml
const renameSitemap = () => {
  const oldPath = path.resolve(__dirname, "dist/sitemap.xml");
  const newPath = path.resolve(__dirname, "dist/sitemap-main.xml");
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
  }
};

// Function to generate sitemap index
const generateSitemapIndex = () => {
  const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${hostname}/sitemap-main.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${hostname}/blog/sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;

  fs.writeFileSync(
    path.resolve(__dirname, "dist/sitemap.xml"),
    sitemapIndexContent
  );
};

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: hostname,
      outDir: "./dist",
      exclude: ["/blog/**"], // Exclude blog routes from main sitemap
      generateRobotsTxt: true,
      robots: [{ userAgent: "*", allow: "/" }],
    }),
    {
      name: "post-build-sitemap",
      closeBundle: () => {
        renameSitemap();
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
});
