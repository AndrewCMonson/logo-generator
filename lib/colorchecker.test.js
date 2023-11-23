const colorChecker = require('./colorchecker.js');

describe('Check for valid color', () => {
    it('should return true if there is a valid color', () => {
        expect(colorChecker('red')).toBe(true);
    });

    it('should return false if there is not a valid color', () => {
        expect(colorChecker('not a color')).toBe(false);
    });
});