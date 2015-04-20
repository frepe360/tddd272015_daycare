var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

module.exports = function() {
    passport.use(new LocalStrategy(function(username, password, done) {
        if (username === 'asdf' && password === 'asdf') {
            return done(null, true);
        }
        return done(null, false);
    }));
};
