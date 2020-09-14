// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
 
  if (actual === expected) {
    console.log(`✅️✅️✅️ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`❌️❌️❌️ Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const tail = function(array) {
  let tailArray = [];
  for (let x = 1; x < array.length; x++) {
    tailArray.push(array[x]);
  }
  return tailArray;
};

console.log(tail([]));
console.log(tail([1]));
