const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(inputArray) {
  let sum = 0;
	inputArray.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(inputArray) {
  let product = 1;
  inputArray.forEach(element => {
    product *= element;
  });
  return product;
};

const power = function(base, exponent) {
  let result = 1;
	for (let i=0; i<exponent; i++) {
    result *= base;
  }
  return result;
};

const factorial = function(input) {
	let product = 1;
  for (let i=2; i<input+1; i++) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
