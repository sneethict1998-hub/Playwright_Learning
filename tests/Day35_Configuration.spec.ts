/*
playwright.config.ts : Main configuration of a playwright

Trace : logs
import { defineConfig, devices } from '@playwright/test';
defineConfig : Define configurations for playwright
devices : where excatly you want to run
testDir: './tests': where excatly your scripts are stored
fullyParallel: true : All test will be executed in parallel mode.
                      It will depend on workers
                      it depends on workers: process.env.CI ? 1 : undefined,
                      workers: process.env.CI ? 1 : undefined, give number of workers
                      eg :workers: process.env.CI ? 1 : 2,
retries: process.env.CI ? 2 : 0, : To retry execution if execution is failed
eg : retries: process.env.CI ? 2 : 1,
In real scenario, generally used in CI and also sometimes if application is slow or in flaky test we use retries

test.only : mainly used for debugging purpose
            It will execute only that test

forbidOnly: !!process.env.CI, : It is only for CICD purpose. It will skip testonly/it wont execute

reporter: 'html', : HTML default reporting
                    There are different types of reporting
                    list, json : reporter: 'list'
                    Both reporters :  reporter: [['html'],['list']],
use: {
    trace: 'on-first-retry', //It will capture logs
    headless:false,
  },
  There are different options

  projects: [ ]: Browsers and Binaries

Using command line :
npx playwright test Day35_Configuration.spec.ts --workers=4 --fully-parallel

npx playwright test Day35_Configuration.spec.ts --grep "test" --workers=2


*/
import { test, expect, chromium } from "@playwright/test";
// test.only('Launching chrome by using fixture', async ({page})=>{
//     await page.goto("https://www.amazon.in/") //direct programming
//     //expect(20).toBe(30) //for retry check
//     })
test('Test 2', async ({page})=>{
    await page.goto("https://www.amazon.in/") //direct programming
    })
test('Test 3', async ({page})=>{
    await page.goto("https://www.amazon.in/") //direct programming
    })
    test('Test 4', async ({page})=>{
    await page.goto("https://www.amazon.in/") //direct programming
    })
    test('Test 5', async ({page})=>{
    await page.goto("https://www.amazon.in/") //direct programming
    })
    test('Test 6', async ({page})=>{
    await page.goto("https://www.amazon.in/") //direct programming
    })