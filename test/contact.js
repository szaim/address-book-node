//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require('mongoose');
    mongoose.Promise = Promise;
let Contact = require('../db/models/contact');

let server = require('../server')

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = require('chai').should();

chai.use(chaiHttp);

describe('Contacts', () => {
    beforeEach(done => {
        Contact.remove({}).then(function(){
            return done();
        });
    });

    describe('/GET contacts', () => {
        it('it should GET all the contacts', done => {
            chai.request(server)
            .get('/contacts')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
        });
    });
    // TODO:
    // describe('/POST contact', () => {
    //     it('should POST a new contact', done => {
    //        test goes here!
    //     });
    });
});
