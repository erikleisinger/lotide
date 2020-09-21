const words = ["ground", "control", "to", "major", "tom"];

let mapFunction = function(array, callback) {
  let newArray = [];
  for (let item of array) {
    newArray.push(callback(item));
  }
  return newArray;
};

console.log(mapFunction([1,2,3], x => x +1));