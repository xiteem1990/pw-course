import { test } from '@playwright/test';

// 2. Tạo file test2.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 2: Product page”, hãy thêm sản phẩm để giỏ hàng có số lượng sản phẩm như sau:
// a. Sản phẩm 1: 2 sản phẩm
// b. Sản phẩm 2: 3 sản phẩm
// c. Sản phẩm 3: 1 sản phẩm

test("Bài học 2: Product page", async ({ page }) => {
    let baseURL = "https://material.playwrightvn.com/";

    await test.step("Navigate to playwrightvn.com", async () => {
        await page.goto(baseURL);
    })

    await test.step("Navigate to Bài học 2: Product page", async () => {
        await page.locator("//a[contains(text(),'Bài học 2: Product page')]").click();
    })

    await test.step("Add product 1 two times", async () => {
        await page.locator("//button[@data-product-id='1']").dblclick();
    })

    await test.step("Add product 2 three times", async () => {
        await page.locator("//button[@data-product-id='2']").click({clickCount:3});
    })

    await test.step("Add product 3 one time", async () => {
        await page.locator("//button[@data-product-id='3']").click();
    })
})












