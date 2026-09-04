/* Dev-only: verify interactive terminal — user typing takes over, idle hands it back. */
import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--disable-gpu", "--hide-scrollbars"],
});
const pg = await browser.newPage();
await pg.setViewport({ width: 1440, height: 900 });
const errs = [];
pg.on("pageerror", (e) => errs.push(e.message));

await pg.goto("http://localhost:4322/", { waitUntil: "networkidle0" });
const readVal = () => pg.$eval("#term-input", (el) => el.value);

// 1. auto mode is typing
await new Promise((r) => setTimeout(r, 2500));
const auto1 = await readVal();
console.log("1. auto typing          :", JSON.stringify(auto1), auto1.length > 0 ? "✓" : "✗");

// 2. user clicks the line and types their own text -> auto must pause
await pg.click("#term-input");
await pg.type("#term-input", "whoami --help", { delay: 60 });
const user1 = await readVal();
await new Promise((r) => setTimeout(r, 1200));
const user2 = await readVal();
console.log("2. user types           :", JSON.stringify(user1), user1 === "whoami --help" ? "✓" : "✗");
console.log("3. auto stays paused    :", JSON.stringify(user2), user2 === "whoami --help" ? "✓ (unchanged)" : "✗");

// 4. after 4s idle, auto takes the line back
await new Promise((r) => setTimeout(r, 5200));
const resumed = await readVal();
console.log("4. idle -> auto resumes :", JSON.stringify(resumed), resumed !== "whoami --help" ? "✓" : "✗");

// 5. Enter hands the line back immediately
await pg.type("#term-input", "rm -rf /", { delay: 40 });
await pg.keyboard.press("Enter");
await new Promise((r) => setTimeout(r, 1500));
const afterEnter = await readVal();
console.log("5. Enter -> clears+auto :", JSON.stringify(afterEnter), afterEnter !== "rm -rf /" ? "✓" : "✗");

console.log("console errors:", errs.length === 0 ? "NONE" : errs.join("; "));
await browser.close();
