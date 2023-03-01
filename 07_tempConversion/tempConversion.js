const convertToCelsius = function(fTemp) {
  let cTemp = (fTemp - 32) * 5 / 9;
  return Math.round(cTemp * 10)/10; // rounding to nearest 1 decimal
};

const convertToFahrenheit = function(cTemp) {
  let fTemp = (cTemp * 9 / 5) + 32;
  return Math.round(fTemp * 10)/10; // rounding to nearest 1 decimal
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
