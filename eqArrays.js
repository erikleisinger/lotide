const assertEqual = require("./assertEqual");

const eqArrays = function (array1, array2) {
  array1.forEach(c => {
    if (Array.isArray(c)) {
      array2.forEach(d => {
        if (Array.isArray(d)) {
          return eqArrays(c, d);
        }
      });
    }
  });
  let array1String = array1.join('');
  let array2String = array2.join('');
  if (array1String === array2String) {
    return true;
  } else {
    return false;
  }
};

module.exports = eqArrays;

