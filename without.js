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

const without = function(source, itemsToRemove) {
  let modifiedArray = [];
  for (let x = 0; x < source.length; x++) {
    let addOrNotToAdd = true;
    for (let y = 0; y < itemsToRemove.length; y++) {
      // console.log(itemsToRemove[y]);
      if (itemsToRemove[y] === source[x]) {
        addOrNotToAdd = false;
      }
    } 
    if (addOrNotToAdd) {
      modifiedArray.push(source[x]);
    }
  }
  return modifiedArray;
};