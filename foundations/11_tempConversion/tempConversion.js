const convertToCelsius = function(fah) {
  let celsius = ((fah - 32) * (5/9)).toFixed(1);
  return +celsius; 
};

const convertToFahrenheit = function(celsius) {
  let fah = ((celsius*(9/5))+32).toFixed(1);
  return +fah; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
