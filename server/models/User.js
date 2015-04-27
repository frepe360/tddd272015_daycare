var mongoose = require('mongoose');

// TODO: Obviously the passwords must be encrypted and salted, before shipping...

var userSchema = mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    username: {type: String, unique: true},
    password: {type: String},
    roles: [String],
    children: [{type: mongoose.Schema.Types.ObjectId, ref: 'Child'}]
});

var User = mongoose.model('User', userSchema);
var Child = mongoose.model('Child');

var createTestUsers = function() {

    // Find a test child
    var testChild;
    Child.findOne({}).exec(function(err, child){
        console.log('I found a kid!');
        console.log(child);
        testChild = child;
    });

    User.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            console.log('Creating test users');
            // TODO: Disable test users for production systems
            User.create({firstName: 'Fredrik', lastName: 'Persson', username: 'fredrik', password: 'fredrik', roles: ['admin', 'parent'], children: testChild });
            User.create({firstName: 'Alice', lastName: 'Persson', username: 'alice', password: 'alice', roles: ['staff']});
            User.create({firstName: 'Test', lastName: 'Testsson', username: 'asdf', password: 'asdf', roles: ['parent']});
        } else {
            console.log('Test users created already');
        }
    });
};

exports.createTestUsers = createTestUsers;