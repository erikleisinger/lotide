const head = require("../head");
const assert = require('chai').assert;

describe('head', () => {
  it('should return 1 for the array [1,2,3]', () => {
    assert.strictEqual(head([1,2,3]), 1);
  });
  it('returns 5 for the array [5]', () => {
    assert.strictEqual(head([5]), 5);
  });
  it('FAIL TEST: the program will not output 4 when given array [5]', () => {
    assert.strictEqual(head([5]), 4);
  });
  it('will output 1 for the array [1,1,1]', () => {
    assert.strictEqual(head([1,1,1]), 1);
  });
});