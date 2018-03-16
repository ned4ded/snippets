// Declare in controller file
const bcrypt = require('bcrypt');

passport.use(new Strategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false, { message: 'Wrong login' }); }

      bcrypt.compare(password, user.password, function (err, result) {
          if(err) { return done(err) };
          if(!result) return done(null, false, { message: 'Wrong password' })

          return done(null, user)
      });
    });
  }
));
