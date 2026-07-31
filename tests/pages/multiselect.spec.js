import{test,expect} from '@playwright/test'

test('Dropdown Test',async({page})=>{ 

await page.goto('https://testautomationpractice.blogspot.com/')

await page.locator('#colors',['blue','red']);
const options=await page.locator('#colors option');
const count=await options.count();
for(let i=0;i<count;i++){
    const optionText=await options.nth(i).textContent();
    //console.log(optionText);
}
console.log(options);
await expect(options).toHaveCount(7);



const optionValues=await page.locator('#colors').textContent();
await expect(optionValues.includes('Bldkjfghue')).toBeFalsy();

})