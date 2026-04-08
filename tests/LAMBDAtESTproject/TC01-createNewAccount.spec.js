const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://ecommerce-playground.lambdatest.io/';

function generateEmail() {
    return `testuser${Date.now()}@mail.com`;
}

test('End-to-End E-commerce Flow', async ({ page }) => {

    const email = generateEmail();
    const password = 'Test@12345';

    await page.goto(BASE_URL);

    // ✅ Use stable locator
    const myAccount = page.getByRole('link', { name: 'My account' }).first();
    await myAccount.click();
    await page.getByRole('link', { name: 'Register' }).click();

    await page.fill('#input-firstname', 'Test');
    await page.fill('#input-lastname', 'User');
    await page.fill('#input-email', email);
    await page.fill('#input-telephone', '1234567890');
    await page.fill('#input-password', password);
    await page.fill('#input-confirm', password);

    await page.check('input[name="agree"]');
    await page.click('input[value="Continue"]');

    await expect(page.getByRole('heading', { level: 1 }))
        .toContainText('Your Account Has Been Created');

    // Logout
    await page.getByRole('link', { name: 'Continue' }).click();
    await myAccount.click();
    await page.getByRole('link', { name: 'Logout' }).click();

    // Login
    await myAccount.click();
    await page.getByRole('link', { name: 'Login' }).click();

    await page.fill('#input-email', email);
    await page.fill('#input-password', password);
    await page.click('input[value="Login"]');

    await expect(page.getByRole('heading', { level: 2 }))
        .toContainText('My Account');
});

