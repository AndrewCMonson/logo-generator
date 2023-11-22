const fs = require('fs');
const inquirer = require('inquirer');
const Square = require('./lib/shapes.js');

fs.writeFile('./examples/output.svg', new Square('ACM', 'blue', 'black').render(), (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('The file has been saved!');
    }
});