import { isSymmetric } from "./checkForSymmetry.js";
import { expect } from "chai";

describe('Symetry checker', function(){
    it('returns true for even elements symetric array', () => {
        let arr = [1, 2, 2, 1];
        expect(isSymmetric(arr)).to.be.true;
    });
    it('returns false for non-symentric array', () => {
        let arr = [1, 2, 3];
        expect(isSymmetric(arr)).to.be.false;
    });
    it('returns false with non-array argument', () => {
        let data = 121;
        expect(isSymmetric(data)).to.be.false;
    });
    it('returns true for odd elements symetric array', () => {
        let arr = [1, 2, 1];
        expect(isSymmetric(arr)).to.be.true;
    });
    it('returns true for same elements symetric array', () => {
        let arr = [1, 1, 1, 1];
        expect(isSymmetric(arr)).to.be.true;
    });
    it('returns false with array-like argument', () => {
        let data = '1221';
        expect(isSymmetric(data)).to.be.false;
    });
    it('should return false for any input that is not of the correct type', function() {
        expect(isSymmetric(null)).to.be.false;
        expect(isSymmetric(undefined)).to.be.false;
        expect(isSymmetric({})).to.be.false;
        expect(isSymmetric('text')).to.be.false;
        expect(isSymmetric(123)).to.be.false;
    });
    it('should return false for an empty array', function() {
        expect(isSymmetric([])).to.be.true;
    });
    it('should return false for an array with different types', function() {
        expect(isSymmetric([1, '1'])).to.be.false;
    });
})