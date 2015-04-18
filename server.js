var express = require('express');
app = express();

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./server/config/config.js')[env];

require('./server/config/mongoose.js')(config);

require('./server/config/express.js')(app, config);

require('./server/config/routes.js')(app, config);

console.log('My node version is: ' + process.version);

app.listen(config.serverport, config.serverip, function() {
    console.log('%s: Node server started on port %d:%d ...', Date(Date.now()), config.serverip, config.serverport);
});

