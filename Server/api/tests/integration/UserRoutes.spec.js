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
            username: 'Graingertom',
            password: 'qwerty',
            displayName: 'Tom'});
    }) 

    it('should return all of the users input data', async () => {
        const res = await request(api).get('/users/1');
        expect(res.statusCode).toEqual(200);
        console.log(res.body)
        expect(res.body).toEqual([{"activity": {"frequency": 2, "habitID": 2, "id": 1, "number": 3}, "habits": {"habitName": "Drink Water TEST", "id": 1}, "id": 1, "tracker": {"date": "29/3/2022", "habitID": 1, "id": 1}, "userInfo": {"displayName": "Tom", "id": 1, "username": "Graingertom"}}, {"activity": {"frequency": 2, "habitID": 1, "id": 2, "number": 8}, "habits": {"habitName": "Sleep TEST", "id": 2}, "id": 2, "tracker": {"date": "30/3/2022", "habitID": 2, "id": 2}, "userInfo": {"displayName": "Tom", "id": 1, "username": "Graingertom"}}])
    })

    it('should post a login request from form inputs', async () => {
        const res = await request(api)
            .post('/users/login')
            .send({
                 username: 'Graingertom',
                 password: ''
            })
            console.log(res.body)
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("userID");
    })
})
