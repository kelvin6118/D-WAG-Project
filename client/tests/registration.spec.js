/**
 * @jest-environment jsdom
 */

const request = require("supertest")
const registrationFunctions = require('../static/js/registration')
const app = require('../../Server/api/server')

global.fetch = require('jest-fetch-mock');
beforeEach(() => { fetch.resetMocks() })

test('Users can be created', (done) => {
    request(app)
        .post("/users")
        .expect("Content-type", /json/)
        .send({
            username: "Username",
            password: "password",
            displayName: "User"
        })
        .expect(201)
        .expect((res) => {
            res.body.data.length = 1;
        })
    return done();
})

test('Users must input all details to be created', (done) => {
    request(app)
        .post("/users")
        .expect("Content-type", /json/)
        .send({
            username: "",
            password: "password",
            displayName: "User"
        })
        .expect(401)
        .expect((res) => {
            console.log(res.body)
            res.body.data.length = 1;
        })
    return done();
})


