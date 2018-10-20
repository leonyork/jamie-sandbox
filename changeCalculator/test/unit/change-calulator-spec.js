const calculateChange = require('../../change-calculator')
const expect = require('chai').expect;

describe('change-calculator', function() {

    it('should calculate the change for total amount 1', function() {
        const change = calculateChange(1);
        expect(change).to.have.length(1);
        expect(change[0]).to.equal(1);
    });

    it('should calculate the change for total amount 234', function() {
        const change = calculateChange(234);
        expect(change).to.have.length(5);
        expect(change[0]).to.equal(200);
        expect(change[1]).to.equal(20);
        expect(change[2]).to.equal(10);
        expect(change[3]).to.equal(2);
        expect(change[4]).to.equal(2);
    });

    it('should calculate the change for total amount 4999', function() {
        const change = calculateChange(4999);
        expect(change).to.have.length(31);
        for (let i = 0; i <= 23; i++)
            expect(change[i]).to.equal(200);
        expect(change[24]).to.equal(100);
        expect(change[25]).to.equal(50);
        expect(change[26]).to.equal(20);
        expect(change[27]).to.equal(20);
        expect(change[28]).to.equal(5);
        expect(change[29]).to.equal(2);
        expect(change[30]).to.equal(2);
    });
});