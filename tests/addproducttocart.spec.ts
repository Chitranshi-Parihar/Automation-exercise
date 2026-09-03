import { test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import testData from "../test-data/testData.json";
import { ProductPage } from "../pages/ProductPage";

test("Add Product To Cart @sanity", async ({ page }) => {
  await page.goto("/");
  const homePage = new HomePage(page);
  await homePage.clickSignupLogin();
  const loginPage = new LoginPage(page);
  await loginPage.login(testData.login.email, testData.login.password);
  const productPage = new ProductPage(page);

  await productPage.openProducts();
  await productPage.openProduct();
  await productPage.addToCart();
});
