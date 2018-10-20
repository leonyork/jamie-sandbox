const serverless = require('../helpers/bootstrap-serverless');
const request = require('supertest');
const expect = require('chai').expect;

describe('handler', function getAsyncConcatTest() {

    it('should return the value from the query', function(done) {
        request(`http://localhost:${serverless.getSlsOfflinePort()}`)
            .get(`/2`)
            .expect(200, `2`, done);
    });
});