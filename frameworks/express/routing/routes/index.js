const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/users');


router.get('/', function (res, req, next) {
  return res.render('index.hbs');
});

router.get('/users', user_controller.user_get);

module.exports = router;
