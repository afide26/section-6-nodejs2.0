var utils = require('./utils');

it('should add two numbers', function(){
  var res = utils.add(33,11);

  if(res !== 44){
    throw new Error(`Expected 44, but got ${res}`);
  }

});

it('should return the squared value of a number', function(){
  var res = utils.square(9);

  if( res !== 81){
    throw new Error(`The value is not correct. The result should be 81 but got ${res}`);
  }
});