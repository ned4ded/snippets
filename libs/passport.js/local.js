const User = require('models/user.schema');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;

// Compare function
const compare = (pass1, pass2, cb) => { /*...*/ };

passport.use(new Strategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false, { message: 'Wrond Login' }); }

      compare(password, user.password, function (err, result) {
          if(err) { return done(err) };
          if(!result) return done(null, false, { message: 'Wrong Password' })

          return done(null, user)
      });
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findOne({ _id: id }, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

exports.auth_process = function(req, res, next) {
  return passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login',
    failureFlash: false
  })(req, res, next);
}
