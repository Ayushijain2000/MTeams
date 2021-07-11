var chai = require("chai");

const r = require("../public/js/showTime.js");
var expect = chai.expect;


describe("checking time", function () {
    it("should return string", function () {
        let testDate = new Date('December 17, 1995 03:24:00');
        let observed = r(testDate);
        console.log(observed);
        expect(observed).to.equal("03:24:00 AM");
    });
});


