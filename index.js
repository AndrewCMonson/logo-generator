const fs = require('fs');
const inquirer = require('inquirer');
const Square = require('./lib/shapes.js');
const Triangle = require('./lib/shapes.js');
const Circle = require('./lib/shapes.js');

console.log('Welcome to LogoMaker');

inquirer
    .prompt([
        {
            name: 'characters',
            type: 'input',
            message: 'Please enter your logo characters'
        },
        {
            name: 'textcolor',
            type: 'input',
            message: 'Please enter a color or hexadecimal code for your logo\'s text'
        },
        {
            name: 'shape',
            type: 'list',
            message: 'Please select a shape for your logo',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            name: 'logocolor',
            type: 'input',
            message: 'Please enter a color or hexadecimal code for your logo'
        }

    ])
    // TODO: write logic to determine which shape is selected and create a new object based on that selection.
    .then((response) => (fs.writeFile('./examples/output.svg', new Square(response.characters, response.textcolor, response.logocolor).render(), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('The file has been saved!');
        }
    })));

// fs.writeFile('./examples/output.svg', new Square('ACM', 'blue', 'black').render(), (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('The file has been saved!');
//     }
// });