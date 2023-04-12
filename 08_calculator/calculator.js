const add = function (x, y) {
  return x + y
};

const subtract = function (x, y) {
  return x - y
};

const sum = function (arr) {
  let result = 0

  for (const num of arr) {
    result += num
  }
  return result
};

const multiply = function (arr) {
  let result = 0
  for (const num of arr) {
    if (result == 0) result = num
    else {
      result *= num
    }
  }
  return result
};

const power = function (x, y) {
  let result = Math.pow(x, y)
  return result
};

const factorial = function (x) {
  let result = 1
  while (x > 0) {
    result = result * (x)
    x--
  }
  return result
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
