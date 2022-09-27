const BaseRequest = require('./base_http')

class HttpRequest extends BaseRequest{

    constructor(request){
        super(request)
    }

    async get(path){

        return await this.request.get(path).set(this.baseHeader)
    }

    async post(path,data){
        return await this.request.post(path).set(this.baseHeader).send(data)
    }

 /* 
  * Feature development
  */

}

module.exports = HttpRequest