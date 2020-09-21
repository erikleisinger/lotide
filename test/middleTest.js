const middle = require("../middle");
const assert = require('chai').assert;

describe('middle', () => {
  it('should return 3 when passed the array [1,2,3,4,5] (returns the middle number)', () => {
    assert.deepStrictEqual(middle([1,2,3,4,5]), [3]);
  });
  it('should return a blank array [] when passed a blank array []', () => {
    assert.deepStrictEqual(middle([]), []);
  });
  it('should return an array of the middle two values [3,4] when passed an array with an even number of characters [1,2,3,4,5,6]', () => {
    assert.deepStrictEqual(middle([1,2,3,4,5,6]), [3,4]);
  });
});