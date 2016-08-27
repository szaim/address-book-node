require('./db/connect');

const mongoose = require('mongoose'),
    Contact = require('./db/models/contact');
    mongoose.Promise = Promise;

const express = require('express'),
    bodyParser = require('body-parser'),
    hbs = require('hbs');
    app = express();


app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.engine('html', require('hbs').__express);
hbs.registerPartials(__dirname + '/views/partials/');

app.get('/', function(req, res) {
    Contact.find().then(function(contacts){
        res.render('index', {
    		title: "Address Book",
            contacts: contacts
    	});
    });
});

app.post('/contacts', function(req, res){
    Contact.create(req.body).then(() => {
        res.redirect(302,  '/');
    })
});

app.listen(8081, function() {
	console.log('Running on port 8081');
});

module.exports = app;
