const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log("✅️✅️✅️ Assertion Passed: \"" + actual + "\" = \"" + expected + "\"");
  } else {
    console.log("❌️❌️❌️ Assertion Failed: \"" + actual + "\" !==  \"" + expected + "\"");
  }
};

const eqArrays = function (array1, array2) {
  let array1String = array1.join(' ');
  let array2String = array2.join(' ');
  return array1String === array2String;
};


const eqObjects = function (object1, object2) {
  let objectKeys1 = Object.keys(object1);
  let objectKeys2 = Object.keys(object2);
  if (objectKeys1.length === objectKeys2.length) {
    for (let item of objectKeys1) {
      if (Array.isArray(object1[item]) || Array.isArray(object2[item])) {
        if (eqArrays(object1[item], object2[item])) {
        } else {
          return false;
        }
      } else if (typeof (object1[item]) === 'object' || typeof (object2[item]) === 'object') {
        return eqObjects(object1[item], object2[item]);
      } else if (object1[item] !== object2[item]) {
        return false;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
};


console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
console.log(eqObjects({a: { z: 1, f: 7, g: { g: 0} }, b: 2},{a: { z: 1, f: 7}, b: 2})); // => false