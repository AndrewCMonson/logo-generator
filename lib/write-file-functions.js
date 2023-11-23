const fs = require('fs');
const { Circle, Triangle, Square } = require('./shapes.js');

const writeCircle = (characters, logocolor, textcolor) => {
    fs.writeFile('./examples/logo.svg', new Circle(characters, logocolor, textcolor).render(), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Generated logo saved to ./examples/logo.svg')}
        }
    )
}

const writeTriangle = (characters, logocolor, textcolor) => {
    fs.writeFile('./examples/logo.svg', new Triangle(characters, logocolor, textcolor).render(), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Generated logo saved to ./examples/logo.svg')}
        }
    )
}

const writeSquare = (characters, logocolor, textcolor) => {
    fs.writeFile('./examples/logo.svg', new Square(characters, logocolor, textcolor).render(), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Generated logo saved to ./examples/logo.svg')}
        }
    )
}

module.exports = {
    writeCircle,
    writeTriangle,
    writeSquare
}