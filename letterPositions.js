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

const letterPositions = function(sentence) {
  const results = {};
  for (let x = 0; x < sentence.length; x++) {
    if (results[sentence[x]]) {
      results[sentence[x]].push(x);
     
    } else {
      results[sentence[x]] = [];
      results[sentence[x]].push(x);
    
    }
  }
  return results;
};
