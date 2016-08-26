require('./connect');
var mongoose = require('mongoose');
var User = require('./models/contact');

var demoContacts = [{
        firstName: "Monique",
        lastName: "DeVries"
    },
    {
        firstName: "Willemijn",
        lastName: "Verkaik"
    },
    {
        firstName: "James",
        lastName: "Barnes"
    }]

User.insertMany(demoContacts, function(){
    mongoose.disconnect();
});
