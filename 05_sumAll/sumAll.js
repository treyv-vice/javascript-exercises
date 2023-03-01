const sumAll = function(num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
    return "ERROR";
  }
  let startNum = num1 > num2 ? num2 : num1;
  let endNum = num1 < num2 ? num2 : num1;
  let sum = 0;
  for (let i = startNum; i <= endNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
