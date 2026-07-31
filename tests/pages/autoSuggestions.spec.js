import { test, expect } from '@playwright/test';

test('Auto Suggestions Test', async ({ page }) => {

    await page.goto('https://www.redbus.in/');

    await page.locator('#srcinput').fill('Vij');

    await page.waitForTimeout(2000);

    const suggestions = page.getByRole('button').filter({
        hasText: "Vijayawada"
    });

    const count = await suggestions.count();

    console.log("Total Suggestions:", count);

    for (let i = 0; i < count; i++) {

        const text = (await suggestions.nth(i).textContent())?.trim();

        console.log(`Suggestion ${i + 1}: ${text}`);

        // if (text?.includes('Old RTC Bus Stand')) {

        //     await suggestions.nth(i).click();

        //     console.log("Selected:", text);

        //     break;
        // }
        if (text.includes("Old RTC Bus Stand")) {
            await suggestions.nth(i).click();
            console.log("Selected:", text);
            break;
        }
    }

});