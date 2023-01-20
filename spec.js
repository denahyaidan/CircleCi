const assert = require("assert")

function pow (number, power) {
  return Math.pow(number, power)
}

describe("pow", function() {

    it("raises to n-th power", function() {
      assert.equal(pow(2, 3), 8);
      assert.equal(pow(3, 4), 81);
    });
  
  });