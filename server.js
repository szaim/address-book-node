require('./db/connect');

const mongoose = require('mongoose'),
    Contact = require('./db/models/contact');
    mongoose.Promise = Promise;

const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();



app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', function(req, res){
    // Show me index.html
});

app.post('/contacts', function(req, res){
    // Show me the contents submitted by the form
});
app.get('/contacts', function(req, res){
    Contact.find().then(function(contacts){
        res.send(contacts);
    });
});


app.listen(8081, function() {
    console.log('Running on port 8081');
});

module.exports = app;
