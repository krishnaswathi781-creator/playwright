const { test, expect } = require('@playwright/test');

test('Auto Navigate to OrangeHRM User Management', async ({ page }) => {

    // Step 1: Open OrangeHRM login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Step 2: Login
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    // Step 3: Wait for Dashboard
    await expect(page.locator('h6')).toHaveText('Dashboard');

    // Step 4: Click Admin menu
    await page.getByRole('link', { name: 'Admin' }).click();

    // Step 5: Verify User Management page
    await expect(page.locator('h5')).toHaveText('System Users');

});


