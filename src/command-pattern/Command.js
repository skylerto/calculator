"use strict";

/**
 * Command class.
 * @type {Command}
 */
module.exports = class Command {

  constructor(op, value) {
    this.op = op;
    this.value = value;
  }

  /**
   * execute
   * @return {[type]} [description]
   */
  execute(){}

  unexecute(){}
}
