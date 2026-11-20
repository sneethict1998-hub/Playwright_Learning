/*
Navigation methods :
1.page.goto()
2.page.goback()
3.page.goforward()
4.page.reload()


*/
//page.goto(url,options)
//page.goto(url,{options})
//Navigation methods
import{test,expect} from '@playwright/test'
test('Test1',async({page,browser})=>{ //Which is inside {} is a fixtures
    let response=await page.goto('https://www.flipkart.com/',{
        timeout:10_000, //These are the options
        waitUntil:'load'
    });
    console.log(response?.status())

//page.goback

    await page.goto('https://www.amazon.in/',{waitUntil:'load'})
    await page.goBack({waitUntil:'load'})

//page.goforward
    await page.goForward();

//page.reload -For refresh
    await page.reload()

/*Page Information methods : you are going to extract information from browser
1.page.title()
2.page.url()
3.page.content() - to get the HTML content
4.page.viewportsize - to get the widht and height of the page
5.page.isclosed()
6.page.close
*/
 let pagetitle=await page.title();
 console.log('Page title is : '+pagetitle)
 //expect(pagetitle).toBe('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in') //assertions
 let pageurl:string=await page.url()
 console.log('Page url is : '+pageurl)
//console.log(await page.content())

 let viewPortSize=page.viewportSize()
 console.log('View port size is : ',viewPortSize)

 console.log(page.isClosed())
 await page.close();
 console.log(page.isClosed())

/*
Browser Information method :
Give browser fixture if we want to get the Browser methods

Supported Methods 

*/
console.log(browser.version())
console.log(browser.contexts().length) //To get the number of context
})

