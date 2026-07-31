//const {test,expect}=require('@playwright/test');
import { test, expect } from '@playwright/test'

test('Locators', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    //await page.locator('locator').click();
    await page.click('id=login2');
    await page.locator('id=loginusername').type('pavanol');
    await page.locator('id=loginpassword').fill('test@123');
    await page.click("//button[@onclick='logIn()']");
    const logOut = await page.locator('id=logout2')
    await expect(logOut).toBeVisible();

    const links = await page.locator('a');
    const count = await links.count();
    for (let i = 0; i < count; i++) {
        const linkText = await links.nth(i).textContent();
        console.log(linkText);


    }


    const products = await page.locator('h4.card-title a')
    const productCount = await products.count();
    for (let i = 0; i < productCount; i++) {
        const productText = await products.nth(i).textContent();
        console.log(productText);




    }
    await page.close();





})