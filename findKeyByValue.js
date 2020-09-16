const assertEqual = function(actual, expected) {
 
  if (actual === expected) {
    console.log("✅️✅️✅️ Assertion Passed: \"" + actual + "\" = \"" + expected + "\"");
  } else {
    console.log("❌️❌️❌️ Assertion Failed: \"" + actual + "\" !==  \"" + expected + "\"");
  }
};

const bestTVShowsByGenre = { 
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function (objectToSearch, key) {
  let keysArray = Object.keys(objectToSearch);
  for (let item in keysArray) {
    if (objectToSearch[keysArray[item]] === key) {
      return keysArray[item];
    }
  }
};
