var path = require('path');
var express = require('express');

var app = express();

app.set('views', path.normalize(__dirname + '/server/views'));
app.set('view engine', 'jade');

app.get('*', function(req, res) {
   res.render('index');
});

module.exports = app;