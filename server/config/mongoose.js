var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    username: {type: String},
    password: {type: String}
});

var User = mongoose.model('User', userSchema);

User.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
        console.log('Creating test users');
        // TODO: Disable test users for production systems
        User.create({firstName: 'Fredrik', lastName: 'Persson', username: 'fredrik', password: 'fredrik'});
        User.create({firstName: 'Alice', lastName: 'Persson', username: 'alice', password: 'alice'});
    } else {
        console.log('Test users created already');
    }
});

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


