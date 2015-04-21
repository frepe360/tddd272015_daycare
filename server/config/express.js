var express = require('express'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    session = require('express-session');

module.exports = function(app, config) {
    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'jade');
    app.use(express.static(config.rootPath + '/public'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(session({secret: 'if i tell you i must kill you', resave: false, saveUninitialized: false}));
    app.use(passport.initialize());
    app.use(passport.session());
};