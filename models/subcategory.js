var mongoose = require('mongoose');

// create the Schema class
var Schema = mongoose.Schema;


var SubcategorySchema = new Schema({
  name: {type: String, unique: true},
  category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
  contests: [{type: mongoose.Schema.Types.ObjectId, ref: 'Contest'}],
  link: String
});




var Subcategory = mongoose.model('Subcategory', SubcategorySchema);


module.exports = Subcategory;
