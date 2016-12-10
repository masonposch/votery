var expect = require('chai').expect;
var request = require('supertest');
var server = require('../server');
var models = require('../models');

// server test
describe('server.js', function () {
  // should be using beforeEach and afterEach but cant get server to terminate
  // before(function () {
  //     var server;
  //   delete require.cache[require.resolve('../server')];
  //   server = require('../server');
  //     server = require('../server', { bustCache: true });
  // });
  // after(function (done) {     
  //   server.close;
  //   // done();
  // });
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

// potential database test
describe('Users', function() {
    var database = null;

    before(function(done) {
        Camo.connect('mongodb://localhost/app_test').then(function(db) {
            database = db;
            return database.dropDatabase();
        }).then(function() {}).then(done, done);
    });

    afterEach(function(done) {
        database.dropDatabase().then(function() {}).then(done, done);
    });

    describe('#save()', function() {
        it('should save User data to database', function(done) {
            // Use your database here...
        });
    });

    describe('#load()', function() {
        it('should load User data from database', function(done) {
            // Use your database here...
        });
    });
});


// potential test for /get route
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