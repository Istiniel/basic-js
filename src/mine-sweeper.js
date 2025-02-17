const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    result.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] === true ? result[i].push(true) : result[i].push(false);
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result[i][j] = 0;
      if (matrix[i][j + 1] === true || matrix[i][j - 1] === true) {
        result[i][j] += 1;
      } else {
        result[i][j] += 0;
      }
      if (result[i + 1]) {
        matrix[i + 1][j] === true ||
        matrix[i + 1][j - 1] === true ||
        matrix[i + 1][j + 1] === true
          ? (result[i][j] += 1)
          : (result[i][j] += 0);
      }
      if (result[i - 1]) {
        matrix[i - 1][j] === true ||
        matrix[i - 1][j - 1] === true ||
        matrix[i - 1][j + 1] === true
          ? (result[i][j] += 1)
          : (result[i][j] += 0);
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper,
};
