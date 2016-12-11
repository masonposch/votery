'use strict';

var expect = require('chai').expect;
var request = require('supertest');
var server = require('../server');
var models = require('../models');
var votery_controller = require('../controllers/votery_controller')

// server test
describe('server.js', function () {

  it('should respond to /', function(done) {
    request(server).get('/').expect(302, done);
  });
  it('should respond to /votery', function(done) {
    request(server).get('/votery').expect(200, done);
  });
  it('404 everything else', function(done) {
    request(server).get('/foo/bar').expect(404, done);
  });
});


// potential test for /get route
// describe('votery/state', function() {

//   it('should list ALL representatives of that state', function(done) {
//     request(votery_controller)
//       .get('/state')
//         .expect(200, done)
        // res.to.be.undefined;
        // res.body.should.be.a('array');
        // res.body[0].should.have.property('_id');
        // res.body[0].should.have.property('name');
        // res.body[0].should.have.property('lastName');
        // res.body[0].name.should.equal('Bat');
        // res.body[0].lastName.should.equal('man');
      // });
      // done();
//   });
// });

// it('should list ALL blobs on /blobs GET', function(done) {
//   chai.request(server)
//     .get('/blobs')
//     .end(function(err, res){
//       res.should.have.status(200);
//       res.should.be.json;
//       res.body.should.be.a('array');
//       res.body[0].should.have.property('_id');
//       res.body[0].should.have.property('name');
//       res.body[0].should.have.property('lastName');
//       res.body[0].name.should.equal('Bat');
//       res.body[0].lastName.should.equal('man');
//       done();
//     });
// });