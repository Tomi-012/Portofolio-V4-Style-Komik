/* Dev-only capture helper: full-page screenshots via the installed Chrome. */
import puppeteer from "puppeteer-core";
import { mkdirSync } from "node:fs";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE = process.env.CAPTURE_BASE ?? "http://localhost:4321";
const OUT = ".impeccable/review";
mkdirSync(OUT, { recursive: true });

const targets = [
  { name: "desktop", width: 1440, url: "/" },
  { name: "mobile", width: 390, url: "/" },
  { name: "work-detail", width: 1440, url: "/works/kraken-commerce/" },
  { name: "user-390-detail", width: 390, url: "/works/kraken-commerce/" },
];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1"],
});

for (const t of targets) {
  const page = await browser.newPage();
  await page.setViewport({ width: t.width, height: 900 });
  await page.goto(BASE + t.url, { waitUntil: "networkidle0" });
  // Force every reveal to its settled state, then let transitions finish.
  await page.evaluate(() => {
    document.querySelectorAll(".reveal, .sfx-pop").forEach((el) => el.classList.add("inked"));
  });
  await new Promise((r) => setTimeout(r, 1600));
  await page.screenshot({ path: `${OUT}/${t.name}.png`, fullPage: true });
  console.log(`captured ${t.name} (${t.width}px) -> ${t.url}`);
  await page.close();
}

await browser.close();
