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
      if (Array.isArray(object1[item]) || Array.isArray(object1[item])) {
        console.log(object1[item]);
        if (eqArrays(object1[item], object2[item])) {
        } else {
          return false;
        }
      } else {
        if (object1[item] !== object2[item]) {
          return false;
        }
      }

    }

  } else {
    return false;
  }
  return true;
};