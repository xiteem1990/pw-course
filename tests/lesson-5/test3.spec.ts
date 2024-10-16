import { test } from '@playwright/test';

// 3. Tạo file test3.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 3: Todo page”.
// a. Thêm mới 100 todo item có nội dung “Todo <i>”
// b. Xoá các todo có số lẻ

test("Bài học 3: Todo page", async ({ page }) => {
    let baseURL = "https://material.playwrightvn.com/";

    await test.step("Navigate to playwrightvn.com", async () => {
        await page.goto(baseURL);
    })

    await test.step("Navigate to Bài học 3: Todo page", async () => {
        await page.locator("//a[contains(text(),'Bài học 3: Todo page')]").click();
    })

    await test.step("Add new to do item", async () => {
        for (let i = 1; i < 101; i++) {
            await page.locator("//input[@id='new-task']").fill(`To do <${i}>`);
            await page.locator("//button[@id='add-task']").click();
        }
    })

    await test.step("remove all odd items", async () => {
        page.on('dialog', dialog => dialog.accept());
        for (let i = 1; i < 101; i += 2) {
            await page.locator(`//button[@id='to-do-${i}--delete']`).click();
        }
    })
})


