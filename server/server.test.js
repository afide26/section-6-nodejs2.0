var request = require('supertest');
var expect  = require('expect');
var app     = require('./server.js').app;

// Test for root route
it('should return hello world response', function(done){
  request(app)
    .get('/')
    .expect(404)
    .expect(function(res){
      expect(res.body).toInclude({
        name: 'Todo App v1.0'
      })
    })
    .end(done);
})


// Test for users route
it('should return a user from the response', function(done){
  var users = [];
  request(app)
     .get('/users')
     .expect(200)
     .expect(function(res){
      expect(res.body).toInclude({name:'Alan Fidelino', age:45} && {name:'Cristina Fidelino', age:19})
     })
     .end(done);
});