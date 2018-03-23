"use strict"

var chai = require('chai');
var expect = chai.expect;
const roundSats = require('./../index');

describe("satoshi-rounding-tests", function() {
    it("round() -> Rounds up", function(done) {
        expect(roundSats(0.123456789)).to.equal(0.12345679);
        done();
    });

    it("round() -> Rounds down", function(done) {
        expect(roundSats(0.123456781)).to.equal(0.12345678);
        done();
    });
    
    it("round() -> rounds small numbers", (done) => {
        expect(roundSats(0.000000008)).to.equal(0.00000001);
        done();
    })
});