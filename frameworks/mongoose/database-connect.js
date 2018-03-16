//DB setup
const mongoose = require('mongoose');
mongoose.connect('mongodb://username:password@host:port/database', function (err) {
   if (err) throw err;
   console.log('DB Successfully connected');
});

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
