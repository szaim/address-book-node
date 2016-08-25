require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST');
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
    // Show me the contents of contacts.json
});

app.use(express.static('public'));

app.listen(8081, function() {
    console.log('Running on port 8081');
});

exports.app = app;
