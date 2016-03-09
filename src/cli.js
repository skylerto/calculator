"use strict";

// CLI
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let stuff = new Array();
let commands = new Array();

//
let Command = require('./command-pattern/Command.js');
let AddCommand = require('./command-pattern/AddCommand.js');


// Set the prompt
rl.setPrompt('command-pattern> ');
rl.prompt();

// Setup pattern

rl.on('line', (line) => {

  // Set the input to be an array.
  let input = line.trim().split(" ");

  // remove the command from the input.
  let command = input.shift();

  switch (command) {
    // close it all down.
    case 'done':
      rl.close();
      break;
    // add things to the array.
    case 'add':
      let add = new AddCommand(stuff, input[0]);
      commands.push(add);
      add.execute();
      console.log(stuff);
      break;
    case 'undo':
      let undo = commands.pop();
      if(undo == undefined){
        console.log("Nothing left to undo!");
        break;
      }
      undo.unexecute();
      console.log(stuff);
      break;
    default:
      console.log("I don't know tht one!");
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
