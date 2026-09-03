import { Page, Locator } from "@playwright/test";

export class ProductPage {
  readonly page: Page;
  readonly productLink: Locator;
  readonly viewProduct: Locator;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productLink = page.getByRole("link", { name: "Products" });
    this.viewProduct = page.getByRole("link", { name: "View Product" }).nth(1);
    this.addToCartButton = page.getByRole("button", { name: "Add to cart" });
  }
  async openProducts() {
    await this.productLink.click();
  }
  async openProduct() {
    await this.viewProduct.click();
  }
 async addToCart() {
    await this.addToCartButton.click();
  }
}
