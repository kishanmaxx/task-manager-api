const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');

const userOne = {
    name:'mike',
    email:'mike@example.com',
    password:'56what!!'
};
beforeEach(async ()=>{
    // console.log('Before each test');
    await User.deleteMany();
    await new User(userOne).save();
})

afterEach(()=>{{
    console.log('After each test');
}})

test('Should sign up a new user',async()=>{
    await request(app).post('/users').send({
        name:'Akshatha Shetty',
        email:'akki@test.com',
        password:'MyPass777!'}).expect(201);
})

test('Should login existing user',async()=>{
    await request(app).post('/users/login').send({
        email:userOne.email,
        password:userOne.password
    }).expect(200);
})

test('Should not login nonexisting user',async()=>{
    await request(app).post('/users/login').send({
        email:userOne.email,
        password:'thisisnotmypass'
    }).expect(400);
})