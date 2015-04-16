var mongoose = require('mongoose');

module.exports = function(config) {
    mongoose.connect(config.db, function(err) {
        if(err) {
            console.log(err);
        }
        else {
            console.log('Connected to database, url: ' + config.db);
        }
    });
};


