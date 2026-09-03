import { test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("Verify Home Page @smoke", async ({ page }) => {
  await page.goto("/");
  const homePage = new HomePage(page);
  await homePage.verifyHomePage();
});
