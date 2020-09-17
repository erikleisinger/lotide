const words = ["ground", "control", "to", "major", "tom"];

let mapFunction = function(array, callback) {
  let newArray = [];
  for (let item of array) {
    newArray.push(callback(item));
  }
  return newArray;
};
