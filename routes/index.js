var express = require('express');
var router = express.Router();

var Category = require('../models/category.js');
var Subcategory = require('../models/subcategory.js');
var Contest = require('../models/contest');


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

router.get('/categories/:category', function(req, res) {
  Category.findOne({link: req.params.category}).exec(function(err, category) {
    res.render('category', {'category': category});
  })
});

router.get('/categories/:category/:subcategory', function(req, res) {
  Subcategory.findOne({link: req.params.subcategory}).exec(function(err, subcategory) {
    res.render('subcategory', {'subcategory': subcategory});
  })
});

router.post('/request-design', function(req, res) {
  var category = req.body.category;
  var contest = req.body.contest;
  var company = req.body.company;
  var slogan = req.body.slogan;
  var audience = req.body.audience;
  var industry = req.body.industry;
  var colors = req.body.colors;
  var classicModern = req.body.classicModern;
  var matureYouthful = req.body.matureYouthful;
  var feminineMasculine = req.body.feminineMasculine;
  var playfulSophisticated = req.body.playfulSophisticated;
  var economicalLuxurious = req.body.economicalLuxurious;
  var geometricOrganic = req.body.geometricOrganic;
  var info = req.body.info;

  // Validation
  req.checkBody('category', 'Category is required').notEmpty();
  req.checkBody('contest', 'Contest name is required').notEmpty();
  req.checkBody('company', 'Company name is required').notEmpty();
  req.checkBody('slogan', 'Slogan is required').notEmpty();
  req.checkBody('audience', 'Audience is required').notEmpty();
  req.checkBody('industry', 'Industry is required').notEmpty();
  req.checkBody('colors', 'Colors are required').notEmpty();

  var errors = req.validationErrors();

  if(errors) {
    res.render('request-design', {
      errors: errors
    });
  } else {
    var newContest = new Contest({
      category: category,
      contest: contest,
      company: company,
      slogan: slogan,
      audience: audience,
      industry: industry,
      colors: colors,
      classicModern: classicModern,
      matureYouthful: matureYouthful,
      feminineMasculine: feminineMasculine,
      playfulSophisticated: playfulSophisticated,
      economicalLuxurious: economicalLuxurious,
      geometricOrganic: geometricOrganic,
      info: info
    });

    newContest.save(function(err, contest) {
      if(err) throw err;
      console.log(contest);
    });

    // THIS CODE SHOULD EVENTUALLY BE MADE SO CATEGORIES ARE ADDED AUTOMATICALLY!
    if (category === "web-app-design" || category === "clothing-merch" || category === "art-illustration" || category === "logos-identity" || )

    req.flash('success_msg', 'Congratulations on your new contest!!');

    res.redirect('/categories');
  };
});

module.exports = router;
