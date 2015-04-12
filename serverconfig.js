var path = require('path');
var express = require('express');

var app = express();

app.set('views', path.normalize(__dirname + '/server/views'));
app.set('view engine', 'jade');

// This is an ugly hack; node would not set the content-type to text/css
// it this was served via the static route.
app.get('/vendor/bootstrap/dist/bootstrap.css', function(req, res) {
   res.type('text/css');
   res.sendFile(__dirname + '/public/vendor/bootstrap/dist/css/bootstrap.css');
});

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
   res.render('index');
});

module.exports = app;