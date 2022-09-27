
/**
 * Project: restful-booker
 * Author: erez asmara
 * website: https://restful-booker.herokuapp.com
 * type: restful api test 
 */

class BaseRequest{
    //initial object.
    constructor(request){
        this.request = request('https://restful-booker.herokuapp.com')
        this.baseHeader ={
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
        this.token = null
    }

    //request access token.
    async getAccessToken(user,password){
        const response =  await this.request.post('/auth').set(this.baseHeader).send({
            "username":user,
            "password":password
        })

        this.token = response.body.token || null
    }
    
    //Set Header with token.
    async setHeaderToken(){
        this.baseHeader = {...this.baseHeader,...{ Cookie: this.token }}
    }
}

module.exports = BaseRequest
