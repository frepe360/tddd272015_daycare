var mongoose = require('mongoose');

// TODO: Obviously the passwords must be encrypted and salted, before shipping...

var childSchema = mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    birthdate: {type: Date}
});

var Child = mongoose.model('Child', childSchema);

var createTestChildren = function() {
    Child.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            console.log('Creating test children');
            // TODO: Disable test children for production systems
            Child.create({firstName: 'Anton', lastName: 'Persson', birthdate: new Date(2009, 10, 12)});
            Child.create({firstName: 'Nils', lastName: 'Nilsson', birthdate: new Date(2008, 6, 6)});
        } else {
            console.log('Test children created already');
        }
    });
};

exports.createTestChildren = createTestChildren;