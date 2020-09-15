
const eqArrays = function(array1, array2) {
  let array1String = array1.join(' ');
  let array2String = array2.join(' ');
  return array1String === array2String;
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    return `✅️✅️✅️ Assertion Passed: "${array1}" === "${array2}"`;
  } else {
    return `❌️❌️❌️ Assertion Failed: "${array1}" !== "${array2}"`;
  }

};

console.log(assertArraysEqual([3, 4, 5],[4, 5, 6]));
console.log(assertArraysEqual([3, 4, 5],[3, 4, 5]));
console.log(assertArraysEqual([3, 4, 5],[5, 4, 3]));