var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    mongoose = require('mongoose');

module.exports = function() {

    passport.use(new LocalStrategy(function(username, password, done) {
        var User = mongoose.model('User');
        User.findOne({username: username}).exec(function(err, user) {
            if (user && user.password === password) {
                return done(null, true);
            }
            return done(null, false);
        })
    }));

};
