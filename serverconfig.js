var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.status(200);
    res.end();
})

module.exports = app;