var chai = require("chai");

const r = require("../public/js/timer.js");
var expect = chai.expect;

describe("checking time" , function(){
    it("should return string" , function(){
        expect(r).to.be.a('string');
    });
 });