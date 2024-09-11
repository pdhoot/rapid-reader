import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";
import { parseString, Builder } from "xml2js";
import { promisify } from "util";

const parseStringPromise = promisify(parseString);

// Resolve the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the generated sitemap index
const sitemapIndexPath = path.resolve(__dirname, "../dist/sitemap-index.xml");

// URLs for sitemaps
const mainSitemapUrl = "https://rapidread.io/sitemap.xml";
const blogSitemapIndexUrl = "https://rapidread.io/blog/sitemap-index.xml";

async function fetchBlogSitemaps() {
  try {
    const response = await axios.get(blogSitemapIndexUrl);
    const blogSitemapIndex = await parseStringPromise(response.data);
    return blogSitemapIndex.sitemapindex.sitemap.map(
      (sitemap) => sitemap.loc[0]
    );
  } catch (error) {
    console.error("Error fetching blog sitemaps:", error);
    return [];
  }
}

async function generateSitemapIndex() {
  try {
    const blogSitemaps = await fetchBlogSitemaps();

    const sitemapIndex = {
      sitemapindex: {
        $: { xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9" },
        sitemap: [
          {
            loc: [mainSitemapUrl],
            lastmod: [new Date().toISOString()],
          },
          ...blogSitemaps.map((url) => ({
            loc: [url],
            lastmod: [new Date().toISOString()],
          })),
        ],
      },
    };

    const builder = new Builder();
    const xml = builder.buildObject(sitemapIndex);

    await fs.writeFile(sitemapIndexPath, xml, "utf8");
    console.log("Sitemap index created successfully.");
  } catch (error) {
    console.error("Error generating sitemap index:", error);
  }
}

// Main execution
(async () => {
  try {
    await generateSitemapIndex();
  } catch (err) {
    console.error("Error in sitemap generation:", err);
  }
})();
