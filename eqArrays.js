// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
 
  if (actual === expected) {
    return `✅️✅️✅️ Assertion Passed: "${actual}" === "${expected}"`;
  } else {
    return `❌️❌️❌️ Assertion Failed: "${actual}" !== "${expected}"`;
  }
};

const eqArrays = function(array1, array2) {
  let array1String = array1.join(' ');
  let array2String = array2.join(' ');
  return assertEqual(array1String, array2String);
};

console.log(eqArrays([3, 4, 5],[4, 5, 6]));
console.log(eqArrays([3, 4, 5],[3, 4, 5]));
console.log(eqArrays([3, 4, 5],[5, 4, 3]));

