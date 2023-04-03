const app = require('../app');
const request = require('supertest');
const mongoose = require('mongoose');
const yup = require('yup');

const appRequest = request(app);

const bodySchema = yup.object({
    data: yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().email().required(),
        birthday: yup.date(),
        passwordHash: yup.string().required()
    }),
    tokens: yup.object({
        accessToken: yup.string().required(),
        refreshToken: yup.string().required()
    })
})

<<<<<<< HEAD
const getUser = () =>(
    {
    "firstName": "Harry",
    "lastName": "Potter",
    "birthday": "1990-02-02",
    "email": `potter${Date.now()}-tesr@hogwarts.com`,
    "password": "griffindor"
=======
const getUser = () => (
    {
        firstName: "Harry",
        lastName: "Potter",
        birthday: "1990-02-02",
        email: `potter${Date.now()}@hogwarts.com`,
        password: "griffindor"
>>>>>>> ebbd5f85a4a1dac7ab38882e320b410f0a448508
    }
)

const user = getUser();

<<<<<<< HEAD
describe('create new user', ()=>{
    test('user create succesfully expect 201 created', async ()=>{
        const response = await appRequest.post('/api/user/sign-up').send(user);
        expect(response.statusCode).toBe(200);
        expect(bodySchema.isValidSync(response.body)).toBe(true);
    })
    test('create empty user expect 400 bad request', async ()=>{
        const response = await appRequest.post('/api/user/sign-up').send();
=======
describe('create new user', () => {
    test('user create successfully expect 200 created', async () => {
        const response = await appRequest.post('/api/users/sign-up').send(user);
        expect(response.statusCode).toBe(200);
        expect(bodySchema.isValidSync(response.body)).toBe(true);
    })

    test('create empty user expect 400 bad request', async () => {
        const response = await appRequest.post('/api/users/sign-up').send();
>>>>>>> ebbd5f85a4a1dac7ab38882e320b410f0a448508
        expect(response.statusCode).toBe(400);
        expect(bodySchema.isValidSync(response.body)).toBe(false);
    })
})

<<<<<<< HEAD
afterAll(async ()=>{
=======
afterAll(async () => {
>>>>>>> ebbd5f85a4a1dac7ab38882e320b410f0a448508
    await mongoose.connection.close();
})