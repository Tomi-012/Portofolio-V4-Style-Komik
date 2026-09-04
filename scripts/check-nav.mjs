/* Dev-only check: nav anchor links must navigate from a detail page to the home section. */
import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE = "http://localhost:4322";

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--disable-gpu"] });
const pg = await browser.newPage();
await pg.setViewport({ width: 1440, height: 900 });
await pg.goto(`${BASE}/works/kraken-commerce/`, { waitUntil: "networkidle0" });

const href = await pg.$eval('nav a[href*="saga"]', (a) => a.getAttribute("href"));
console.log("nav href from detail page:", href);

await pg.click('nav a[href*="saga"]');
await new Promise((r) => setTimeout(r, 2500));
console.log("after click url:", pg.url());
const sagaTop = await pg.$eval("#saga", (el) => Math.abs(el.getBoundingClientRect().top));
console.log("#saga distance from viewport top:", `${Math.round(sagaTop)}px`, sagaTop < 300 ? "(VISIBLE ✓)" : "(TOO FAR ✗)");

await pg.click("header a");
await new Promise((r) => setTimeout(r, 2000));
const scrollY = await pg.evaluate(() => Math.round(window.scrollY));
console.log("after logo click url:", pg.url(), "| scrollY:", scrollY, scrollY < 100 ? "(AT TOP ✓)" : "(✗)");

await browser.close();
