const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = str.split('').filter((letter, index) => {
    return str[index - 1] !== letter;
  });

  return result
    .map((letter) => {
      const length = str
        .split('')
        .filter(
          (e, index) =>
            e === letter && (str[index + 1] === e || str[index - 1] === e)
        ).length;

      return length > 1 ? length + letter : letter;
    })
    .join('');
}

module.exports = {
  encodeLine,
};
