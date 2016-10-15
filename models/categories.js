// var mongoose = require('mongoose');

// var User = require('../models/user');


// // create the Schema class
// var Schema = mongoose.Schema;

// User Schema
// var CategorySchema = new Schema({
//   name: {
//     type: String,
//     index: true,
//     unique: true
//   },
//   subcategories: [{type: String, ref: 'Subcategory'}],
//   contests: [{type: String, ref: 'Contest'}]
// });

// var SubcategorySchema = new Schema({
//   name: {type: String, index: true, unique: true},
//   category: {type: String, ref: 'Category'},
//   contests: [{type: String, ref: 'Contest'}]
// });

// var ContestSchema = new Schema({
//   creator: {type: String, ref: 'User'},
//   name: {type: String, index: true},
//   companyName: String,
//   slogan: String,
//   audience: String,
//   industry: String,
//   colors: String,
//   style: [{type: String}],
//   info: String,
//   designs: [{type: Schema.Types.ObjectId, ref: 'Contest'}]
// });

// var DesignSchema = new Schema({
  
// });


// var Category = mongoose.model('Category', CategorySchema);

// module.exports = Category;

// module.exports.getCategoryByName = function(name, callback){
//   var query = {name: name};
//   Category.findOne(query, callback);
// };