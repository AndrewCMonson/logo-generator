const { Shape, Square, Circle, Triangle } = require('./shapes');

describe('Shape', () => {
    it('should create a new Shape object', () => {
        const shape = new Shape('text', 'color', 'textcolor');
        expect(shape).toBeInstanceOf(Shape);
    });

    it('should render the Shape', () => {
        const shape = new Shape('text', 'color', 'textcolor');
        expect(shape.render()).toBeDefined();
    });
});

describe('Square', () => {
    it('should create a new Square object', () => {
        const square = new Square('text', 'color', 'textcolor');
        expect(square).toBeInstanceOf(Square);
    });

    it('should render the Square', () => {
        const square = new Square('text', 'color', 'textcolor');
        expect(square.render()).toBeDefined();
    });
});

describe('Circle', () => {
    it('should create a new Circle object', () => {
        const circle = new Circle('text', 'color', 'textcolor');
        expect(circle).toBeInstanceOf(Circle);
    });

    it('should render the Circle', () => {
        const circle = new Circle('text', 'color', 'textcolor');
        expect(circle.render()).toBeDefined();
    });
});

describe('Triangle', () => {
    it('should create a new Triangle object', () => {
        const triangle = new Triangle('text', 'color', 'textcolor');
        expect(triangle).toBeInstanceOf(Triangle);
    });

    it('should render the Triangle', () => {
        const triangle = new Triangle('text', 'color', 'textcolor');
        expect(triangle.render()).toBeDefined();
    });
});