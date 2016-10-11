var express = require('express');
var router = express.Router();

 // GET home page.
router.get('/', function(req, res, next) {
  res.render('index');
});

// GET how it works page
router.get('/how-it-works', function(req, res, next) {
  res.render('how-it-works');
});

// GET request design page
router.get('/request-design', function(req, res, next) {
  res.render('request-design');
});

router.get('/categories', function(req, res, next) {
  res.render('categories');
});


module.exports = router;
