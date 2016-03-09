"use strict";

// CLI
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let stuff = new Array();

// Import our calculator
let Calculator = require('./command-pattern/Calculator.js');
let calculator = new Calculator(0); // initialize calculator with value 0.

// Import Useful Commands
let Command = require('./command-pattern/Command.js');
let AddCommand = require('./command-pattern/AddCommand.js');
let SubCommand = require('./command-pattern/SubCommand.js');

// Set the prompt
rl.setPrompt('cmd> ');
rl.prompt();

rl.on('line', (line) => {
  // Set the input to be an array.
  let input = line.trim().split(" ");

  // remove the command from the input.
  let command = input.shift();

  // Define the operators.
  let op = Number.parseInt(input[0]);

  switch (command) {
    case 'done':
      // close it all down.
      rl.close();
      break;
    case 'add':
      // Add Ops things to the array.
      if (op) {
        calculator.execute(new AddCommand(op, calculator.value));
      }
      break;
    case 'sub':
      // subtracts ops.
      if (op) {
        calculator.execute(new SubCommand(op, calculator.value));
      }
      break;
    case 'undo':
      // Undo the last command.
      calculator.unexecute();
      break;
    default:
      console.log("I don't know tht one!");
      break;
  }
  console.log("=" + calculator.value);
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
