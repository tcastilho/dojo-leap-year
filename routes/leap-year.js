const express = require('express'),
  check = require('../controllers/check-controller'),
  router = express.Router();

router.get('/check', check.checkYear);

module.exports = router