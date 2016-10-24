var Category = require('../models/categories.js');
var Subcategory = require('../models/categories.js');

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/crypdesigns');

var web_app = new Category({
  name: "Web and App Design"
});

web_app.save(function(err) {
  if (err) return handleError(err);

  var web_design = new Subcategory({name: "Web page design", category: web_app._id});

  web_design.save(function(err) {
    if (err) return handleError(err);
  })
})

Category
.findOne({ name: "Web and App Design" })
.populate("subcategories")
.exec(function (err, story) {
  if (err) return handleError(err);
  console.log("The subcategories are " + Category.subcategories);
  // prints "The creator is Aaron"
});

// Seed the DB
// function exit() {
//   mongoose.disconnect();
// };

// var done = 0;
// for (var i=0; i < Categories.length; i++) {
//   Categories[i].save(function(err, result) {
//     console.log('err', err);
//     console.log('result', result);
//     done++;
//     if (done === Categories.length) {
//       exit();
//     }
//   });
// }

// var done2 = 0;
// for (var i=0; i < Subcategories.length; i++) {
//   Subcategories[i].save(function(err, result) {
//     console.log('err', err);
//     console.log('result', result);
//     done++;
//     if (done === Subcategories.length) {
//       exit();
//     }
//   });
// }