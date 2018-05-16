var express = require('express');
var app = express();

var htmlController = require('./controllers/htmlController');

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'pug');

htmlController(app);

app.listen(3000);