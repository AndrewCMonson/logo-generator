const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes.js');

console.log('Welcome to LogoMaker');

inquirer
    .prompt([
        {
            name: 'characters',
            type: 'input',
            message: 'Please enter your logo characters',
            validate: function (value){
                if (!value){
                    return 'Please enter at least one character for your logo'
                } else if (value.length > 3) {
                    return 'Please enter no more than three characters for your logo'
                } else {
                    return true;
                }
            }
        },
        {
            name: 'textcolor',
            type: 'input',
            message: 'Please enter a color or hexadecimal code for your logo\'s text',
            valdiate: function (value) {
                if (!value) {
                    return 'Please enter a valid color or hexadecimal code for your logo\'s text'
                } else {
                    return true;
                }
            }
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
            message: 'Please enter a color or hexadecimal code for your logo',
            validate: function (value) {
                if (!value) {
                    return 'Please enter a valid color or hexadecimal code for your logo'
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
                fs.writeFile('./examples/logo.svg', new Circle(characters, logocolor, textcolor).render(), (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Generated logo saved to ./examples/logo.svg')}
                    }
                );
                    break;
            case 'Triangle':
                fs.writeFile('./examples/logo.svg', new Triangle(characters, logocolor, textcolor).render(), (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Generated logo saved to ./examples/logo.svg')}
                    }
                );
                    break;
            case 'Square':
                fs.writeFile('./examples/logo.svg', new Square(characters, logocolor, textcolor).render(), (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Generated logo saved to ./examples/logo.svg')}
                    }
                );
                break;
            default:
                console.log('Please enter a valid shape');
                break;
        }
    }  
    )
    .catch((err) => console.log(err));
