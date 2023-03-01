const removeFromArray = function(inputArray, ...inputToRemove) {
  let returnArray = inputArray;
  inputToRemove.forEach(element => {
    let index = returnArray.indexOf(element);
    while (index > -1) {
      returnArray.splice(index, 1);
      index = returnArray.indexOf(element);
    }
  });
  return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
