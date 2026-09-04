/* Dev-only: drag/fall/stand/hang/scroll-stick/return-home, all inside viewport. */
import puppeteer from "puppeteer-core";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const b = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1"],
});
const pg = await b.newPage();
await pg.setViewport({ width: 1280, height: 800 });
await pg.goto("http://localhost:4321/", { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 400));

const ok = (v) => (v ? "✓" : "✗");
const pal = () =>
  pg.evaluate(() => {
    const r = document.getElementById("pixel-pal").getBoundingClientRect();
    return { mode: window.__pal.mode, anchor: window.__pal.anchorKind(), x: r.x, y: r.y, w: r.width, h: r.height, vh: window.innerHeight };
  });
const box = () =>
  pg.evaluate(() => {
    const r = document.querySelector("#origin figure").getBoundingClientRect();
    return { left: r.left, right: r.right, top: r.top, bottom: r.bottom };
  });

// instant scrolling for the whole test
await pg.evaluate(() => (document.documentElement.style.scrollBehavior = "auto"));

// center the origin figure
await pg.evaluate(() => {
  const r = document.querySelector("#origin figure").getBoundingClientRect();
  window.scrollTo(0, window.scrollY + r.top - 220);
});
await new Promise((r) => setTimeout(r, 250));

const bx = await box();
console.log("figure box           :", JSON.stringify(bx));

const dragTo = async (tx, ty) => {
  const s = await pal();
  await pg.mouse.move(s.x + s.w / 2, Math.max(4, s.y + 18));
  await pg.mouse.down();
  await pg.mouse.move(tx, ty, { steps: 22 });
  await pg.mouse.up();
  await new Promise((r) => setTimeout(r, 650)); // allow fall to settle
};

// 1. drop above the figure -> falls -> stands on its top edge
await dragTo(bx.left + 90, bx.top - 50);
let s = await pal();
let c1 = Math.abs(s.y + s.h - bx.top) < 8 && s.anchor === "stand";
console.log("1. fall & stand      :", JSON.stringify(s), ok(c1));
await pg.screenshot({ path: ".impeccable/review/pal-stand.png", clip: { x: bx.left - 100, y: bx.top - 120, width: 320, height: 200 } });

// 2. scroll -> glued to the figure top
await pg.evaluate(() => window.scrollBy(0, 130));
await new Promise((r) => setTimeout(r, 300));
const nb = await box();
s = await pal();
const c2 = s.anchor === "stand" && Math.abs(s.y + s.h - nb.top) < 8;
console.log("2. sticks on scroll  :", JSON.stringify(s), ok(c2));

// 3. drag to hang from the figure bottom edge
await dragTo(bx.left + 90, nb.bottom - 16);
s = await pal();
const c3 = s.mode === "hang" && s.anchor === "hang";
console.log("3. hang under edge   :", JSON.stringify(s), ok(c3));
const hb = await box();
await pg.screenshot({ path: ".impeccable/review/pal-hang.png", clip: { x: hb.left - 100, y: hb.bottom - 40, width: 320, height: 190 } });

// 4. double-click -> returns home (bottom of viewport, walking)
s = await pal();
await pg.mouse.click(s.x + s.w / 2, Math.min(s.vh - 10, s.y + s.h - 10), { clickCount: 1 });
await new Promise((r) => setTimeout(r, 150));
await pg.mouse.click(s.x + s.w / 2, Math.min(s.vh - 10, s.y + s.h - 10), { clickCount: 1 });
await new Promise((r) => setTimeout(r, 900));
s = await pal();
const c4 = s.mode === "walk" && s.anchor === null && s.y + s.h >= s.vh - 3;
console.log("4. back home         :", JSON.stringify(s), ok(c4));

console.log("done");
await b.close();
