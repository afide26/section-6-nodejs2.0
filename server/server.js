var express = require('express');

var app = express();


app.get('/', function(req,res){
  res.status(404).send(
    {error: 'Page not found!',
     name:'Todo App v1.0'
    });
});


// Challenge route

app.get('/users', function(req,res){
  res.status(200).send([{
    name: 'Alan Fidelino',
    age: 45
  },
  {
    name: 'Cristina Fidelino',
    age: 19
  },
  {
    name:'Carl Fidelino',
    age: 22
  }])
});

app.listen(3000, function(err){
  if(!err){
    console.log('Listening at port 3000');
  }
});


module.exports.app = app;