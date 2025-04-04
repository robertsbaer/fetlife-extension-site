const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");

const BASE_URL = "https://fetlifeavailability.top";

const cities = [
  "new-york", "los-angeles", "chicago", "houston", "phoenix",
  "philadelphia", "san-antonio", "san-diego", "dallas", "san-jose",
  "austin", "jacksonville", "san-francisco", "indianapolis",
  "columbus", "fort-worth", "charlotte", "seattle", "denver",
  "el-paso", "washington-dc"
];

const pages = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/features", changefreq: "weekly", priority: 0.8 },
  { url: "/installation", changefreq: "weekly", priority: 0.8 },
  { url: "/privacy", changefreq: "monthly", priority: 0.7 },
  { url: "/terms", changefreq: "monthly", priority: 0.7 },
  { url: "/faq", changefreq: "weekly", priority: 0.8 },
  ...cities.map(city => ({
    url: `/locations/${city}`,
    changefreq: "weekly",
    priority: 0.9
  }))
];

const sitemapStream = new SitemapStream({ hostname: BASE_URL });

pages.forEach((page) => {
  sitemapStream.write(page);
});

sitemapStream.end();

streamToPromise(sitemapStream).then((data) => {
  fs.writeFileSync("./public/sitemap.xml", data.toString());
  console.log("✅ Sitemap generated successfully!");
});
