/**
 * @jest-environment jsdom
 */

const request = require("supertest")
 const loginFunctions = require('../static/js/login')
 const app = require('../../Server/api/server')

 global.fetch = require('jest-fetch-mock');
 beforeEach(() => { fetch.resetMocks() })

 const oldWindowLocation = window.location

beforeAll(() => {
  delete window.location

  window.location = Object.defineProperties(
    {},
    {
      ...Object.getOwnPropertyDescriptors(oldWindowLocation),
      assign: {
        configurable: true,
        value: jest.fn(),
      },
    },
  )
})
beforeEach(() => {
  window.location.assign.mockReset()
})
afterAll(() => {
  // restore `window.location` to the `jsdom` `Location` object
  window.location = oldWindowLocation
})

describe('login functions are making correct hash changes', () => {
test('logout function calls assign with expected URL', () => {
    loginFunctions.logout()
  window.location.assign('https://localhost:8080/#login/')

  expect(window.location.assign).toHaveBeenCalledTimes(1)
  expect(window.location.assign).toHaveBeenCalledWith(
    'https://localhost:8080/#login/',
  )
})

test('goToRegister function calls assign with expected URL', () => {
    loginFunctions.goToRegister()
  window.location.assign('https://localhost:8080/#register/')

  expect(window.location.assign).toHaveBeenCalledTimes(1)
  expect(window.location.assign).toHaveBeenCalledWith(
    'https://localhost:8080/#register/',
  )
})

test('goToLogin function calls assign with expected URL', () => {
    loginFunctions.goToLogin()
  window.location.assign('https://localhost:8080/#login/')

  expect(window.location.assign).toHaveBeenCalledTimes(1)
  expect(window.location.assign).toHaveBeenCalledWith(
    'https://localhost:8080/#login/',
  )
})

test('login function calls assign with expected URL', () => {
    let data = { username: 'Test', password: 'password'}
    loginFunctions.login(data)
  window.location.assign('https://localhost:8080/#dashboard/')

  expect(window.location.assign).toHaveBeenCalledTimes(1)
  expect(window.location.assign).toHaveBeenCalledWith(
    'https://localhost:8080/#dashboard/',
  )
})

test('Users need a valid username', (done) => {
    request(app)
    .post("/users/login")
    .expect("Content-type", /json/)
    .send({
        username: "notAUser"
    })
    .expect(401)
    return done();
    })
})

