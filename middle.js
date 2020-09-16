
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



const middle = function (array) {
  let arrayOfMiddleElements = [];
  if (array.length % 2 === 0) {
    let evenMiddleIndex1 = (array.length / 2) - 1;
    let evenMiddleIndex2 = array.length / 2;
    arrayOfMiddleElements.push(array[evenMiddleIndex1]);
    arrayOfMiddleElements.push(array[evenMiddleIndex2]);
  } else if (array.length === 0) {
    return arrayOfMiddleElements;
  } else {
    let oddMiddleIndex = Math.floor(array.length / 2);
    arrayOfMiddleElements.push(array[oddMiddleIndex]);
  }
return arrayOfMiddleElements;
};