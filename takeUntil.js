const eqArrays = function(array1, array2) {
  let array1String = array1.join(' ');
  let array2String = array2.join(' ');
  return array1String === array2String;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅️✅️✅️ Assertion Passed: "${array1}" === "${array2}"`);
  } else {
    console.log(`❌️❌️❌️ Assertion Failed: "${array1}" !== "${array2}"`);
  }

};


const takeUntil = function(array, callback) {
  let newArray = [];
  for (let item of array) {
    if (callback(item) === true) {
      return newArray
    } else {
      newArray.push(item);
    }
  }
  return newArray;
};



const data = ["not an x", "not an x", "x"];

console.log(assertArraysEqual(takeUntil(data, x => x === 'x'), ["not an x", "not an x"]));

console.log('---');

console.log(assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), ["I've", "been", "to", "Hollywood"]));

