const bcrypt = require('bcrypt');
const passExmpl = 'somepassword';
const passWrong = 'wrongpassword';

const user = { password: passExmpl, username: 'name'};
var hashed;

bcrypt.hash(user.password, 10, function (err, hash) {
  console.log(hash) // $2a$10$i2Pjc4EqUUbmk.... == hashed password; Store it in DB;
  var hashed = hash;
});

bcrypt.compare(passExmpl, hashed, function(err, res) {
    // res == true
});

bcrypt.compare(passWrong, hashed, function(err, res) {
    // res == false
});
