
const supertest = require('supertest')
const HttpRequest = require('../src/models/APIS/request_http')
const apiData = require('../src/data_test/apiData.json')

describe('Post booking process', ()=>{

    let request, bookingId
    beforeAll (async ()=> {
        request = new HttpRequest(supertest)
        await request.getAccessToken('admin','password123')
        await request.setHeaderToken()
    })

    test('Check access token',async()=>{
        expect(request.token).not.toBeNull()
    })

    test('Post booking',async ()=>{
       const response = await request.post('/booking',apiData)
       bookingId = response.body.bookingid
       expect(response.body.booking.firstname).toBe(apiData.firstname)
       expect(response.statusCode).toBe(200)
    })

    test('Get booking by id',async ()=>{
        const response =  await request.get(`/booking/${bookingId}`)
        expect(response.statusCode).toBe(200)
    })
})
