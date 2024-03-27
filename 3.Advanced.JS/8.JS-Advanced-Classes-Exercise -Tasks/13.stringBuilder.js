describe('Tests for StringBuilder Class', () => {
    let instance;

    const createInstance = (value) => {
        return new StringBuilder(value);
    };

    const expectNotToThrow = (callback) => {
        expect(callback).not.to.throw();
    };

    const expectToThrow = (callback, error, errorMessage) => {
        expect(callback).to.throw(error, errorMessage);
    };

    describe('Constructor', () => {
        it('initializes correctly with a string', () => {
            expectNotToThrow(() => instance = createInstance('abc'));
            expect(instance.toString()).to.equal('abc');
        });

        it('initializes correctly without arguments', () => {
            expectNotToThrow(() => instance = createInstance());
            expect(instance.toString()).to.equal('');
        });

        it('throws for non-string inputs', () => {
            const nonStrings = [123, ['abc'], null];
            nonStrings.forEach(input => {
                expectToThrow(() => createInstance(input), TypeError, 'Argument must be a string');
            });
        });
    });

    describe('append Method', () => {
        beforeEach(() => {
            instance = createInstance('abc');
        });

        it('appends string as intended', () => {
            instance.append('123');
            expect(instance.toString()).to.equal('abc123');
        });

        it('throws for non-string input', () => {
            const nonStrings = [undefined, 123, null];
            nonStrings.forEach(input => {
                expectToThrow(() => instance.append(input), TypeError, 'Argument must be a string');
            });
        });
    });

    describe('prepend Method', () => {
        beforeEach(() => {
            instance = createInstance('abc');
        });

        it('prepends string as intended', () => {
            instance.prepend('123');
            expect(instance.toString()).to.equal('123abc');
        });

        it('throws for non-string input', () => {
            expectToThrow(() => instance.prepend(undefined), TypeError, 'Argument must be a string');
        });
    });

    describe('insertAt Method', () => {
        beforeEach(() => {
            instance = createInstance('abc');
        });

        it('inserts string at correct position', () => {
            instance.insertAt('123', 1);
            expect(instance.toString()).to.equal('a123bc');
            instance = createInstance('abc');
            instance.insertAt('123', -1);
            expect(instance.toString()).to.equal('ab123c');
        });

        it('throws for non-string input', () => {
            expectToThrow(() => instance.insertAt(123, 1), TypeError, 'Argument must be a string');
        });
    });

    describe('remove Method', () => {
        beforeEach(() => {
            instance = createInstance('abc');
        });

        it('removes characters as intended', () => {
            instance.remove(1, 1);
            expect(instance.toString()).to.equal('ac');
        });
    });

    describe('toString Method', () => {
        it('returns correct string representation', () => {
            instance = createInstance();
            const expected = '\n A \n\r B\t123   ';
            expected.split('').forEach(s => {
                instance.append(s);
                instance.prepend(s);
            });

            instance.insertAt('test', 4);
            instance.remove(2, 4);

            expect(instance.toString()).to.equal('  st21\tB \r\n A \n\n A \n\r B\t123   ');
        });
    });
});