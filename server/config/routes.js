var passport = require('passport');

module.exports = function(app, config) {

    // This is an ugly hack; node would not set the content-type to text/css
    // it this was served via the static route.
    app.get('/vendor/bootstrap/dist/bootstrap.css', function(req, res) {
        res.type('text/css');
        res.sendFile(config.rootPath + '/public/vendor/bootstrap/dist/css/bootstrap.css');
    });
    // Ugly hack ends here

    app.post('/login', function(req, res, next) {
        var auth = passport.authenticate('local', function(err, user, info) {
            if(err) { return next(err); }
            if(user) {
                req.logIn(user, function(err) {
                    if(err) return next(err);
                    return res.sendStatus(200);
                })
            } else {
                res.sendStatus(401);
            }
        });
        auth(req, res, next);
    });

    app.post('/logout', function(req, res) {
        console.log('User is logging out');
        req.logout();
        res.end();
    })

    app.get('/testauth', function(req, res, next) {
        if (req.isAuthenticated()) {
           console.log('The user is authenticated');
        } else {
           console.log('The user is NOT authenticated');
        }
        next();
    });

    app.get('/partials/*', function(req, res) {
        res.render('../../public/app/' + req.params[0]);
    });

    app.get('*', function(req, res) {
        res.render('index', {userVar: req.user});
    });
};
