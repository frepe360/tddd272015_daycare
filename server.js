var app = require('./serverconfig');

var serverip = process.env.OPENSHIFT_NODEJS_IP;
var serverport = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(serverport, serverip, function() {
    console.log('%s: Node server started on %s:%d ...', Date(Date.now()), serverip, serverport);
});

