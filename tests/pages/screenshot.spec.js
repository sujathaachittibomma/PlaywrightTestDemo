    const {test,expect}=require('@playwright/test')

    test('Home Page',async( {page})=>{


        await page.goto('https://demoblaze.com/index.html');
        const pageTitle=await page.title();
        console.log('page title is ',pageTitle)
        await page.screenshot({path: 'tests/screenshots/' + Date.now() + '_homepage.png',fullpage:true});
        console.log(await page.title());
        console.log(page.url());
       await expect(page).toHaveTitle('STORE');
        const pageUrl= page.url();
        console.log('page url  is ',pageUrl)

        await expect(page).toHaveURL('https://demoblaze.com/index.html')
        
        page.close();

    })