import puppeteer from "puppeteer-core";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const b = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=2"],
});
const pg = await b.newPage();
await pg.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });
await pg.goto("http://localhost:4321/", { waitUntil: "networkidle0" });
// freeze him for the shot: force position + walk frame via the live state
await new Promise((r) => setTimeout(r, 600));
const H = await pg.evaluate(() => window.innerHeight);
await pg.screenshot({ path: ".impeccable/review/pal-walk.png", clip: { x: 0, y: H - 130, width: 360, height: 130 } });
await b.close();
console.log("captured", H);
