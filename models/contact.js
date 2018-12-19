var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var contactSchema = new Schema({
  name : {type: String, required : true},
  email : { type : String , required : true},
  subject : { type : String , required : true},
  message : { type : String , required : true},

})

var contactModel = mongoose.model('contact', contactSchema);
module.exports = contactModel;
