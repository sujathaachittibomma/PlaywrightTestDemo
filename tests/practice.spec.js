import{test,expect} from '@playwright/test';

test('Locators practice ',async({page})=>{

await page.goto('https://demoblaze.com/index.html');
const pageTitle=await page.title();
console.log(pageTitle);
const productStore=await page.locator("//a[contains(text(),'STORE')]").textContent();
console.log(productStore);
const verifyContact=await page.locator("//a[contains(text(),'Contact')]").textContent();
console.log(verifyContact);
const verifyAbout=await page.locator("//a[contains(text(),'About us')]").textContent();
console.log(verifyAbout);
const verifyLaptop=await page.locator("//a[contains(text(),'Laptops')]").textContent();
console.log(verifyLaptop);



})