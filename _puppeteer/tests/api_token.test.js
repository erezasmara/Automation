
const supertest = require('supertest')
const BaseRequest = require('../src/models/APIS/base_http')


describe('Checking access token process', ()=>{

    let request 
    beforeAll (async ()=> {

        request = new BaseRequest(supertest)
    })

    test('Token Successfully received ',async()=>{
        await request.getAccessToken('admin','password123')
        await request.setHeaderToken()
        expect(request.token).not.toBeNull()
    })

    test('Token failure with wrong password',async()=>{
        await request.getAccessToken('admin','123!@#$')
        expect(request.token).toBeNull()
    })

    test('Token failure with wrong user',async()=>{
        await request.getAccessToken('admin123','password123')
        expect(request.token).toBeNull()
    })
})
