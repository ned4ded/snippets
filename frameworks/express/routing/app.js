const express = require('express');
const app = express();

// routes
const index = require('./routes/index');

app.use('/', index);
