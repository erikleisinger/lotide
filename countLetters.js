const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log("✅️✅️✅️ Assertion Passed: \"" + actual + "\" = \"" + expected + "\"");
  } else {
    console.log("❌️❌️❌️ Assertion Failed: \"" + actual + "\" !==  \"" + expected + "\"");
  }
};

const countLetters = function (string) {
  let letterCount = {};
  for (let letter of string) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else if (letter !== ' ') {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};
console.log(countLetters('string'));
console.log(countLetters('hello there'));