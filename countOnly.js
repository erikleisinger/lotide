const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log("✅️✅️✅️ Assertion Passed: \"" + actual + "\" = \"" + expected + "\"");
  } else {
    console.log("❌️❌️❌️ Assertion Failed: \"" + actual + "\" !==  \"" + expected + "\"");
  }
};

const countOnly = function (allItems, itemsToCount) {
  let nameTally = {};

  for (name in itemsToCount) {
    nameTally[name] = 0;
    if (itemsToCount[name]) {
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i] === name) {
          nameTally[name] += 1;
        }
      }
    }
    if (nameTally[name] === 0) {
      nameTally[name] = undefined;
    }
  }
  return nameTally;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);