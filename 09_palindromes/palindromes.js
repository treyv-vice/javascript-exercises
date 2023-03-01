const palindromes = function (inputString) {
  inputString = inputString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{1,}/g, "").toLowerCase();
  let reverseString = "";
  inputArray = Array.from(inputString);
  for (i=inputArray.length-1; i>-1; i--) {
    reverseString += inputArray[i];
  }
  return inputString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
