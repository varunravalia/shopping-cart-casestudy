const { app } = require('../app')
const superTest = require('supertest')
let cookei;
test('login api', async () => {
    const login = await superTest(app).post('/api/login').send({ userName: 'kranthikiran@gmail.com', password: 'Test@123' }).expect(200)
        .then(result => {
            expect(result)
            expect(result.body).toHaveProperty("token");
            cookei = result.headers['set-cookie']
        })
})
test('logout api', async () => {
    var agent = superTest.agent(app);
    const res = await agent.get("/api/logout").set('Cookie', cookei);
    expect(res.status).toBe(200);
})


test('Products api', async () => {
    var agent = superTest.agent(app);
    const res = await agent.get("/api/products").set('Cookie', cookei);
    expect(res.status).toBe(200);
})

const post = {
    id: '1',
    data: 'Test'
}
test('Products api', async () => {
    var agent = superTest.agent(app);
    const res = await agent.get("/api/product/" + post.id).set('Cookie', cookei);
    expect(res.status).toBe(200)
})