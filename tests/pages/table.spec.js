// tablespec.js
const { test, expect } = require('@playwright/test');

test('Handle WebTable with Pagination', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Capture the table
  const table = page.locator('#productTable');

  // ✅ Count columns
//   const columns = table.locator('thead tr th');
//   console.log('Number of columns:', await columns.count());
//   await expect(await columns.count()).toBe(4);

//   // ✅ Count rows
//   const rows = table.locator('tbody tr');
//   console.log('Number of rows:', await rows.count());
//   await expect(await rows.count()).toBe(5);

//   // ✅ Select specific product (e.g., Product 4)
//   const matchRow = rows.filter({
//     has: page.locator('td'),
//     hasText: 'Product 4'
//   });
//   await matchRow.locator('input').check();
//   await page.waitForTimeout(3000);

//   // ✅ Reusable function to select multiple products
//   async function selectProduct(rows, page, name) {
//     const matchRow = rows.filter({
//       has: page.locator('td'),
//       hasText: name
//     });
//     await matchRow.locator('input').check();
//   }

//   // Call reusable function
//   await selectProduct(rows, page, 'Product 1');
//   await selectProduct(rows, page, 'Product 3');
//   await selectProduct(rows, page, 'Product 5');
//   await page.waitForTimeout(3000);

//   // ✅ Print all product details from first page
//   for (let i = 0; i < await rows.count(); i++) {
//     const row = rows.nth(i);
//     const tds = row.locator('td');
//     for (let j = 0; j < await tds.count() - 1; j++) {
//       console.log(await tds.nth(j).textContent());
//     }
//   }

  // ✅ Handle pagination: read data from all pages
  const pages = page.locator('.pagination li a');
  console.log('Number of pages:', await pages.count());

  for (let p = 0; p < await pages.count(); p++) {
    if (p > 0) {
      await pages.nth(p).click();
    }
    const rowsPerPage = table.locator('tbody tr');
    for (let i = 0; i < await rowsPerPage.count(); i++) {
      const row = rowsPerPage.nth(i);
      const tds = row.locator('td');
      for (let j = 0; j < await tds.count() - 1; j++) {
        console.log(await tds.nth(j).textContent());
      }
    }
    await page.waitForTimeout(2000);
  }
});
