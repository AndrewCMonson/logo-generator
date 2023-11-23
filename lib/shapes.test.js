const { Shape, Square, Circle, Triangle } = require('./shapes');

describe('Shape', () => {
    it('should create a new Shape object', () => {
        const shape = new Shape('text', 'color', 'textcolor');
        expect(shape).toBeInstanceOf(Shape);
    });

    it('should render the Shape', () => {
        const color = 'red';
        const shape = new Shape('text', color, 'textcolor');
        expect(shape.render()).toEqual('Please enter a valid shape');
    });
});

describe('Square', () => {
    it('should create a new Square object', () => {
        const square = new Square('text', 'color', 'textcolor');
        expect(square).toBeInstanceOf(Square);
    });

    it('should render the Square', () => {
        const color = 'red';
        const text = 'text'
        const textcolor = 'green'
        const square = new Square(text, color, textcolor);
        expect(square.render()).toEqual(`
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
        
        <rect width="100%" height="100%" fill="white" />
        
        <rect x="75" y="25" width="150" height="150" fill="${color}" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}" font-family="sans-serif">${text}</text>`);
    });
});

describe('Circle', () => {
    it('should create a new Circle object', () => {
        const circle = new Circle('text', 'color', 'textcolor');
        expect(circle).toBeInstanceOf(Circle);
    });

    it('should render the Circle', () => {
        const color = 'red';
        const text = 'text';
        const textcolor = 'green';
        const circle = new Circle(text, color, textcolor);
        expect(circle.render()).toEqual(`
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
        
        <rect width="100%" height="100%" fill="white" />
        
        <circle cx="150" cy="100" r="75" fill="${color}" />
        
        <text x="150" y="115" font-size="60" text-anchor="middle" fill="${textcolor}" font-family="sans-serif">${text}</text>`);
    });
});

describe('Triangle', () => {
    it('should create a new Triangle object', () => {
        const triangle = new Triangle('text', 'color', 'textcolor');
        expect(triangle).toBeInstanceOf(Triangle);
    });

    it('should render the Triangle', () => {
        const color = 'red';
        const text = 'text';
        const textcolor = 'green';
        const triangle = new Triangle(text, color, textcolor);
        expect(triangle.render()).toEqual(`
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
        
        <rect width="100%" height="100%" fill="white" />
        
        <polygon points="25 181, 150 16, 275 181" fill="${color}" />
        
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textcolor}" font-family="sans-serif">${text}</text>`);
    });
});