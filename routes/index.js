var express = require('express');
var router = express.Router();


// Ensure authenticated; if not, redirect to login
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash('error_msg','Please log in!');
    res.redirect('/users/login');
  }
};

 // GET home page.
router.get('/', function(req, res, next) {
  res.render('index');
});

// GET how it works page
router.get('/how-it-works', function(req, res, next) {
  res.render('how-it-works');
});

// GET request design page
router.get('/request-design', ensureAuthenticated, function(req, res, next) {
  res.render('request-design');
});

router.get('/categories', function(req, res, next) {
  res.render('categories');
});


module.exports = router;
