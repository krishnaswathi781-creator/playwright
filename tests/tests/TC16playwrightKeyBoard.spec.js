import { test, expect } from "playwright/test";


test.describe("Playwright keyboard test", () => {
    test("Search keyboard Event", asyc({ page })=> {
        const seachInput = page.locator('[namw-"search")']);
        await page.keyboard.type('macbook');
        awaitpage.keyboard.press('Enter');
        Const AddtoButton =page.getBytext('add to  cart').count();
        expect(addtoCartButton).toBe(3);
    })

    pagegOffset.goto("https;//tutorialsninja.com/demo/");

})


test.describe("playwright")