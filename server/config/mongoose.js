var mongoose = require('mongoose'),
    childModel = require('../models/Child'),
    userModel = require('../models/User');

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

childModel.createTestChildren();
userModel.createTestUsers();
