const BasePage = require('./base_page')

class LoginPage extends BasePage{
    constructor(page){
        super(page)

        //Selector
        this.loginButtonProcess = '#login2'
        this.userName =  '#loginusername';
        this.password =  '#loginpassword';
        this.loginButton = '#logInModal .btn.btn-primary'       
    }

    /**
     * login method
     * @param {string} username
     * @param {string} password
     */
    async login(username,password){
        await this.page.waitForSelector(this.userName)
        await this.page.waitForSelector(this.password)
        await this.page.waitForSelector(this.loginButton, {visible:true})

        await this.page.type(this.userName,username)
        await this.page.type(this.password,password)
        await this.page.click(this.loginButton)
        await this.page.waitForTimeout(1000) // wait for dialog message 


    }

    async navigate(){
        await super.navigate('index.html')
        await this.page.click(this.loginButtonProcess)
    }
}

module.exports = LoginPage