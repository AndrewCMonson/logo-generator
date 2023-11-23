const inquirer = require('inquirer');
const whitespaceChecker = require('./lib/whitespacechecker.js');
const { writeCircle, writeTriangle, writeSquare } = require('./lib/write-file-functions.js');

console.log('Welcome to LogoMaker');

inquirer
    .prompt([
        {
            name: 'characters',
            type: 'input',
            message: 'Please enter your logo characters',
            validate: function (value){
                if (!value){
                    return 'Please enter at least one character for your logo:'
                } else if (value.length > 3) {
                    return 'Please enter no more than three characters for your logo!'
                } else {
                    return true;
                }
            }
        },
        {
            name: 'textcolor',
            type: 'input',
            message: 'Please enter a color or hexadecimal code for your logo\'s text',
            validate: function (value) {
                if (!value) {
                    return 'Please enter a valid color or hexadecimal code for your logo:'
                } else if (whitespaceChecker(value)) {
                    return 'Please enter a valid color or hexadecimal code for your logo. Spaces are not allowed!'
                } else {
                    return true;
                }
            }
        },
        {
            name: 'shape',
            type: 'list',
            message: 'Please select a shape for your logo:',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            name: 'logocolor',
            type: 'input',
            message: 'Please enter a color or hexadecimal code for your logo.',
            validate: function (value) {
                if (!value) {
                    return 'Please enter a valid color or hexadecimal code for your logo!'
                } else {
                    return true;
                }
            }
        }

    ])
    
    .then((response) => {
        const shape = response.shape;
        const characters = response.characters.toUpperCase();
        const textcolor = response.textcolor;
        const logocolor = response.logocolor;

        switch (shape) {
            case 'Circle':
                writeCircle(characters, logocolor, textcolor);
                    break;
            case 'Triangle':
                writeTriangle(characters, logocolor, textcolor);
                    break;
            case 'Square':
                writeSquare(characters, logocolor, textcolor);
                break;
            default:
                console.log('Please enter a valid shape');
                break;
        }
    })
    .catch((err) => console.log(err));