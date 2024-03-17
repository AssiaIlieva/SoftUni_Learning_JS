import { lookupChar } from "../3.charLookup.js";
import { expect } from "chai";

describe('lookupChar funtion tests', () => {
    it('return char at valid index', () => {
        expect(lookupChar('Hello', 1)).to.equal('e');
    });
    it('return char at first index', () => {
        expect(lookupChar('Hi', 0)).to.equal('H');
    });
    it('return char at last index', () => {
        expect(lookupChar('Hi', 1)).to.equal('i');
    });
    it('return error with invalid index < 0', () => {
        expect(lookupChar('Hi', -1)).to.equal('Incorrect index');
    });
    it('return error with invalid index >= sting length', () => {
        expect(lookupChar('Hi', 2)).to.equal('Incorrect index');
    });
    it('return undefined with non-integer parameter', () => {
        expect(lookupChar('Hi', 5.2)).to.equal(undefined);
    });
    it('return undefined if first parameter is not string', () => {
        expect(lookupChar(3, 5.2)).to.equal(undefined);
    }); 
    it('return undefined if both parameters are numbers', () => {
        expect(lookupChar(3, 5)).to.equal(undefined);
    }); 
    it('return undefined if the second parameter is not a number', () => {
        expect(lookupChar(3, 'hi')).to.equal(undefined);
    });
    it('return undefined if the second parameter is not a number', () => {
        expect(lookupChar(3, '3')).to.equal(undefined);
    });
})