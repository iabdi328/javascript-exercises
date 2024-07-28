const convertToCelsius = function(tempToConvert) {
  let celsius = Math.round((tempToConvert - 32) * (5 / 9) * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(tempToConvert) {
  let fahrenheit = Math.round(((tempToConvert * 9) / 5 + 32) * 10) / 10;
  return fahrenheit;
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
