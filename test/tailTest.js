const tail = require("../tail");
const assert = require('chai').assert;

describe('tail', () => {
  it('should return the array [2,3,4,5] when passed [1,2,3,4,5]', () => {
    assert.deepStrictEqual(tail([1,2,3,4,5]), [2,3,4,5]);
  });
  it('should return a blank array [] when passed an array with a single value [1]', () => {
    assert.deepStrictEqual(tail([1]), []);
  });
});
