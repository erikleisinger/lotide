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
  return array1String === array2String;
};

