"use strict";

module.exports = class Calculator {

  constructor(value){
    this.value = value;
  }

  action(command){
    command.execute();
  }

}
