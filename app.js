var express = require('express');
var app = express();

var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'pug');

htmlController(app);

app.listen(port);