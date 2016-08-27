var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
    firstName: String,
    lastName: String,
});

var Contact = mongoose.model('User', contactSchema);

module.exports = Contact;
