const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition,
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  additionStringArray = [];

  if (addition !== undefined) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionStringArray.push(addition + '');
    }
  }
  additionString = additionStringArray.join(additionSeparator);

  str = str + additionString;
  stringArray = [];
  for (let i = 0; i < repeatTimes; i++) {
    stringArray.push(str + '');
  }
  string = stringArray.join(separator);

  return string;
}

module.exports = {
  repeater,
};
