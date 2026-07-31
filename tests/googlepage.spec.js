const { test, expect } = require('@playwright/test')

test('googe page', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    const pageTitle = await page.title();
    console.log('page title is', pageTitle);
    await expect(page).toHaveTitle('Amazon.in');
    //await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')

    const pageUrl = page.url();
    console.log('page has url', pageUrl);
    await expect(page).toHaveURL('https://www.amazon.in/')
    await page.locator("//button[@type='submit']").click();
    await page.locator("//input[@id='twotabsearchtextbox']").fill('Samsung s25');
    // const suggestions = page.locator(".s-suggestion");

    //const suggestions = page.locator("//div[@role='button' and contains(@class,'s-suggestion')]");
    const suggestions = page.locator("div.s-suggestion");

    await expect(suggestions.first()).toBeVisible();
    const count = await suggestions.count();

    console.log("Total Suggestions: " + count);

    for (let i = 0; i < count; i++) {
        const dropDownText = await suggestions.nth(i).textContent();
        console.log(dropDownText);
        expect(dropDownText.toLowerCase()).toContain("samsung");
    }


    //page.close();



})