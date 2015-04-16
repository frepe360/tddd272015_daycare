var path = require('path');
var rootPath = path.normalize(__dirname + '/../..');

module.exports = {
    development: {
        db: 'mongodb://db_user:db_password@localhost/daycaredb',
        rootPath: rootPath,
        serverport: process.env.OPENSHIFT_NODEJS_PORT || 3000
},
    production: {
        db: 'mongodb://admin:gKP6_hS2fRv1@' + process.env.OPENSHIFT_MONGODB_DB_HOST + ':' + process.env.OPENSHIFT_MONGODB_DB_PORT,
        rootPath: rootPath,
        serverport: process.env.OPENSHIFT_NODEJS_PORT || 80
    }
};
