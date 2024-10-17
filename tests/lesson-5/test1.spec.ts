import { test } from '@playwright/test';

// 1. Tạo file test1.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 1: Register Page”
// a. Nhập đầy đủ các thông tin, click button register

let baseURL = "https://material.playwrightvn.com/";

test('Bài học 1: Register Page', async ({ page }) => {

    await test.step("Navigate to playwrightvn.com", async () => {
        await page.goto(baseURL);
    })

    await test.step("Navigate to Bài học 1: Register Page (có đủ các element", async () => {
        await page.locator("//a[contains(text(),'Bài học 1: Register Page (có đủ các element)')]").click();
    })

    await test.step("Input all informations", async () => {

        await page.locator("//input[@id='username']").fill("Khai Do");
        await page.locator("//input[@id='email']").fill("KhaiDo@restmail.net");
        await page.locator("//input[@id='male']").check();
        await page.locator("//input[@id='reading']").check();
        await page.locator("//select[@id='interests']").selectOption("Technology");
        await page.locator("//select[@id='country']").selectOption("Canada");
        await page.locator("//input[@id='dob']").fill("2024-02-20");
        await page.locator("//input[@id='profile']").setInputFiles("C:/Users/ad/Downloads/2024-09-16.log");
        await page.locator("//textarea[@id='bio']").fill("I am Khai. Nice to meet you");
        await page.locator("//input[@id='rating']").fill("3");
        await page.locator("//input[@id='favcolor']").fill("#1ed436");
        await page.locator("//input[@id='newsletter']").click();
        await page.locator("//label[@class='switch']").click();

        await page.locator("//button[@type='submit']").click();
    })
})