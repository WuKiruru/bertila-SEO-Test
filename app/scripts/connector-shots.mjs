import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, "..", "..", "screenshots");
const BASE_URL = "http://localhost:3000";

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();

  await page.addInitScript(() => {
    try {
      localStorage.setItem("bertila-cookies-consent", "accepted");
    } catch {}
  });

  await page.goto(BASE_URL, { waitUntil: "networkidle" });

  // Force everything visible (override framer-motion hidden states)
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-duration: 0.001s !important;
        transition-duration: 0.001s !important;
      }
      [style*="opacity:0"], [style*="opacity: 0"] {
        opacity: 1 !important;
      }
    `,
  });

  // Scroll through to trigger any in-view animations
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const step = 300;
      const tick = () => {
        window.scrollTo(0, y);
        y += step;
        if (y < document.body.scrollHeight + 1000) setTimeout(tick, 120);
        else {
          window.scrollTo(0, 0);
          setTimeout(resolve, 500);
        }
      };
      tick();
    });
  });

  await page.evaluate(() => {
    document.querySelectorAll("[style]").forEach((el) => {
      if (el.style.opacity === "0") el.style.opacity = "1";
      if (el.style.transform && el.style.transform !== "none") {
        el.style.transform = "none";
      }
    });
  });

  // Hide the fixed header so it doesn't overlap section screenshots
  await page.addStyleTag({
    content: `header[role="banner"] { display: none !important; }`,
  });

  await page.waitForTimeout(500);

  const sections = [
    { selector: "#services", file: "connector-servicios.jpg" },
    { selector: "#testimonials", file: "connector-clientes.jpg" },
  ];

  for (const s of sections) {
    const el = page.locator(s.selector);
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    const file = path.join(OUT_DIR, s.file);
    await el.screenshot({ path: file, type: "jpeg", quality: 90 });
    console.log(`Saved ${file}`);
  }

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
