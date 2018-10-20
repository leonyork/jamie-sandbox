const serverless = require('../helpers/bootstrap-serverless');
const request = require('supertest');
const expect = require('chai').expect;

describe('handler', function getAsyncConcatTest() {

    it('should return the value from the query', function(done) {
        request(`http://localhost:${serverless.getSlsOfflinePort()}`)
            .get(`/2`)
            .expect(200, `2`, done);
    });

    it('should return a bad request if not called with a number', function(done) {
        request(`http://localhost:${serverless.getSlsOfflinePort()}`)
            .get(`/NaN`)
            .expect(400, done);
    });
});