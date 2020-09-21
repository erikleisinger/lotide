const tail = function(array) {
  let tailArray = [];
  for (let x = 1; x < array.length; x++) {
    tailArray.push(array[x]);
  }
  return tailArray;
};

module.exports = tail;