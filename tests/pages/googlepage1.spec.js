import {test,expect} from '@playwright/test';

test('Homepage',async({page})=>{

await page.goto('https://amazon.in/');
const pageTitle=await page.title();
console.log('page titleis ',pageTitle);
expect(await page.title()).toContain("Amazon.in");


});