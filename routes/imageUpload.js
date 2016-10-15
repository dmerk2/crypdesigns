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

//  // GET home page.
// router.post('/upload', function(req, res){
//   var imageStream = fs.createReadStream(req.files.image.path, { encoding: 'binary' })
//     , cloudStream = cloudinary.uploader.upload_stream(function() { res.redirect('/'); });

//   imageStream.on('data', cloudStream.write).on('end', cloudStream.end);
// });

// router.get('/allImages', function(req, res, next){  
//   cloudinary.api.resources(function(items){
//     res.render('index', { images: items.resources, title: 'Gallery' });
//   });
// });




module.exports = router;
