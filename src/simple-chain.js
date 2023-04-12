const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value + '');
    return this;
  },

  removeLink(position) {
    if (position > this.chain.length) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    if (position === 0 || position < 0 || isNaN(+position)) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain = this.chain.filter((el, pos) => pos !== position - 1);
    return this;
  },

  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = this.chain.map((unit) => `( ${unit} )`).join('~~');
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
