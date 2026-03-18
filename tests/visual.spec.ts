import { test, expect } from "@playwright/test";

const base = process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000";

test("landing layout check", async ({ page }) => {
  await page.goto(base, { waitUntil: "networkidle" });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(1000);

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(500);
  await page.evaluate(() => window.scrollTo(0, 0));

  const docket = page.locator(".hero-docket");
  await expect(docket).toBeVisible();
  const docketBox = await docket.boundingBox();
  const globeShell = await page.locator(".hero-globe-shell").boundingBox();
  if (docketBox && globeShell) {
    const clipped = docketBox.y + docketBox.height > globeShell.y + globeShell.height + 8;
    expect(clipped).toBeFalsy();
  }

  await page.locator("#booking").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);

  const bookingWrap = page.locator(".booking-wrap");
  const bookingBox = await bookingWrap.boundingBox();
  if (bookingBox) {
    const center = bookingBox.x + bookingBox.width / 2;
    expect(Math.abs(center - 720)).toBeLessThan(40);
  }

  await expect(page.locator("iframe[title='Book a strategy call']")).toBeVisible();

  await page.screenshot({ path: "tests/visual-latest.png", fullPage: true });
});
