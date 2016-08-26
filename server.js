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
	res.render('index', {
		title: "Address Book"
	});

app.post('/contacts', function(req, res){
    res.send(req.body);
});
app.get('/contacts', function(req, res){
    Contact.find().then(function(contacts){
        res.send(contacts);
    });
});


function getData(filename, callback) {
    fs.readFile(filename, function(err, data) {
        if (err) {
            callback(err);
            return;
        }
        try {
            callback(null, JSON.parse(data));
        } catch (exception) {
            callback(exception);
        }
    })
}

app.route('/contacts')
	.get(function(req, res) {
		getData('contacts.json', function(err, contacts) {
			if (err) {
				throw err
			}
			res.render('contacts', {contacts: contacts});
		})
	})
	.post(function(req, res) {
        getData('contacts.json', function(err, contacts){
            if (err) {
				throw err
			}
            contacts.push(req.body);
            var newContacts = JSON.stringify(contacts);
            fs.writeFileSync('contacts.json', newContacts)
        });
        res.redirect('contacts');

    });

app.listen(8081, function() {
	console.log('Running on port 8081');
});

module.exports = app;
