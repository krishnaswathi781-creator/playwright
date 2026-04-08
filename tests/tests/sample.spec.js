
import { test, expect } from '@playwright/test';
// new Account Registration test case

test('register new account', async ({ page }) => {

    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');

    await page.getByPlaceholder('First Name').fill('Swathi');
    await page.getByPlaceholder('Last Name').fill('Test');

    const email = `test${Date.now()}@gmail.com`;
    await page.getByPlaceholder('E-Mail').fill(email);

    await page.getByPlaceholder('Telephone').fill('9876543210');

    await page.locator('#input-password').fill('Test@123');
    await page.locator('#input-confirm').fill('Test@123');

    await page.locator('label[for="input-agree"]').click();

    await page.locator('input[value="Continue"]').click();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByText('Your Account Has Been Created')).toBeVisible();

});

// Add to Cart test in the lambdarest site
test('add to cart test', async ({ page }) => {

    await page.goto('https://ecommerce-playground.lambdatest.io/');

    // ✅ fix strict mode
    await page.getByRole('textbox', { name: 'Search For Products' }).first().fill('Phone');

    // await page.locator('button[type="submit"]').click();
    await page.getByRole('button', { name: 'Search' }).first().click();

    // ✅ wait for results
    await page.waitForLoadState('domcontentloaded');

    await page.locator('.product-thumb').first().click();
    await page.getByRole('button', { name: 'Add to Cart' }).click();



    await expect(page.locator('.alert-success')).toBeVisible();

});