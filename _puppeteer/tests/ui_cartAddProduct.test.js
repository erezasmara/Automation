const puppeteer = require('puppeteer');
const puppeteerConfig = require('../configuration/puppeteer.config')
const HomePage = require('../src/models/UI/home_page')
const SignupPage = require('../src/models/UI/signup_page')
const LoginPage = require('../src/models/UI/login_page');


describe('Adding to cart successful product', () => {
  //lets
  let browser
  let page
  let homePage,loginPage
  let action = ''

  //Before all : define test suites environment settings 
  beforeAll(async () => {
    browser = await puppeteer.launch(puppeteerConfig)

    //incognito mode?
    if(!puppeteerConfig.Incognito){
      page = await browser.newPage()
    }else{
      const context = await browser.createIncognitoBrowserContext();
      page = await context.newPage()
    }

    //Enable debugging.
    if(puppeteerConfig.devtools){
      await page.waitForTimeout(5000)
      await page.evaluate(() => {
        debugger;
      });
    }

    //define page.on dialogs
    page.on('dialog', async dialog => {
      await dialog.accept();
      await expect(['Product added.']).toContain(dialog.message());
  });
  })

  //### Test process start from here ###//
  //1)
    test('User login', async () => {
    action = 'login'
    loginPage = new LoginPage(page)

    await loginPage.navigate()
    await loginPage.login('erez','1234')
  });

  //2)
  test('Add product to cart', async ()=>{
    action = 'cart'
    homePage = new HomePage(page)

    await homePage.navigate()
    await homePage.addProductToCart('Samsung galaxy s6')
    
  })

  //After all : terminate test process.
  afterAll(async () => {
    await page.close()
    await browser.close()
  })
});
