import { mathEnforcer } from "../4.mathEnforcer.js";
import { expect } from "chai";

describe('Test function mathEnforcer', () => {
    describe('Test function addFive', () => {
        // Tests with incorrect inputs
        it('Should return undefined with a string as parameter', () => {
            expect(mathEnforcer.addFive('Hi')).to.equal(undefined);
        });
        it('Should return undefined with an object as a paramater', () => {
            expect(mathEnforcer.addFive({num: 5})).to.equal(undefined);
        });
        it('Should return undefined with an array as a parameter', () => {
            expect(mathEnforcer.addFive([0])).to.equal(undefined);
        });
        it('Should return undefined with an undefined parameter', () => {
            expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
        });
        it('Should return undefined with a null parameter', () => {
            expect(mathEnforcer.addFive(null)).to.equal(undefined);
            // Tests with correct input
        });
        it('Positive number +5', () => {
            expect(mathEnforcer.addFive(1)).to.equal(6);
        });
        it('Negative number +5', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });
        it('Floating number +5', () => {
            expect(mathEnforcer.addFive(0.5567)).to.be.closeTo(5.556, 0.001);
        });

    });
    describe('Test function subtractTen', () => {
        // Tests with incorrect input
        it('Should return undefined with a string as parameter', () => {
            expect(mathEnforcer.subtractTen('Hi')).to.equal(undefined);
        });
        it('Should return undefined with an object as a paramater', () => {
            expect(mathEnforcer.subtractTen({num: 5})).to.equal(undefined);
        });
        it('Should return undefined with an array as a parameter', () => {
            expect(mathEnforcer.subtractTen([0])).to.equal(undefined);
        });
        it('Should return undefined with an undefined parameter', () => {
            expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
        });
        it('Should return undefined with a null parameter', () => {
            expect(mathEnforcer.subtractTen(null)).to.equal(undefined);
        });
        // Tests with correct input
        it('Positive number -10', () => {
            expect(mathEnforcer.subtractTen(11)).to.equal(1);
        });
        it('Negative number -10', () => {
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        });
        it('Floating number -10', () => {
            expect(mathEnforcer.subtractTen(10.5)).to.equal(0.5);
        });
    });
    describe('Test function sum', () => {
        //Tests with correct input
        it('Two positive numbers', () => {
            expect(mathEnforcer.sum(2, 3)).to.equal(5);
        });
        it('Two negative numbers', () => {
            expect(mathEnforcer.sum(-2, -3)).to.equal(-5);
        });
        it('One positive and one negative numbers', () => {
            expect(mathEnforcer.sum(2, -3)).to.equal(-1);
        });
        it('One integer and one decimal numbers', () => {
            expect(mathEnforcer.sum(2, 1.1)).to.equal(3.1);
        });
        it('Two decimal numbers', () => {
            expect(mathEnforcer.sum(2.2, 1.1)).to.be.closeTo(3.3, 0.001);
        });
        // Tests with incorrect input
        it('First parameter as a string', () => {
            expect(mathEnforcer.sum('Hi', 1)).to.equal(undefined);
        });
        it('Second parameter as an array', () => {
            expect(mathEnforcer.sum(4, [1])).to.equal(undefined);
        });
        it('First parameter underfind, second null', () => {
            expect(mathEnforcer.sum(undefined, null)).to.equal(undefined);
        });
        // Tests with correct imputs
        it('Two positive integer Numbers', () => {
            expect(mathEnforcer.sum(6, 1)).to.equal(7);
        });
        it('First parameter positive integer, second negative integer', () => {
            expect(mathEnforcer.sum(6, -1)).to.equal(5);
        });
        it('First parameter negative integer, second positive integer', () => {
            expect(mathEnforcer.sum(-6, 1)).to.equal(-5);
        });
        it('First parameter integer number, second decimal number', () => {
            expect(mathEnforcer.sum(6, 1.1)).to.equal(7.1);
        });
        it('First parameter decimal number, second integer number', () => {
            expect(mathEnforcer.sum(6.666, 1)).to.equal(7.666);
        });
    });
});