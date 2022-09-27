/**
 * Project: demoblaze
 * Author: erez asmara
 * website: https://www.demoblaze.com/
 * type: user interface tests
 */

class BasePage{

    constructor(page){
        this.page = page
    }

    /**
     * Navigation method
     * @param {string} path
     **/
    async navigate(path){
        await this.page.goto(`https://www.demoblaze.com/${path}`)
    }

    /**
     * Delay method
     * @param {number} ms
     **/
    async delay(ms){
        return new Promise(resolve => setTimeout(resolve,ms))
    }

}

module.exports = BasePage