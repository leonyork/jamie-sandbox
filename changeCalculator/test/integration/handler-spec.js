const serverless = require('../helpers/bootstrap-serverless');
const request = require('supertest');
const expect = require('chai').expect;

describe('handler', function() {

    it('should return the change from the query', function(done) {
        request(`http://localhost:${serverless.getSlsOfflinePort()}`)
            .get(`/234`)
            .expect(200, [200, 20, 10, 2, 2], done);
    });

    it('should return a bad request if called with a non-numeric paramter', function(done) {
        request(`http://localhost:${serverless.getSlsOfflinePort()}`)
            .get(`/NaN`)
            .expect(400, done);
    });

    it('should return a bad request if called with a parameter <= 0', function(done) {
        request(`http://localhost:${serverless.getSlsOfflinePort()}`)
            .get(`/0`)
            .expect(400, done);
    });

    it('should return a bad request if called with a parameter >= 5000', function(done) {
        request(`http://localhost:${serverless.getSlsOfflinePort()}`)
            .get(`/5000`)
            .expect(400, done);
    });
});