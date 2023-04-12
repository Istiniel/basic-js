const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let min;
  let numbers = String(n).split('');
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[i + 1]) {
      min = numbers[i];
      break;
    }
  }
  if (!min) {
    min = Math.min(...`${n}`.split(''));
  }
  return +('' + n).replace(new RegExp(`${min}`), '');
}

module.exports = {
  deleteDigit,
};
