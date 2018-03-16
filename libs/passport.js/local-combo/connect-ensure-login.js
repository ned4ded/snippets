// Main application file;
const ensureLogin = require('connect-ensure-login');

// routes
const isLoggedIn = (req, res, next) => ensureLogin.ensureLoggedIn('/login')(req, res, next);

const home = require('./routes/home');
const login = require('./routes/login');

app.use('/login', login);
app.use('/home', isLoggedIn, home);
