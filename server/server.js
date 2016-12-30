var express = require('express');

var app = express();


app.get('/', function(req,res){
  res.send('Hello World');
});

app.listen(3000, function(err){
  if(!err){
    console.log('Listening at port 3000');
  }
});