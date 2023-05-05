const expect = require("chai").expect;
const request = require("request");

describe("Testing search endpoint", function () {
  it("result", function (done) {
    request("http://localhost:3030/search", function (error, response, body) {
      expect(response).not.to.be.undefined;
      done();
    });
  });
});
