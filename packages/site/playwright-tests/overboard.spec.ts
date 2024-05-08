import { test, expect, Page } from "@playwright/test";

async function selectColor(page: Page, color: "blue" | "green" | "red") {
  await page.locator(`[data-cy=${color}]`).click();
}

async function addToCart(page: Page) {
  await page.locator(`[data-cy=AddToCartButton]`).click();
}

async function verifyAddToCartDidNotFail(page) {
  const errorElement = await page.locator("[data-cy=AddToCartButtonError]");
  await expect(errorElement).toHaveCount(0);
}


// let externalPage: any;

// test.beforeAll(async ({ browser }) => {
//   externalPage = await browser.newPage();
//   await externalPage.goto("http://localhost:3000");
//   await externalPage
//     .evaluate(() => {
//       console.log("beforeAll!");
//     })
//     .catch(() => {});
// });

// test.beforeEach(async ({ page }) => {
//   await page
//     .evaluate(() => {
//       console.log("beforeEach!");
//     })
//     .catch(() => {});
// });

// test.afterAll(async () => {
//   await externalPage
//     .evaluate(() => {
//       console.log("afterAll!");
//     })
//     .catch(() => {});
//   await externalPage.close();
// });

// test.afterEach(async ({ page }) => {
//   await page
//     .evaluate(() => {
//       console.log("afterEach!");
//     })
//     .catch(() => {});
// });

test("select color", async ({ page }) => {
  console.log('test file', process.pid, process.ppid)
  await page.goto("http://localhost:3000");

  await selectColor(page, "blue");
  await selectColor(page, "green");
});

test("can buy board", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await selectColor(page, "blue");
  await selectColor(page, "green");
  await selectColor(page, "blue");
  await addToCart(page);

  // Wait for any potential network requests or changes after clicking the button
  await page.waitForTimeout(1_000);
  await verifyAddToCartDidNotFail(page);
});
