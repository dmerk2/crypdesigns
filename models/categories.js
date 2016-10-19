var mongoose = require('mongoose');

var User = require('../models/user');


// create the Schema class
var Schema = mongoose.Schema;


var CategorySchema = new Schema({
  name: {type: String, unique: true},
  subcategories: [{type: Schema.Types.ObjectId, ref: 'Subcategory'}],
  contests: [{type: Schema.Types.ObjectId, ref: 'Contest'}]
});

var SubcategorySchema = new Schema({
  name: {type: String, unique: true},
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  contests: [{type: Schema.Types.ObjectId, ref: 'Contest'}]
});

var ContestSchema = new Schema({
  creator: {type: Schema.Types.ObjectId, ref: 'User'},
  name: {type: String, index: true},
  companyName: String,
  slogan: String,
  audience: String,
  industry: String,
  colors: String,
  style: [{type: String}],
  info: String,
  designs: [{type: Schema.Types.ObjectId, ref: 'Design'}]
});

var DesignSchema = new Schema({
  image: String,
  description: String
});


var Category = mongoose.model('Category', CategorySchema);
var Subcategory = mongoose.model('Subcategory', SubcategorySchema);
var Contest = mongoose.model('Contest', ContestSchema);

module.exports = Category;
module.exports = Subcategory;
module.exports = Contest;



module.exports.getCategoryByName = function(name, callback){
  var query = {name: name};
  Category.findOne(query, callback);
};