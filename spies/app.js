var db = require('./db.js');

module.exports.handleSignup = function(email, password){
  // Check if email exists
  // Save the user to the database
  db.saveUser({
    email:email,
    password: password
  });
  // Send the welcome email
}