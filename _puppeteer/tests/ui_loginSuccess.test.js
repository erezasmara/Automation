const puppeteer = require('puppeteer');
const puppeteerConfig = require('../configuration/puppeteer.config')
const HomePage = require('../src/models/UI/home_page')
const SignupPage = require('../src/models/UI/signup_page')
const LoginPage = require('../src/models/UI/login_page');


describe('User login process', () => {
  //lets
  let browser
  let page
  let homePage,loginPage,signupPage

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

    //define the page.on dialogs test before starting tests.
    page.on('dialog', async dialog => {
      await dialog.accept();
      await expect(['This user already exist.','Sign up successful.']).toContain(dialog.message());
     });

  })

  //### Test process start from here ###//
  //1)
  test('User successful signup', async ()=>{
   signupPage = new SignupPage(page)
 
   await signupPage.navigate()
   await signupPage.signUp('erez','1234')
  })

  //2)
  test('Login with correct password', async () => {
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)

    await loginPage.navigate()
    await loginPage.login('erez','1234')

    await page.waitForTimeout(2000)

    const isUserLogged = await homePage.userIsLogin()
    expect(isUserLogged).toBe(`Welcome erez`)
  });

  //After all : terminate test process.
  afterAll(async () => {
    await homePage.logout()

    await page.waitForTimeout(2000)
    const isDisplay = await homePage.userIsLogout()
    await expect(isDisplay).toBe('block')

    await page.close()
    await browser.close()
  })
});

