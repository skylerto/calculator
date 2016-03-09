"use strict";

let Command = require('./Command.js');

module.exports = class SubCommand extends Command {

  constructor(op, value) {
    super(op, value);
  }

  /**
   * Definition of what it means to `Add`.
   * @return {int} integer result of adding.
   */
  execute() {
    this.value = this.value - this.op;
    return this.value;
  }

  unexecute() {
    this.value = this.value + this.op;
    return this.value;
  }
}
