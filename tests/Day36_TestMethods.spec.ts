/*
Different methods associated with tests
1.test.only()-Run only selected test
2.test.skip()-Skip the selected test
3.test.fixme()-make a test needing a fix and skip the execution
4.test.fail()- run a test expecting it to fail
5.test.slow()-it will triple the timeout [Default wait is 30 seconds]
6.test.describe()-to group multiple test cases into single suite
 serial : it will execute in serial wise

Execute only grouped tests using command :
npx playwright test --grep 'Fourth test' 


*/
import{test,expect} from '@playwright/test'
test.describe.serial('Login module cases',()=>{

test('First test',async({page})=>{
    //test.slow(); //90secs
   // test.setTimeout(35000)
    await page.goto('https://www.amazon.in/')
   // await page.locator("//input[text()='jdhfehf']").click()

})
test('Second test',async({page})=>{
    await page.goto('https://www.amazon.in/')
})
test('Third test',async({page})=>{
    await page.goto('https://www.amazon.in/')
  //  expect(200).toBe(300)
})
test('Fourth test',async({page})=>{
    await page.goto('https://www.amazon.in/')
})
})
// test.only('1 test',async({page})=>{
//     await page.goto('https://www.amazon.in/')
// })
// test.skip('2 test',async({page})=>{
//     await page.goto('https://www.amazon.in/')
// })
// test.fixme('3 test',async({page})=>{
//     await page.goto('https://www.amazon.in/')
// })
// test.fail('4 test',async({page})=>{
//     await page.goto('https://www.amazon.in/')
//  expect(200).toBe(300)
// })
