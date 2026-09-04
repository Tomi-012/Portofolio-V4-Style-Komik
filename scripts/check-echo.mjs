/* Dev-only: verify the VISIBLE echo text updates while the user types. */
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
const echo = () => pg.$eval("#term-echo", (el) => el.textContent);
const shot = (n) =>
  pg.screenshot({ path: `.impeccable/review/echo-${n}.png`, clip: { x: 800, y: 150, width: 560, height: 240 } });

// auto mode is on screen
await new Promise((r) => setTimeout(r, 2500));
console.log("auto echo on screen   :", JSON.stringify(await echo()));

// user types — the ECHO must show it
await pg.click("#term-input");
await pg.type("#term-input", "whoami --help", { delay: 50 });
const typed = await echo();
console.log("user typing echo      :", JSON.stringify(typed), typed === "whoami --help" ? "✓ VISIBLE" : "✗ NOT VISIBLE");
await shot("user");

// auto stays paused
await new Promise((r) => setTimeout(r, 1200));
console.log("still user text       :", JSON.stringify(await echo()));

// idle -> auto resumes on screen
await new Promise((r) => setTimeout(r, 5200));
const resumed = await echo();
console.log("idle -> auto resumes  :", JSON.stringify(resumed), resumed !== "whoami --help" ? "✓" : "✗");
await shot("resumed");

console.log("console errors:", errs.length === 0 ? "NONE" : errs.join("; "));
await browser.close();
