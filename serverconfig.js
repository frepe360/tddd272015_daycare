var path = require('path');
var express = require('express');
var mongoose = require('mongoose');

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

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log(env);

// Mongoose config
var dburl;
if (env === 'development') {
   dburl = 'mongodb://db_user:db_password@localhost/daycaredb';
}
if (env === 'production') {
   dburl = 'mongodb://$OPENSHIFT_MONGODB_DB_HOST:$OPENSHIFT_MONGODB_DB_PORT/';
}

console.log('dburl: ' + dburl);

mongoose.connect(dburl, function(err) {
   if(err) {
      console.log(err);
   }
   console.log('Connected to database');
});

module.exports = app;