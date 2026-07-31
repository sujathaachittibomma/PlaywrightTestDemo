import{test,expect} from '@playwright/test'

test('Dropdown Test',async({page})=>{ 

await page.goto('https://testautomationpractice.blogspot.com/')
//await page.locator('#country' ).selectOption('India');
//await page.locator('#country' ).selectOption({label:'Japan'});
//await page.locator('#country' ).selectOption({value:'brazil'});
//await page.locator('#country' ).selectOption({index:8});

//assertions
//const verifyCountry=await page.locator('#country option' ).allTextContents();
//await expect(verifyCountry).toHaveValue('usa');
//await expect(verifyCountry).toHaveCount(10);



//const countries = verifyCountry.map(country => country.trim());

//expect(countries.includes('India')).toBeTruthy();
//expect(countries).not.toContain('paris');

const options=await page.locator('#country option');
for(let i=0;i<await options.count();i++){
    if(await options.nth(i).textContent()=='India'){
        await options.nth(i).click();
        break;
    }
}


})