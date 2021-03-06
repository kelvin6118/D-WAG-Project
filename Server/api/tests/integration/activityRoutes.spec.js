describe('Trackers endpoints', () => {
    let api;
    beforeEach(async () => {
        await resetTestDB()
    });

    beforeAll(async () => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'))
    });

    afterAll(done => {
        console.log('Gracefully stopping test server')
        api.close(done)
    })

    it('should return a list of all activites selected in database', async () => {
        const res = await request(api).get('/activities');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(2);
    })

})
