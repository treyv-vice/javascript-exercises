const repeatString = function(inputString, num) {
  let result = "";
  if (num >= 0) {
    for (i=0; i<num; i++) {
      result += inputString;
    }  
  } else {
    result = 'ERROR';
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
