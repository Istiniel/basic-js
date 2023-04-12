const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    if (arr[i] === '--discard-next') {
      if (arr[i + 1]) {
        i += 2;
        continue;
      } else {
        continue;
      }
    }
    if (arr[i] === '--discard-prev') {
      if (arr[i - 1]) {
        result.splice(i - 1, 2);
        continue;
      } else {
        continue;
      }
    }
    if (arr[i] === '--double-next') {
      if (arr[i + 1]) {
        currentElement = arr[i + 1];
      } else {
        continue;
      }
    }
    if (arr[i] === '--double-prev') {
      if (arr[i - 1]) {
        currentElement = arr[i - 1];
      } else {
        continue;
      }
    }
    result.push(currentElement);
  }

  return result;
}

module.exports = {
  transform,
};
