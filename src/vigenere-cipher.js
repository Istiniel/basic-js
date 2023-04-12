const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
const abc = 'abcdefghijklmnopqrstuvwxyz';

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }

    let tempabc = abc.split('');
    let tempkey = key
      .toLowerCase()
      .repeat(55)
      .slice(0, str.length)
      .split('')
      .map((e) => tempabc.indexOf(e));

    str
      .split('')
      .forEach((el, ind) => (el === ' ' ? tempkey.splice(ind, 0, ' ') : ''));

    str = str
      .toLowerCase()
      .split('')
      .map((e, index) => {
        if (abc.indexOf(e) != '-1') {
          return (tempabc.indexOf(e) + tempkey[index]) % tempabc.length;
        } else {
          return e;
        }
      })
      .map((e) => {
        if (typeof e === 'number') {
          return tempabc[e];
        } else {
          return e;
        }
      });

    return this.isDirect
      ? str.join('').toUpperCase()
      : str.reverse().join('').toUpperCase();
  }

  decrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }
    let tempabc = abc.split('');
    let tempkey = key
      .toLowerCase()
      .repeat(55)
      .slice(0, str.length)
      .split('')
      .map((e) => tempabc.indexOf(e));

    str
      .split('')
      .forEach((el, ind) => (el === ' ' ? tempkey.splice(ind, 0, ' ') : ''));

    str = str
      .toLowerCase()
      .split('')
      .map((e, index) => {
        if (abc.indexOf(e) != '-1') {
          let shiftVal = tempabc.indexOf(e) - tempkey[index];
          return shiftVal < 0 ? shiftVal + tempabc.length : shiftVal;
        } else {
          return e;
        }
      });

    str = str.map((e) => {
      if (typeof e === 'number') {
        return tempabc[e];
      } else {
        return e;
      }
    });
    return this.isDirect
      ? str.join('').toUpperCase()
      : str.reverse().join('').toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine,
};
