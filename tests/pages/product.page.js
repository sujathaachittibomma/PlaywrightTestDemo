const { expect } = require('@playwright/test');

class ProductPage {
  constructor(page) {
    this.page = page;
    this.productTitle = page.locator('#productTitle');
    this.addToCartButton = page.getByRole('button', { name: /add to cart/i });
    this.buyNowButton = page.getByRole('button', { name: /buy now/i });
  }

  async expectProductPage() {
    await expect(this.page).toHaveURL(/\/dp\/B0GP77JQC5/);
    await expect(this.productTitle).toBeVisible();
  }

  async expectProductTitleContains(text) {
    await expect(this.productTitle).toContainText(text);
  }

  async expectAddToCartVisible() {
    await expect(this.addToCartButton).toBeVisible();
  }

  async expectBuyNowVisible() {
    await expect(this.buyNowButton).toBeVisible();
  }
}

module.exports = { ProductPage };