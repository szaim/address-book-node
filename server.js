var fs = require('fs');
const express = require('express'),
    bodyParser = require('body-parser'),
    cons = require('consolidate'),
    hbs = require('hbs');
    app = express();

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

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials/');

app.get('/', function(req, res){
    res.render('index', {title: "Test"});
});

app.post('/contacts', function(req, res){
    res.send(req.body);
});
app.get('/contacts', function(req, res){
    function getData(filename, callback){
        fs.readFile(filename, function(err, data){
            if (err) {
                callback(err);
                return;
            }
            try {
                callback(null, JSON.parse(data));
            } catch(exception) {
                callback(exception);
            }
        })
    }

    getData('contacts.json', function(err, contacts) {
        if(err) {throw err}
        res.render('contacts', {contacts: contacts});
    })
});

app.use(express.static('public'));

app.listen(8081, function() {
    console.log('Running on port 8081');
});

exports.app = app;
