const convertToCelsius = function(far) {
  C = (far - 32) * (5/9)
  return parseFloat(C.toFixed(1))
};

const convertToFahrenheit = function(C) {
  far = C * 1.8 + 32
  return parseFloat(far.toFixed(1))

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
