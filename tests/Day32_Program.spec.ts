/*
Playwright file name extension
name.spec.ts

Browser : Actual browser instance launched by your playwright

Launch broswer in 2 ways :
Headless mode (Default)
Headed mode
All options we are going to write in the form of objects

Browsercontext : one browser with seperate context (seperate memory)
            : seperate browser session created inside a browser
            each browser context will have seperate :
            cookies
            local storage
            session storage
            cache and session related state

page : individaul broswer tab with in the browser context
A broswer context can contain multiple tabs
goto used for navigation
Format document : shift+alt+f

Hierarchy :
Browser
BrowserContext
Page
Goto

Command to run in terminal :
npx playwright test <filename>
To run in debug mode :
npx playwright test <filename> --debug

Fixture : readymade thing 
page is a fixture
*/
//Start a brower
import { test, expect, chromium } from "@playwright/test";
test("Launching a chromium binary", async () => {
  console.log("This is first program");

  let browser = await chromium.launch({
    headless: false,
  });
  let context1 = await browser.newContext();
  let context2 = await browser.newContext();
  let page1 = await context1.newPage();
  let page2 = await context1.newPage();
  //goto used for navigation
  await page1.goto("https://www.amazon.in/");
  await page2.goto("https://www.flipkart.com/");
});

test('Launching chrome by using fixture', async ({page})=>{
    await page.goto("https://www.amazon.in/") //direct programming
    //expect(20).toBe(30) //for retry check
    })

