var mongoose = require('mongoose');

// create the Schema class
var Schema = mongoose.Schema;


var DesignSchema = new Schema({
  image: String,
  description: String
});

var Design = mongoose.model('Design', DesignSchema);

module.exports = Design;