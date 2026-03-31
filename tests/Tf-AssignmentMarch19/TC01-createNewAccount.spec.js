const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://ecommerce-playground.lambdatest.io/';

// Generate random email
function generateEmail() {
    return `testuser${Date.now()}@mail.com`;
}

test('End-to-End E-commerce Flow', async ({ page }) => {

    const email = generateEmail();
    const password = 'Test@12345';

    // 1. Navigate to site
    await page.goto(BASE_URL);

    // -----------------------------
    // 1. Register Account
    // -----------------------------
    await page.click('text=My account');
    await page.click('text=Register');

    await page.fill('#input-firstname', 'Test');
    await page.fill('#input-lastname', 'User');
    await page.fill('#input-email', email);
    await page.fill('#input-telephone', '1234567890');
    await page.fill('#input-password', password);
    await page.fill('#input-confirm', password);

    await page.check('input[name="agree"]');
    await page.click('input[value="Continue"]');

    await expect(page.locator('h1')).toContainText('Your Account Has Been Created');

    // Logout after registration
    await page.click('text=Continue');
    await page.click('text=My account');
    await page.click('text=Logout');

    // -----------------------------
    // 2. Login
    // -----------------------------
    await page.click('text=My account');
    await page.click('text=Login');

    await page.fill('#input-email', email);
    await page.fill('#input-password', password);
    await page.click('input[value="Login"]');

    await expect(page.locator('h2')).toContainText('My Account');

    // -----------------------------
    // 3. Forgot Password
    // -----------------------------
    await page.click('text=My account');
    await page.click('text=Logout');

    await page.click('text=My account');
    await page.click('text=Login');

    await page.click('text=Forgotten Password');

    await page.fill('#input-email', email);
    await page.click('input[value="Continue"]');

    await expect(page.locator('.alert-success'))
        .toContainText('An email with a confirmation link has been sent');

    // -----------------------------
    // 4. Add Product & Checkout
    // -----------------------------
    await page.goto(BASE_URL);

    // Search product
    await page.fill('input[name="search"]', 'MacBook');
    await page.press('input[name="search"]', 'Enter');

    // Select product
    await page.click('text=MacBook');

    // Add to cart
    await page.click('#button-cart');

    await expect(page.locator('.alert-success'))
        .toContainText('Success');

    // Go to cart
    await page.click('#cart-total');
    await page.click('text=View Cart');

    // Checkout
    await page.click('text=Checkout');

    // Login again during checkout if required
    await page.fill('#input-email', email);
    await page.fill('#input-password', password);
    await page.click('#button-login');

    // Continue checkout steps
    await page.click('#button-payment-address');
    await page.click('#button-shipping-address');
    await page.click('#button-shipping-method');

    await page.check('input[name="agree"]');
    await page.click('#button-payment-method');

    await page.click('#button-confirm');

    // Verify order success
    await expect(page.locator('h1')).toContainText('Your order has been placed');
});