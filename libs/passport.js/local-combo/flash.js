// Main application file
const flash = require('connect-flash');

app.use(session({ /*...*/ }));
app.use(flash());

// Controller file
exports.auth_process = function(req, res, next) {
  return passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login',
    failureFlash: true
  })(req, res, next);
}

exports.auth_login = (req, res, next) => {
  const errors = req.flash('error');
  const error = errors.length > 0 ? errors[0] : null;

  res.render('login.hbs', { error });
}
