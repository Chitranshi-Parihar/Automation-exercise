import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import testData from "../test-data/testData.json";

test("login page @smoke", async ({ page }) => {
  await page.goto("/");
  const homePage = new HomePage(page);
  await homePage.clickSignupLogin();
  const loginPage = new LoginPage(page);
  await loginPage.login(testData.login.email, testData.login.password);
  await expect(page.getByText("Logged in as ")).toBeVisible();
  // Updated login test
});
