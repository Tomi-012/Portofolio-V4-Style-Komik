/* Dev-only verification: every route must return 200 and load with zero console/page/network errors. */
import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE = process.env.CAPTURE_BASE ?? "http://localhost:4322";

const routes = ["/", "/works/kraken-commerce/", "/works/pulseboard/", "/works/hantu-cms/", "/works/sigma-quest/", "/works/warung-pay/", "/works/inkpress/", "/404-example-nonexistent/"];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--disable-gpu", "--hide-scrollbars"],
});

let failures = 0;
for (const route of routes) {
  const page = await browser.newPage();
  const problems = [];
  page.on("console", (m) => {
    if (m.type() === "error" || m.type() === "warning") problems.push(`console.${m.type()}: ${m.text()}`);
  });
  page.on("pageerror", (e) => problems.push(`pageerror: ${e.message}`));
  page.on("requestfailed", (r) => problems.push(`requestfailed: ${r.url()} — ${r.failure()?.errorText}`));
  page.on("response", (r) => {
    if (r.status() >= 400) problems.push(`http ${r.status()}: ${r.url()}`);
  });

  const resp = await page.goto(BASE + route, { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 700));
  const status = resp.status();
  const expect404 = route.includes("404-example");
  const statusOk = expect404 ? status === 404 : status === 200;
  if (!statusOk || problems.length) failures++;
  console.log(
    `${statusOk && problems.length === 0 ? "PASS" : "FAIL"} ${route} [http ${status}]${problems.length ? "\n   " + problems.join("\n   ") : ""}`
  );
  await page.close();
}

await browser.close();
console.log(failures === 0 ? "\nALL ROUTES CLEAN" : `\n${failures} ROUTE(S) WITH PROBLEMS`);
process.exit(failures === 0 ? 0 : 1);
