var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    mongoose = require('mongoose');
    User = mongoose.model('User');

module.exports = function() {

    passport.use(new LocalStrategy(function(username, password, done) {
        var User = mongoose.model('User');
        User.findOne({username: username}).exec(function(err, user) {
            if (user && user.password === password) {
                return done(null, user);
            }
            return done(null, false);
        })
    }));

    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        User.findOne({_id:id}).exec(function(err, user) {
            if(user) {
                done(null, user);
            } else {
                done(null, false);
            }
        })
    });

};
