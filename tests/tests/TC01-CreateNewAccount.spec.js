//1.Create a new account with valid email and password combinatio

// Example: Account creation with email + password validation

/// TC01-CreateNewAccount.spec.js
const { test, expect } = require('@playwright/test');

test('Create a new account with valid email and password', async ({ page }) => {
    // Go to the registration page
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');

    // Fill in the form
    await page.fill('input[name="firstname"]', 'Test');
    await page.fill('input[name="lastname"]', 'User');
    await page.fill('input[name="email"]', 'newuser' + Date.now() + '@example.com'); // unique email each run
    await page.fill('input[name="telephone"]', '1234567890');
    await page.fill('input[name="password"]', 'Password123!');
    await page.fill('input[name="confirm"]', 'Password123!');

    // Agree to terms
    await page.check('input[name="agree"]');

    // Submit the form
    await page.click('input[type="submit"]');

    // Verify success (check for "Your Account Has Been Created!" message)
    await expect(page.locator('h1')).toHaveText('Your Account Has Been Created!');
});
