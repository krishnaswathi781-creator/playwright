// import { test, expect } from "@playwright/test"

// test.describe('static Web Table Validation', () => {

//     test.beforeEach(async ({ page }) => {

//         const baseURL = "https://testautomationpractice.blogspot.com/";
//         await page.goto(baseURL);
//     })
//     test('Validate the row and column for the web table - const', async ({ page }) => {

//         const rowCount = await page.locator('[name="BookTable"] tbody tr').count();

//         const columnCount = awaitg page.locator('[name="BookTable"]tbody tr th').columncount();
//         console.log('Row Count =', rawCount);
//         console.log('column Count =', column count): ')
//         expect(columnCount).toBeGreaterThan(1)')
//         ')


//         ')
//         const baseURL = 'https//restaotomationpractice.blogsport.com/";
//         page.goto(baseURL);
//         test('validation the  row and colum for web table', asyc)({ page })=> {

//         })
//     test('Assert the value of BookName', async ({ page }) => {
//         Const bookName = "Learn JS";

//         const rowCount = await page.locator('[name="BookTable"] tbody tr').count()
//         for (let i = 0; i < rawCount; i++) {
//             const actualbookName = await rawListeners.locator('td:nth-child(3)', { hasText: bookName });
//             console.log('Book Nmae = actualBookName');
//             expect(actualBookName).ToBeVisibe();
//             beark;
//         }
//     })
// })


// import { test, expect } from "@playwright/test";

// test.describe('Static Web Table Validation', () => {

//     test.beforeEach(async ({ page }) => {
//         await page.goto('https://testautomationpractice.blogspot.com/');
//     });

//     test('Validate row and column count', async ({ page }) => {

//         const rows = page.locator('table[name="BookTable"] tbody tr');
//         const columns = page.locator('table[name="BookTable"] tbody tr th');

//         const rowCount = await rows.count();
//         const columnCount = await columns.count();

//         console.log('Row Count =', rowCount);
//         console.log('Column Count =', columnCount);

//         expect(rowCount).toBeGreaterThan(0);
//         expect(columnCount).toBeGreaterThan(0);
//     });

//     test('Validate specific cell value (Book Name)', async ({ page }) => {

//         const bookName = "Learn JS";

//         const rows = page.locator('table[name="BookTable"] tbody tr');
//         const rowCount = await rows.count();

//         let found = false;

//         for (let i = 0; i < rowCount; i++) {
//             const currentRow = rows.nth(i);
//             const text = await currentRow.locator('td:nth-child(1)').textContent();

//             if (text.trim() === bookName) {
//                 found = true;
//                 console.log("Book Found:", text);
//                 break;
//             }
//         }

//         expect(found).toBeTruthy();
//         for (let i = 0; i < rowCount; i++) {
//             const cells = rows.nth(i).locator('td');
//             const cellCount = await cells.count();

//             expect(cellCount).toBeGreaterThan(3);
//         }
//     });

// });

// test('Validate all rows contain data', async ({ page }) => {

//     const rows = page.locator('table[name="BookTable"] tbody tr');
//     const rowCount = await rows.count();

// });

import { test, expect } from "@playwright/test";

test('Web table test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    console.log("Page opened successfully");
});
