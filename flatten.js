
const eqArrays = function(array1, array2) {
  let array1String = array1.join(' ');
  let array2String = array2.join(' ');
  return array1String === array2String;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return `✅️✅️✅️ Assertion Passed: "${array1}" === "${array2}"`;
  } else {
    return `❌️❌️❌️ Assertion Failed: "${array1}" !== "${array2}"`;
  }

};

const flatten = function(array) {
  let flattenedArray = [];
  for (let x = 0; x < array.length; x++) {
    if (Array.isArray(array[x])) {
      let subArray = array[x];
      for (let y = 0; y < subArray.length; y++) {
        flattenedArray.push(subArray[y]);
      }
    } else {
      flattenedArray.push(array[x]);
    }
  }
  return flattenedArray;
};
