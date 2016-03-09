"use strict";

/**
 * Command class.
 * @type {Command}
 */
module.exports = class Command {

  constructor(op1, op2, value) {
    this.op1 = op1;
    this.op2 = op2;
    this.value = value;
  }

  /**
   * execute
   * @return {[type]} [description]
   */
  execute(){}

  unexecute(){}
}
