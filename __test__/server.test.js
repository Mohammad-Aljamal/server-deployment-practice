'use strict'

const supertest = require("supertest")
const server = require('../src/server')

const request = supertest(server.app);

describe("API server", ()=> {
    it("getting data from home route /", async ()=> {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual("welcome to home page");
    })
})