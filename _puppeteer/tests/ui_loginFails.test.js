const puppeteer = require('puppeteer');
const puppeteerConfig = require('../configuration/puppeteer.config')
const HomePage = require('../src/models/UI/home_page')
const SignupPage = require('../src/models/UI/signup_page')
const LoginPage = require('../src/models/UI/login_page');



describe('User login failure process', () => {
  //lets
  let browser
  let page
  let homePage,loginPage,signupPage
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
      if(action == 'signup'){  
        await expect(['This user already exist.','Sign up successful.']).toContain(dialog.message());
      
      }else{
        await expect(["Wrong password."]).toContain(dialog.message());
      
      }
      
  });
  })

  //### Test process start from here ###//
  //1)
  test('User successful signup', async ()=>{
    action = 'signup'
    signupPage = new SignupPage(page)

    await signupPage.navigate()
    await signupPage.signUp('erez','1234')
  })

  //2)
    test('Login with wrong password', async () => {
    action = 'login'
    loginPage = new LoginPage(page)

    await loginPage.navigate()
    await loginPage.login('erez','12344')

  });

  //After all : terminate test process.
  afterAll(async () => {
    homePage = new HomePage(page)

    const isDisplay = await homePage.userIsLogout()
    await expect(isDisplay).toBe('block')

    await page.close()
    await browser.close()
  })

});
