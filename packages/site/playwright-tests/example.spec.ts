import { test, expect } from '@playwright/test';

test('sets a color', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Click the get started link.
  await page.locator('[data-cy=blue]').click();
  await page.locator('[data-cy=green]').click();
});


test('can buy board', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.locator('[data-cy=blue]').click();
  await page.locator('[data-cy=green]').click();
  await page.locator('[data-cy=AddToCartButton]').click();

  // Wait for any potential network requests or changes after clicking the button
  await page.waitForTimeout(1_000);

  const errorElement = await page.locator('[data-cy=AddToCartButtonError]');
  await expect(errorElement).toHaveCount(0);
})