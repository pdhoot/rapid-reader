import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Resolve the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the robots.txt file in the output directory
const robotsTxtPath = path.resolve(__dirname, "../dist/robots.txt");

// Content of the robots.txt file
const robotsTxtContent = `User-agent: *
Disallow:

Sitemap: https://rapidread.io/sitemap-index.xml
`;

// Write the robots.txt file
try {
  await fs.writeFile(robotsTxtPath, robotsTxtContent, "utf8");
  console.log("robots.txt file generated successfully.");
} catch (err) {
  console.error("Error writing robots.txt:", err);
}
