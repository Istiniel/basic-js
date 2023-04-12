const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  return backyard.reduce((acc, group) => {
    group.forEach((el) => (el === '^^' ? (acc += 1) : 0));
    return acc;
  }, 0);
}

module.exports = {
  countCats,
};
