"use strict";

module.exports = class Calculator {

  constructor(value) {
    this._value = value;
    this.commands = new Array();
  }

  execute(command) {
    this._value = command.execute();
    this.commands.push(command);
  }

  unexecute() {
    let command = this.commands.pop();

    if (command != undefined) {
      this._value = command.unexecute();
    }
  }

  set value(value) {
    this._value = value;
  }
  get value() {
    return this._value;
  }

}
