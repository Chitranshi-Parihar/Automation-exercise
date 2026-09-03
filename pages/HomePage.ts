import { Page, Locator, expect } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly logo: Locator;
  readonly signupLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.getByAltText("Website for automation practice");
    this.signupLogin = page.getByRole("link", {
      name: "Signup / Login",
    });
  }

  async verifyHomePage() {
    await expect(this.logo).toBeVisible();
  }

  async clickSignupLogin() {
    await this.signupLogin.click();
  }
}