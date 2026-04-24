import { expect, test } from "@playwright/test";

const base = process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000";

test("landing page core sections render", async ({ page }) => {
  await page.goto(base, { waitUntil: "domcontentloaded" });
  await page.setViewportSize({ width: 1440, height: 960 });

  await expect(page.locator(".hero-display")).toContainText("Find where your business actually needs leverage.");
  await expect(page.locator(".hero-portrait-card")).toBeVisible();
  await expect(page.locator(".audit-area-card")).toHaveCount(5);
  await expect(page.locator(".use-case-card")).toHaveCount(5);
  await expect(page.locator(".difference-card")).toHaveCount(4);
  await expect(page.locator(".final-title")).toContainText("Before you automate, diagnose.");

  await page.screenshot({ path: "tests/visual-latest.png", fullPage: true });
});
