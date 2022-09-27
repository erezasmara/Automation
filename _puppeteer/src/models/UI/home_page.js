const BasePage = require('./base_page')

//Home page
class HomePage extends BasePage{

    constructor(page){
        //Parent inheritance
        super(page);

        //Selectors
        this.userNameId = '#nameofuser'
        this.logoutButtonId = '#logout2'
        this.loginButtonId = '#login2'
    }
    async addProductToCart(name){
        await this.page.waitForSelector('#tbodyid > div:nth-child(1) > div > div > h4 > a');
        await this.page.click('#tbodyid > div:nth-child(1) > div > div > h4 > a');
        await this.page.waitForSelector('#tbodyid > div.row > div > a');
        await this.page.click('#tbodyid > div.row > div > a');
        await this.page.waitForTimeout(1000)
    }

    async userIsLogin(){
        return await this.page.$eval(this.userNameId, element => element.innerHTML);
    }

    async userIsLogout(){
        return await this.page.$eval(this.loginButtonId, element => element.style.display);
    }

    async logout(){
        await this.page.waitForSelector(this.logoutButtonId, {visible:true})

        await this.page.click(this.logoutButtonId)
    }

    async navigate(path = 'index.html'){
        await super.navigate(path)
    }
}

module.exports = HomePage