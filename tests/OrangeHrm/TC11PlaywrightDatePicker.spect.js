



//click on leave menu


//click on date Picker
await page.getByPlaceholder('yyyy-dd-mm').first().click();

await page.waitForTimeout(2000);
await page.getByPlaceholder('yyyy-dd-mm').last().click();
await
