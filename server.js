var express = require('express');
app = express();

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./server/config/config.js')[env];

require('./server/config/mongoose.js')(config);

app.set('views', config.rootPath + '/server/views');
app.set('view engine', 'jade');

// This is an ugly hack; node would not set the content-type to text/css
// it this was served via the static route.
app.get('/vendor/bootstrap/dist/bootstrap.css', function(req, res) {
    res.type('text/css');
    res.sendFile(config.rootPath + '/public/vendor/bootstrap/dist/css/bootstrap.css');
});
// Ugly hack ends here

app.use(express.static(config.rootPath + '/public'));

app.get('*', function(req, res) {
    res.render('index');
});

console.log('My node version is: ' + process.version);

app.listen(config.serverport, config.serverip, function() {
    console.log('%s: Node server started on port %d:%d ...', Date(Date.now()), config.serverip, config.serverport);
});

