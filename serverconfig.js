var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('Daycare app comes here');
    res.status(200);
    res.end();
})

module.exports = app;