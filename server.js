var express = require('express');

var app = express();

var serverip = process.env.OPENSHIFT_NODEJS_IP;
var serverport = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.get('/', function(req, res) {
    res.send('Hello world');
})

app.listen(serverport, serverip, function() {
    console.log('%s: Node server started on %s:%d ...', Date(Date.now()), serverip, serverport);
});

