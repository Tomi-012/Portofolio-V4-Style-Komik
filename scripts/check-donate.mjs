/* Dev-only: verify donate modal opens with QR image and social links resolve. */
import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE = "http://localhost:4322";

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1"] });
const pg = await browser.newPage();
await pg.setViewport({ width: 1440, height: 900 });

let problems = [];
pg.on("pageerror", (e) => problems.push(`pageerror: ${e.message}`));
pg.on("requestfailed", (r) => problems.push(`requestfailed: ${r.url()}`));
pg.on("response", (r) => { if (r.status() >= 400) problems.push(`http ${r.status()}: ${r.url()}`); });

await pg.goto(BASE + "/", { waitUntil: "networkidle0" });

// social hrefs
for (const label of ["GitHub", "LinkedIn", "Instagram", "X"]) {
  const href = await pg.$eval(`a[aria-label="${label}"]`, (a) => a.getAttribute("href")).catch(() => null);
  console.log(`social ${label}: ${href}`);
}

// open donate modal
await pg.click("#donate-open");
await new Promise((r) => setTimeout(r, 1200));
const dlgOpen = await pg.$eval("#donate-dialog", (d) => d.open);
const imgOk = await pg.$eval("#donate-dialog img", (img) => img.complete && img.naturalWidth > 100).catch(() => false);
console.log("dialog open:", dlgOpen, "| QR image loaded:", imgOk);
await pg.screenshot({ path: ".impeccable/review/donate-modal.png" });

// close via button
await pg.click("#donate-close");
await new Promise((r) => setTimeout(r, 400));
console.log("dialog closed:", !(await pg.$eval("#donate-dialog", (d) => d.open)));

// mobile nav with donate button
await pg.setViewport({ width: 390, height: 844 });
await pg.goto(BASE + "/", { waitUntil: "networkidle0" });
await pg.click("#donate-open");
await new Promise((r) => setTimeout(r, 1200));
await pg.screenshot({ path: ".impeccable/review/donate-modal-mobile.png" });
const mobOpen = await pg.$eval("#donate-dialog", (d) => d.open);
console.log("mobile dialog open:", mobOpen);

console.log(problems.length ? "PROBLEMS:\n" + problems.join("\n") : "NO RUNTIME PROBLEMS");
await browser.close();
