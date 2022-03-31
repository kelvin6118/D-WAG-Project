/**
 * @jest-environment jsdom
 */

const requestFunctions = require('../static/js/requests')

 global.fetch = require('jest-fetch-mock');
 beforeEach(() => { fetch.resetMocks() })

 describe('request functions are making calls to the api', () => {
    test('getUserInfo makes a call to the api', async () => {
        await requestFunctions.getUserInfo()
        expect(fetch).toHaveBeenCalled()
    })

    test('getDisplayName makes a call to the api', async () => {
        await requestFunctions.getDisplayName()
        expect(fetch).toHaveBeenCalled()
    })

    test('getHabits makes a call to the api', async () => {
        await requestFunctions.getHabits()
        expect(fetch).toHaveBeenCalled()
    })

    test('getActivity makes a call to the api', async () => {
        await requestFunctions.getActivity()
        expect(fetch).toHaveBeenCalled()
    })
})
