const convertToCelsius = function (temp) {
  let res = (temp - 32) * 5 / 9;
  if (Number.isInteger(res)) {
    return res;
  } else {
    return +res.toFixed(1);
  }
};

const convertToFahrenheit = function (temp) {
  let res = temp * 9 / 5 + 32;
  if (Number.isInteger(res)) {
    return res;
  } else {
    return +res.toFixed(1);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
