// const { test, expect } = require('@playwright/test');

// test('OrangeHRM User Management Navigation', async ({ page }) => {

//     // Open URL
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//     // Login
//     await page.getByPlaceholder('Username').fill('Admin');
//     await page.getByPlaceholder('Password').fill('admin123');
//     await page.getByRole('button', { name: 'Login' }).click();

//     // Verify Dashboard
//     await expect(page.locator('h6')).toHaveText('Dashboard');

//     // Navigate to Admin
//     await page.getByRole('link', { name: 'Admin' }).click();

//     // Verify User Management page
//     await expect(page.locator('h5')).toHaveText('System Users');
//     // Example: Search User
//     await page.getByPlaceholder('Search').fill('Admin');
//     await page.getByRole('button', { name: 'Search' }).click();  

// });    


const { test, expect } = require('@playwright/test');

test('TC01 - Navigate to User Management', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Login
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    // Navigate to Admin
    await page.getByRole('link', { name: 'Admin' }).click();

    // Validation
    await expect(page.getByRole('heading', { name: 'System Users' }))
        .toBeVisible();
});
