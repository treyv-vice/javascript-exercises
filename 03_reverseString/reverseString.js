const reverseString = function(inputString) {
  returnString = "";
  stringArray = inputString.split("");
  for (let i = stringArray.length-1; i >= 0; i--) {
    returnString += stringArray[i];
  }
  return returnString;
};

// Do not edit below this line
module.exports = reverseString;
