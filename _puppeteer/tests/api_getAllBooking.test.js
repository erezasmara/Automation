
const supertest = require('supertest')
const HttpRequest = require('../src/models/APIS/request_http')


describe('Getting all booking ids', ()=>{

    let request 
    beforeAll (async ()=> {
        request = new HttpRequest(supertest)
        await request.getAccessToken('admin','password123')
        await request.setHeaderToken()
    })

    test('Get access token',async()=>{
        expect(request.token).not.toBeNull()
    })

    test('Get all booking',async ()=>{
       const response =  await request.get('/booking')
       expect(response.statusCode).toBe(200)
    })
})
