import { Page, Locator, expect } from "@playwright/test";

export class Paymentpage {
  readonly page: Page;
  readonly nameOnCard: Locator;
  readonly cardNumber: Locator;
  readonly cvc: Locator;
  readonly expiryMonth: Locator;
  readonly expiryYear: Locator;
  readonly payButton: Locator;
  readonly orderPlacedMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameOnCard = page.locator('[data-qa="name-on-card"]');
    this.cardNumber = page.locator('[data-qa="card-number"]');
    this.cvc = page.getByPlaceholder("ex. 311");
    this.expiryMonth = page.getByPlaceholder("MM");
    this.expiryYear = page.getByPlaceholder("YYYY");
    this.payButton = page.getByRole("button", {
      name: "Pay and Confirm Order",
    });
    this.orderPlacedMessage = page.locator('[data-qa="order-placed"]');
  }
  async makePayment(
    name: string,
    cardNumber: string,
    cvc: string,
    month: string,
    year: string,
  ) {
    await this.nameOnCard.fill(name);
    await this.cardNumber.fill(cardNumber);
    await this.cvc.fill(cvc);
    await this.expiryMonth.fill(month);
    await this.expiryYear.fill(year);
    await this.payButton.click();
  }
  async verifyOrderPlaced() {
    await expect(this.orderPlacedMessage).toBeVisible();
  }
}
