describe('User endpoints', () => {
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

    it('should return a list of all users in database', async () => {
        const res = await request(api).get('/users');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(1);
    })
    
    it('should return a list of info for a specific user', async () => {
        const res = await request(api).get('/users/username/1');
        expect(res.statusCode).toEqual(200);
        console.log(res.body)
        expect(res.body).toEqual({id: 1,
            username: 'Test',
            password: 'qwerty',
            displayName: 'Tom'});
    }) 
})
