import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Resolve the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths to the generated sitemap and the blog's sitemap
const mainSitemapPath = path.resolve(__dirname, "../dist/sitemap.xml");
const sitemapIndexPath = path.resolve(__dirname, "../dist/sitemap-index.xml");

const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://rapidread.io/sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://rapidread.io/blog/sitemap-index.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>
`;

// Write the sitemap index file
try {
  await fs.writeFile(sitemapIndexPath, sitemapIndexContent, "utf8");
  console.log("Sitemap index created successfully.");
} catch (err) {
  console.error("Error writing sitemap index:", err);
}
