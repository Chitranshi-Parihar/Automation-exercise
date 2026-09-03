import { Page, Locator } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly cartLink: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartLink = page.getByRole("link", { name: " Cart" });
    this.checkoutButton = page.getByText("Proceed To Checkout");
  }
  async openCartPage() {
    await this.cartLink.click();
  }
  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}
