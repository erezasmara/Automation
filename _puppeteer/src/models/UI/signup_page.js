const BasePage = require("./base_page");

//Sign up
class SignUp extends BasePage{

    constructor(page){
        super(page)
        //Selectors
        this.registerButtonProcess = '#signin2'
        this.userName =  '#sign-username';
        this.password =  '#sign-password';
        this.signupButton = '#signInModal .btn.btn-primary'

    }

    /**
     * signup method
     * @param {string} username
     * @param {string} password
     */
    async signUp(username,password){

        await this.page.waitForSelector(this.userName)
        await this.page.waitForSelector(this.password)
        await this.page.waitForSelector(this.signupButton, {visible:true})

      
        await this.page.type(this.userName,username)
        await this.page.type(this.password,password)
        await this.page.click(this.signupButton)

        await this.page.waitForTimeout(1000) // wait for dialog message 

    }

    //Navigate to login page
    async navigate(){
        await super.navigate('index.html')
        await this.page.click(this.registerButtonProcess)
    }

}

module.exports = SignUp