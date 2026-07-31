import { test, expect } from '@playwright/test';

test('store page', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html')
    await page.locator("//a[text()='Samsung galaxy s6']").click();
    const text = await page.locator("//h2[text()='Samsung galaxy s6']").textContent();
    console.log(text);
    const price = await page.locator("//h3[text()='$360']").textContent();
    console.log(price);

    const productDetails=await page.locator("//p[contains(text(),'Samsung Galaxy S6 ')]").textContent();
    console.log(productDetails);
    await page.locator("//a[text()='Add to cart']").click();

})