const chai = require('chai');
const chaiHttp = require('chai-http');
const User = require('../models/users');

const server = require('../app');

const should = chai.should();


chai.use(chaiHttp);

describe('Users', () => {
  describe('/POST user', () => {
    it('it should not POST a user with any field missing', (done) => {
      const user = {
        firstname: 'Omodamola',
        lastname: 'Oladeji',
        password: 'larami',
        isAdmin: true,
      };
      chai.request(server)
        .post('/api/v1/auth/signup')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          // res.body.should.have.property('message');
          // res.body.errors.should.have.property('errors');
          done();
        });
    });
    it('it should  POST a new user', (done) => {
      const user = {
        firstname: 'Omodamola',
        lastname: 'Oladeji',
        password: 'larami',
        isAdmin: true,
        email: 'darmhoo@yahoo.com',
      };
      chai.request(server)
        .post('/api/v1/auth/signup')
        .send(user)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('data');
          res.body.data.should.have.property('token');
          res.body.data.should.have.property('first_name');
          res.body.data.should.have.property('last_name');
          res.body.data.should.have.property('email');
          res.body.data.should.have.property('id');
          //   res.body.errors.should.have.property('errors');
          done();
        });
    });

    it('it should log in a user using email ad password', (done) => {
      const user = {
        password: 'larami',
        email: 'darmhoo@yahoo.com',
      };
      chai.request(server)
        .post('/api/v1/auth/signin')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('data');
          // res.body.data.should.have.property('token');
          // res.body.data.should.have.property('first_name');
          // res.body.data.should.have.property('last_name');
          // res.body.data.should.have.property('email');
          // res.body.data.should.have.property('id');
          // res.body.errors.should.have.property('errors');
          done();
        });
    });

    it('it should not log in a user using email and a wrong password', (done) => {
      const user = {
        password: 'laami',
        email: 'darmhoo@yahoo.com',
      };
      chai.request(server)
        .post('/api/v1/auth/signin')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
