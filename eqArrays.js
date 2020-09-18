// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
 
  if (actual === expected) {
    return `✅️✅️✅️ Assertion Passed: "${actual}" === "${expected}"`;
  } else {
    return `❌️❌️❌️ Assertion Failed: "${actual}" !== "${expected}"`;
  }
};

const eqArrays = function(array1, array2) {
  array1.forEach(c => {
    if (Array.isArray(c)) {
      array2.forEach(d => {
        if (Array.isArray(d)) {
          return eqArrays(c, d);
        }
      });
    }
  })
      let array1String = array1.join(' ');
      let array2String = array2.join(' ');
      return array1String === array2String;
    
};

console.log(eqArrays([5, 4, 3, [5, 5]], [5, 4, 3, [5, 5]]));
console.log(eqArrays([5, 4, 3, [5, 5, 2]], [5, 4, 3, [5, 5]]));

