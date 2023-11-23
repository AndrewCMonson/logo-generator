const whitespaceChecker = require('./whitespacechecker');

describe('Check for whitespace', () => {
    it('should return true if there is whitespace', () => {
        expect(whitespaceChecker('this has whitespace')).toBe(true);
    });

    it('should return false if there is no whitespace', () => {
        expect(whitespaceChecker('thishasnospace')).toBe(false);
    });
});