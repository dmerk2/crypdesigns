var mongoose = require('mongoose');

// create the Schema class
var Schema = mongoose.Schema;

var ContestSchema = new Schema({
  creator: String,
  category: String,
  contest: String,
  company: String,
  slogan: String,
  audience: String,
  industry: String,
  colors: String,
  classicModern: String,
  matureYouthful: String,
  feminineMasculine: String,
  playfulSophisticated: String,
  economicalLuxurious: String,
  geometricOrganic: String,
  info: String,
  designs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Design'}]
});

var Contest = mongoose.model('Contest', ContestSchema);

module.exports = Contest;
