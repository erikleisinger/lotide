// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
 
  if (actual === expected) {
    console.log("ASSERTEQUAL✅️✅️✅️ Assertion Passed: \"" + actual + "\" === \"" + expected + "\"");
  } else {
    console.log("ASSERTEQUAL❌️❌️❌️ Assertion Failed: \"" + actual + "\" !==  \"" + expected + "\"");
  }
};


module.exports = assertEqual;