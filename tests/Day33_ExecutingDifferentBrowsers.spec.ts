
import {test, expect, chromium, firefox, webkit } from '@playwright/test'
test('Launching with different binaries', async () => {
  console.log("This is first program");

  let browser = await webkit.launch({
    headless: false,
    //channel:'msedge' //To execute in real browser
  });
  let context1 = await browser.newContext();
  let context2 = await browser.newContext();
  let page1 = await context1.newPage();
  let page2 = await context2.newPage();
  //goto used for navigation
  await page1.goto("https://www.amazon.in/");
  await page2.goto("https://www.flipkart.com/");
});
