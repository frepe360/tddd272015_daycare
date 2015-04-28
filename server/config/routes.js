var passport = require('passport'),
    mongoose = require('mongoose');

module.exports = function(app, config) {

    // This is an ugly hack; node would not set the content-type to text/css
    // it this was served via the static route.
    app.get('/vendor/bootstrap/dist/bootstrap.css', function(req, res) {
        res.type('text/css');
        res.sendFile(config.rootPath + '/public/vendor/bootstrap/dist/css/bootstrap.css');
    });
    // Ugly hack ends here

    app.post('/api/users', function(req, res, next) {
        console.log(req.body);
        var User = mongoose.model('User');

        User.create(req.body, function(err, user) {
            if(err) {
                console.log(err.toString());
                res.sendStatus(400);
            } else {
                req.logIn(user, function(err) {
                    if(err) return next(err);
                    return res.send(user);
                })
            }
        });
    });

    app.get('/api/children', function(req, res) {
        var Child = mongoose.model('Child');
        Child.find({}).exec(function(err, collection) {
            res.json(collection);
        })
    });

    app.post('/api/children', function(req, res, next) {
        var Child = mongoose.model('Child');
        var childData = req.body;
        childData.parents.push(req.user._id);
        Child.create(childData, function(err, child) {
            if(err) {
                console.log(err.toString());
                res.sendStatus(400);
            } else {
                // Update the user records with the new child
                req.user.children.push(child._id);
                req.user.save(function(err) {
                    if(err) { res.status(400); return res.send({reason:err.toString()})};
                    res.sendStatus(200);
                })
            }
        })
    });

    app.post('/login', function(req, res, next) {
        var auth = passport.authenticate('local', function(err, user, info) {
            if(err) { return next(err); }
            if(user) {
                req.logIn(user, function(err) {
                    if(err) return next(err);
                    return res.send(user);
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
