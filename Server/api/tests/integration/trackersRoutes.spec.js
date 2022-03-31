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

    it('should return a list of all tracked habits in database', async () => {
        const res = await request(api).get('/trackers');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(2);
    })

    it('create a new tracked data entry', async () => {
            const res = await request(api)
                .post('/trackers')
                .send({ userID: 1, habitID: 2, date: '31/3/2022' })
                console.log(res.body)
            expect(res.statusCode).toEqual(201);
            expect(res.body).toBeTruthy
        })

})
