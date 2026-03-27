import { expect, test } from "@playwright/test";

const base = process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000";

test("landing page core sections render", async ({ page }) => {
  await page.goto(base, { waitUntil: "domcontentloaded" });
  await page.setViewportSize({ width: 1440, height: 960 });

  await expect(page.locator(".hero-display")).toContainText("Stop the");
  await expect(page.locator(".hero-portrait-card")).toBeVisible();
  await expect(page.locator(".offer-card.is-primary")).toContainText("Full Workflow Diagnostic");
  await expect(page.locator(".promise-grid .promise-card")).toHaveCount(4);
  await expect(page.locator(".comparison-table")).toBeVisible();
  await expect(page.locator(".final-title")).toContainText("Selective Advisory.");

  await page.screenshot({ path: "tests/visual-latest.png", fullPage: true });
});
