const chai = require('chai');
const chaiHttp = require('chai-http');
const User = require('../models/users');
const server = require('../app');

const should = chai.should();


chai.use(chaiHttp);

describe('Users', () => {
            beforeEach(() => {
                User.remove({}, (err) => {
                    done();
                });
            });
            describe('/POST user', () => {
                    it('it should not post without emails field', (done) => {
                        let user = {
                            id: "2",
                            firstname: "Omodamola",
                            lastname: "Oladeji",
                        }
                        chai.request(server)
                            .post('/signup')
                            .send(user)
                            .end((err, res) => {
                                res.should.have.status(200);
                                res.body.should.be.a('object');
                                res.body.should.have.property('errors');
                                res.body.errors.should.have.property('email');



                            })
                        done();
                    });
                };
            });