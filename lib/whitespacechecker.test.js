describe('Check for whitespace', () => {
    test('should return true if there is whitespace', () => {
        expect(whitespaceChecker('this has whitespace')).toBe(true);
    });

    test('should return false if there is no whitespace', () => {
        expect(whitespaceChecker('thishasnospace')).toBe(false);
    });
});