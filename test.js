var request = require('supertest');
var app = require('./serverconfig');

describe('Requests to the root path', function() {
    it('Returns a 200 status code', function(done) {
        request(app)
            .get('/')
            .expect(200)
            .end(function(error) {
                if(error) throw error;
                done();
            });
    })
})

describe('Requests to the angular.js file', function() {
    it('Returns a 200 status code', function(done) {
        request(app)
            .get('/vendor/angular/angular.js')
            .expect(200)
            .end(function(error) {
                if(error) throw error;
                done();
            });
    })
})

