module.exports = function(app, config) {

    // This is an ugly hack; node would not set the content-type to text/css
    // it this was served via the static route.
    app.get('/vendor/bootstrap/dist/bootstrap.css', function(req, res) {
        res.type('text/css');
        res.sendFile(config.rootPath + '/public/vendor/bootstrap/dist/css/bootstrap.css');
    });
    // Ugly hack ends here

    app.get('*', function(req, res) {
        res.render('index');
    });
};
