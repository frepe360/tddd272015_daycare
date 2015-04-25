var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    username: {type: String, unique: true},
    password: {type: String}
});

var User = mongoose.model('User', userSchema);

var createTestUsers = function() {
    User.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            console.log('Creating test users');
            // TODO: Disable test users for production systems
            User.create({firstName: 'Fredrik', lastName: 'Persson', username: 'fredrik', password: 'fredrik'});
            User.create({firstName: 'Alice', lastName: 'Persson', username: 'alice', password: 'alice'});
            User.create({firstName: 'Test', lastName: 'Testsson', username: 'asdf', password: 'asdf'});
        } else {
            console.log('Test users created already');
        }
    });
};

exports.createTestUsers = createTestUsers;