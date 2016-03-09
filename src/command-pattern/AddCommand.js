"use strict";

let Command = require('./Command.js');

module.exports = class AddCommand extends Command {

  constructor(op1, op2, value) {
    super(op1, op2, value);
  }

  /**
   * Definition of what it means to `Add`.
   * @return {int} integer result of adding.
   */
  execute() {
    return this.op1 + this.op2;
  }

  unexecute() {
    return this.op1 - this.op2;
  }
}
