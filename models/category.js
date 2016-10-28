var mongoose = require('mongoose');

// create the Schema class
var Schema = mongoose.Schema;


var CategorySchema = new Schema({
  name: {type: String, unique: true},
  subcategories: [{type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory'}],
  contests: [{type: mongoose.Schema.Types.ObjectId, ref: 'Contest'}],
  link: String
});


var Category = mongoose.model('Category', CategorySchema);


module.exports = Category;

module.exports.getCategoryByName = function(name, callback){
  var query = {name: name};
  Category.findOne(query, callback);
};