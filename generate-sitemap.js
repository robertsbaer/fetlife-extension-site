const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");

const BASE_URL = "https://fetlifeavailability.top"; // Change to your website URL

// Define your site's pages
const pages = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
];

// Generate the sitemap
const sitemapStream = new SitemapStream({ hostname: BASE_URL });

pages.forEach((page) => {
  sitemapStream.write(page);
});

sitemapStream.end();

streamToPromise(sitemapStream).then((data) => {
  fs.writeFileSync("./public/sitemap.xml", data.toString());
  console.log("✅ Sitemap generated successfully!");
});
