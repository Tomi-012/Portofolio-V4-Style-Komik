/* Dev-only: verify the terminal typing effect types and changes over time. */
import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1"],
});
const pg = await browser.newPage();
await pg.setViewport({ width: 1440, height: 900 });
const errs = [];
pg.on("pageerror", (e) => errs.push(e.message));

await pg.goto("http://localhost:4322/", { waitUntil: "networkidle0" });

const readType = () => pg.$eval("#term-type", (el) => el.textContent);
const snap = () =>
  pg.screenshot({
    path: `.impeccable/review/terminal-snap.png`,
    clip: { x: 800, y: 150, width: 560, height: 240 },
  });

await new Promise((r) => setTimeout(r, 2600));
const t1 = await readType();
await snap();

await new Promise((r) => setTimeout(r, 4000));
const t2 = await readType();

await new Promise((r) => setTimeout(r, 6000));
const t3 = await readType();

console.log("t+2.6s :", JSON.stringify(t1));
console.log("t+6.6s :", JSON.stringify(t2));
console.log("t+12.6s:", JSON.stringify(t3));
console.log(
  "typing works:",
  t1 !== t2 || t2 !== t3 ? "YES (text changes over time)" : "NO"
);
console.log("console errors:", errs.length === 0 ? "NONE" : errs.join("; "));
await browser.close();
