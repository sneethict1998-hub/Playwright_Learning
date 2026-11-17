import{test,expect} from '@playwright/test'

test('Running different binaries and browsers', async({page})=>{ //Broswer =>Browser context => page , this is created by playwright
    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(10000)
})

/*
Playwright =>UI, api, DB and also performace =>k6
UI => Automating browser and the elements present in a broswer
Navigating methods :
goto

Run with particular binary :
npx playwright test <testname> --project='firefox'

Default waitTimeout is 30secs

*/