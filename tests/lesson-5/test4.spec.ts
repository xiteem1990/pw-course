import { test } from '@playwright/test';

// 4. Tạo file test4.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 4: Personal notes”.
// a. Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn (khoảng 3 dòng) tại báo https://vnexpress.net/khoa-hoc
// b. Thực hiện search theo tiêu đề bài báo bất kì.

test('Bài 4', async ({ page }) => {
    let vnexpressURL = "https://vnexpress.net/khoa-hoc";
    let baseURL = "https://material.playwrightvn.com/";

    await test.step("Navigate to vnexpress.net", async () => {
        await page.goto(vnexpressURL);

    })

    const listOfNewspaper = [];

    await test.step("Get ten newspaper from vnexpress", async () => {

        for (let i = 5; i < 15; i++) {

            let newspaper = {
                "title": "",
                "description": ""
            };
            newspaper.title = await page.locator(`//article[@data-offset='${i}']//h3[@class='title-news']//a[@data-medium='Item-${i}']`).getAttribute("title");
            newspaper.description = await page.locator(`//article[@data-offset='${i}']//p[@class='description']//a[@data-medium='Item-${i}']`).textContent();
            listOfNewspaper.push(newspaper);
            console.log(newspaper);
            console.log("-------------------------");
            // console.log(listOfNewspaper);
            // console.log("*************************");
        }
        console.log(listOfNewspaper);
    })

    await test.step("Navigate to playwrightvn.com", async () => {
        await page.goto(baseURL);
    })

    await test.step("Navigate to Bài học 4: Personal notes", async () => {
        await page.locator("//a[contains(text(),'4: Personal notes')]").click();
    })

    await test.step("Create 10 note with info from vnexpress", async () => {
        for (let i = 0; i < 10; i++) {
            await page.locator("//input[@id='note-title']").fill(listOfNewspaper[i].title);
            await page.locator("//textarea[@id='note-content']").fill(listOfNewspaper[i].description);
            await page.locator("//button[@id='add-note']").click();
        }
    })
})

