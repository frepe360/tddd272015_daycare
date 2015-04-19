var express = require('express'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

app = express();

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./server/config/config.js')[env];

require('./server/config/mongoose.js')(config);

require('./server/config/express.js')(app, config);

passport.use(new LocalStrategy(function(username, password, done) {
    if (username === 'asdf' && password === 'asdf') {
        return done(null, true);
    }
    return done(null, false);
}));

require('./server/config/routes.js')(app, config);

console.log('My node version is: ' + process.version);

app.listen(config.serverport, config.serverip, function() {
    console.log('%s: Node server started on port %d:%d ...', Date(Date.now()), config.serverip, config.serverport);
});

