const middle = function (array) {
  let arrayOfMiddleElements = [];
  if (array.length === 0) {
    return arrayOfMiddleElements;
  } else {
    if (array.length % 2 === 0) {
      let evenMiddleIndex1 = (array.length / 2) - 1;
      let evenMiddleIndex2 = array.length / 2;
      arrayOfMiddleElements.push(array[evenMiddleIndex1]);
      arrayOfMiddleElements.push(array[evenMiddleIndex2]);
    } else {
      let oddMiddleIndex = Math.floor(array.length / 2);
      arrayOfMiddleElements.push(array[oddMiddleIndex]);
    }
  }
  return arrayOfMiddleElements;
};

module.exports = middle;