var expect = require('expect');

var rewire = require('rewire');

var app = rewire('./app');


describe('App', function(){
  describe('Spies Examples', function(){
    it('should call the spy correctly', function(){
      var spy = expect.createSpy();
      spy();

      expect(spy).toHaveBeenCalled();
    });

    it('should call the spy with values', function(){
      var spy = expect.createSpy();
      spy('Alan', 45);

      expect(spy).toHaveBeenCalledWith('Alan', 45);
    });
  });

  describe('#saveUser', function(){
    it('should save the user in the database', function(){
      var db = {
        saveUser: expect.createSpy()
      };

      app.__set__('db', db);

      var email = 'alan@example.com';
      var password = 'alan123';
      app.handleSignup(email, password);
      expect(db.saveUser).toHaveBeenCalledWith({email,password});
    });
  });

});