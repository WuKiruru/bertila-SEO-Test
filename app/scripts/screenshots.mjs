import { chromium, devices } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, "..", "..", "screenshots");
const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

const PAGES = [
  { path: "/", name: "home" },
  { path: "/aviso-legal", name: "aviso-legal" },
  { path: "/privacidad", name: "privacidad" },
  { path: "/politica-cookies", name: "politica-cookies" },
  { path: "/accesibilidad", name: "accesibilidad" },
];

const VIEWPORTS = [
  {
    label: "desktop",
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36",
  },
  {
    label: "mobile",
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent: devices["iPhone 13"].userAgent,
  },
];

async function dismissCookieBanner(page) {
  // Cookie banner uses localStorage; pre-set "accepted" so banner doesn't show
  await page.addInitScript(() => {
    try {
      localStorage.setItem("bertila-cookies-consent", "accepted");
      localStorage.setItem(
        "bertila-cookies-consent-date",
        new Date().toISOString(),
      );
    } catch {}
  });
}

async function captureFullPage(browser, viewportSpec, pageSpec) {
  const context = await browser.newContext({
    viewport: viewportSpec.viewport,
    deviceScaleFactor: viewportSpec.deviceScaleFactor,
    isMobile: viewportSpec.isMobile ?? false,
    hasTouch: viewportSpec.hasTouch ?? false,
    userAgent: viewportSpec.userAgent,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  await dismissCookieBanner(page);

  const url = `${BASE_URL}${pageSpec.path}`;
  console.log(`→ ${viewportSpec.label.padEnd(8)} ${url}`);
  await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });

  // Force all framer-motion elements visible & disable transitions/animations
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-duration: 0.001s !important;
        animation-delay: 0s !important;
        transition-duration: 0.001s !important;
        transition-delay: 0s !important;
      }
      [style*="opacity:0"],
      [style*="opacity: 0"],
      [style*="opacity:.0"] {
        opacity: 1 !important;
      }
    `,
  });

  // Scroll through to trigger lazy-loaded images and any IntersectionObservers
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const step = 300;
      const tick = () => {
        window.scrollTo(0, y);
        y += step;
        if (y < document.body.scrollHeight + 1000) {
          setTimeout(tick, 120);
        } else {
          window.scrollTo(0, 0);
          setTimeout(resolve, 600);
        }
      };
      tick();
    });
  });

  // After scroll, force any remaining hidden motion elements visible
  await page.evaluate(() => {
    document.querySelectorAll("[style]").forEach((el) => {
      if (el.style.opacity === "0") el.style.opacity = "1";
      if (el.style.transform && el.style.transform !== "none") {
        el.style.transform = "none";
      }
    });
  });

  await page.waitForTimeout(800);

  const file = path.join(
    OUT_DIR,
    `${pageSpec.name}-${viewportSpec.label}.jpg`,
  );
  await page.screenshot({
    path: file,
    fullPage: true,
    type: "jpeg",
    quality: 88,
  });
  console.log(`   saved ${file}`);

  await context.close();
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();
  try {
    for (const viewport of VIEWPORTS) {
      for (const page of PAGES) {
        await captureFullPage(browser, viewport, page);
      }
    }
  } finally {
    await browser.close();
  }
  console.log(`\nScreenshots saved in: ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
