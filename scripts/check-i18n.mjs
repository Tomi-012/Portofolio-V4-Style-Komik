/* Dev-only: verify i18n toggle navigation + ID page content. */
import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE = "http://localhost:4322";
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1"],
});
const pg = await browser.newPage();
await pg.setViewport({ width: 1440, height: 900 });
const errs = [];
pg.on("pageerror", (e) => errs.push(e.message));

const label = (ok) => (ok ? "✓" : "✗");

// 1. EN home -> click ID toggle
await pg.goto(`${BASE}/`, { waitUntil: "networkidle0" });
const toggleHref = await pg.$eval('a[aria-label="Switch language"]', (a) => a.getAttribute("href"));
console.log("1. EN home toggle href :", toggleHref, toggleHref === "/id/" ? label(true) : label(false));
await pg.click('a[aria-label="Switch language"]');
await new Promise((r) => setTimeout(r, 800));
console.log("2. landed on           :", pg.url());
const heroTitle = await pg.$eval("#top h1 + p, #top .caption-box", () => document.querySelector("html").lang);
const hasIDText = await pg.evaluate(() => document.body.textContent.includes("Baca saganya") && document.body.textContent.includes("BAB 01"));
console.log("3. html lang + ID text :", await pg.evaluate(() => document.documentElement.lang), hasIDText ? label(true) : label(false));

// 2. ID home -> toggle back to EN
const backHref = await pg.$eval('a[aria-label="Ganti bahasa"]', (a) => a.getAttribute("href"));
console.log("4. ID home toggle href :", backHref, backHref === "/" ? label(true) : label(false));

// 3. From EN detail page, toggle should go to ID detail
await pg.goto(`${BASE}/works/kraken-commerce/`, { waitUntil: "networkidle0" });
const detailToggle = await pg.$eval('a[aria-label="Switch language"]', (a) => a.getAttribute("href"));
console.log("5. EN detail toggle    :", detailToggle, detailToggle === "/id/works/kraken-commerce/" ? label(true) : label(false));
await pg.click('a[aria-label="Switch language"]');
await new Promise((r) => setTimeout(r, 800));
const idDetailOk = pg.url().endsWith("/id/works/kraken-commerce/") && (await pg.evaluate(() => document.body.textContent.includes("MASALAHNYA")));
console.log("6. ID detail loaded    :", pg.url(), idDetailOk ? label(true) : label(false));

// 4. ID detail nav links stay on /id/
const idNav = await pg.$eval('nav a[href*="saga"]', (a) => a.getAttribute("href"));
console.log("7. ID detail nav link  :", idNav, idNav === "/id/#saga" ? label(true) : label(false));

// 5. screenshot ID home
await pg.goto(`${BASE}/id/`, { waitUntil: "networkidle0" });
await pg.evaluate(() => document.querySelectorAll(".reveal,.sfx-pop").forEach((el) => el.classList.add("inked")));
await new Promise((r) => setTimeout(r, 1200));
await pg.screenshot({ path: ".impeccable/review/id-home.png", fullPage: true });
console.log("8. screenshot saved    : id-home.png");

console.log("console errors:", errs.length === 0 ? "NONE" : errs.join("; "));
await browser.close();
