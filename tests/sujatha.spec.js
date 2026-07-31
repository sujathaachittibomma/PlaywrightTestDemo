const { test } = require('@playwright/test');
const { AmazonPage } = require('./pages/amazon.page');
const { ProductPage } = require('./pages/product.page');

test('amazon navigation with page object model', async ({ page }) => {
  const amazon = new AmazonPage(page);
  const product = new ProductPage(page);

  await amazon.gotoHome();
  await amazon.expectHomePage();

  await amazon.clickPD26();
  await product.expectProductPage();
  await product.expectProductTitleContains('PD26');
  await product.expectAddToCartVisible();
  await product.expectBuyNowVisible();

  await amazon.gotoProduct();
  await product.expectProductPage();

  await amazon.clickMobiles();
  await amazon.clickBestsellers();
  await amazon.clickSell();
  await amazon.clickBestsellers();
  await amazon.clickBeauty();
  await amazon.clickLuxuryBeauty();
});