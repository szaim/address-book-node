const mongoose = require('mongoose');
const env = require('./environment');
const config = require('./config');

console.log('Connected on ', config[env].url);

mongoose.connect(config[env].url);
