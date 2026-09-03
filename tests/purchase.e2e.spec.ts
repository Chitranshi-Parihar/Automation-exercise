import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import testData from "../test-data/testData.json";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { Paymentpage } from "../pages/PaymentPage";

test(" complete Purchase E2E  @regression", async ({ page }) => {
  await page.goto("/");

  const homePage = new HomePage(page);
  await homePage.verifyHomePage();
  await homePage.clickSignupLogin();
  const loginPage = new LoginPage(page);
  await loginPage.login(testData.login.email, testData.login.password);
  await expect(page.getByText("Logged in as")).toBeVisible();
  const productPage = new ProductPage(page);
  await productPage.openProducts();
  await productPage.openProduct();
  await productPage.addToCart();
  const cartPage = new CartPage(page);
  await cartPage.openCartPage();
  await cartPage.proceedToCheckout();
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.placeOrder();
  const paymentPage = new Paymentpage(page);

  await paymentPage.makePayment(
    testData.payment.name,
    testData.payment.cardNumber,
    testData.payment.cvc,
    testData.payment.month,
    testData.payment.year,
  );
  await paymentPage.verifyOrderPlaced();
});
