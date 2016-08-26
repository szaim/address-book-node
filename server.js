<<<<<<< HEAD
var fs = require('fs');
const express = require('express'),
	bodyParser = require('body-parser'),
	hbs = require('hbs'),
=======
require('fs');
var express = require('express'),
    bodyParser = require('body-parser'),
>>>>>>> f8a9cfc... small changes.
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,POST');
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

exports.app = app;
