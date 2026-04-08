import { test, expect } from '@playwright/test';

test('Update Nationality - Albanian', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');

    // Navigate
    await page.click('text=Admin');
    await page.click('text=Nationalities');

    // Click ONLY Edit (pencil icon)
    const editBtn = page.locator(
        'div[role="row"]:has-text("Albanian") button:has(i.bi-pencil-fill)'
    );

    await expect(editBtn).toBeVisible();
    await editBtn.click();

    // Wait for Edit Page
    await expect(page.locator('h6:has-text("Edit Nationality")')).toBeVisible();

    // Click Save
    const saveBtn = page.locator('button:has-text("Save")');
    await expect(saveBtn).toBeVisible();
    // await page.pause();
    await saveBtn.click();

    // Validate Toast
    const toast = page.locator('.oxd-toast-content-text');
    await expect(toast).toBeVisible();
    await expect(toast).toHaveText(/Successfully Updated/i);

});
