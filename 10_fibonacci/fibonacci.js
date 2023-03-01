const fibonacci = function(inputNum) {
  inputNum = Number(inputNum);
  if (inputNum <= 0) return "OOPS";
  let fibonacciArray = [1,1];
  for (let i=2; i < inputNum; i++) {
    fibonacciArray.push(fibonacciArray[i-2]+fibonacciArray[i-1]);
  }
  return fibonacciArray[fibonacciArray.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
