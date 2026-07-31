const { expect } = require('@playwright/test');

class AmazonPage {
  constructor(page) {
    this.page = page;
    this.pd26Link = page.getByRole('link', { name: 'PD26', exact: true });
    this.mobilesLink = page.getByRole('link', { name: 'Mobiles', exact: true });
    this.bestsellersLink = page.getByRole('link', { name: 'Bestsellers' });
    this.sellLink = page.getByRole('link', { name: 'Sell', exact: true });
    this.beautyLink = page.getByRole('link', { name: 'Beauty', exact: true });
    this.luxuryBeautyLink = page.getByRole('link', { name: 'Luxury Beauty' });
  }

  async gotoHome() {
    await this.page.goto('https://www.amazon.in/');
  }

  async expectHomePage() {
    await expect(this.page).toHaveURL('https://www.amazon.in/');
    await expect(this.page).toHaveTitle(/Amazon/);
  }

  async clickPD26() {
    await this.pd26Link.click();
  }

  async gotoProduct() {
    await this.page.goto('https://www.amazon.in/dp/B0GP77JQC5/?_encoding=UTF8&pd_rd_w=rvPgL&content-id=amzn1.sym.e99d43e4-e4e7-4466-8ee0-a9beecda0806&pf_rd_p=e99d43e4-e4e7-4466-8ee0-a9beecda0806&pf_rd_r=ZM0RXG11YJ2V91948Z98&pd_rd_wg=hwc1U&pd_rd_r=cc49249e-7091-4cc3-866b-96a317bf3d43&ref_=pd_hp_d_atf_unk');
  }

  async clickMobiles() {
    await this.mobilesLink.click();
  }

  async clickBestsellers() {
    await this.bestsellersLink.click();
  }

  async clickSell() {
    await this.sellLink.click();
  }

  async clickBeauty() {
    await this.beautyLink.click();
  }

  async clickLuxuryBeauty() {
    await this.luxuryBeautyLink.click();
  }
}

module.exports = { AmazonPage };