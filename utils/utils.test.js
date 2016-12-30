var utils  = require('./utils');
var expect = require('expect');



it('should add two numbers', function(){
  var res = utils.add(33,11);

  expect(res).toBe(44).toBeA('number');

});

it('should return the squared value of a number', function(){
  var res = utils.square(9);

  expect(res).toBe(81).toBeA('number');
});


it('should expect to have some values', function(){
  // Comparing objects
  // expect({name:'AlanF'}).toNotEqual({name:'Alan'});

  // expect([1,2,3,4]).toInclude(3);
  // expect([1,2,4]).toExclude(3);


  expect({
    name:'Alan',
    position:'Software Engineer',
    age: 45
  }).toInclude({
    position: 'Software Engineer'
  });

});


it('should verify first and last names are set', function(){
   var user = {location:'Sydney', age: 45};
   var res = utils.setName(user, 'Alan Fidelino');

   expect(res).toInclude({firstName:'Alan', lastName:'Fidelino'});
});