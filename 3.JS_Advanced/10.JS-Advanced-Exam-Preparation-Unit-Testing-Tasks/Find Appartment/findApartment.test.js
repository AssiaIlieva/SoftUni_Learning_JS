import { findNewApartment } from "../findApartment.js";
import { expect } from "chai";

describe('Test findNewApartment', ()=>{
    describe('Test of isGoodLocation', ()=>{
        it('Test with invalid input', ()=>{
            expect(()=> findNewApartment.isGoodLocation('string', 3)).to.throw(Error, 'Invalid input!');
            expect(()=> findNewApartment.isGoodLocation('string', [])).to.throw(Error, 'Invalid input!');
            expect(()=> findNewApartment.isGoodLocation('string', 'true')).to.throw(Error, 'Invalid input!');
            expect(()=> findNewApartment.isGoodLocation(3, true)).to.throw(Error, 'Invalid input!');
            expect(()=> findNewApartment.isGoodLocation(true, true)).to.throw(Error, 'Invalid input!');
            expect(()=> findNewApartment.isGoodLocation([], false)).to.throw(Error, 'Invalid input!');
            expect(()=> findNewApartment.isGoodLocation(true, 'string')).to.throw(Error, 'Invalid input!');
        })
        it('Test city name with unknown city', ()=>{
            expect(findNewApartment.isGoodLocation('Burgas', true)).to.equal('This location is not suitable for you.')
            expect(findNewApartment.isGoodLocation('Burgas', false)).to.equal('This location is not suitable for you.')
        })
        it('Test nearPublicTransportation', ()=>{
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.')
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal('There is no public transport in area.')
            expect(findNewApartment.isGoodLocation('Varna', false)).to.equal('There is no public transport in area.')
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!')
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!')
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!')
        })
    })
    describe('Test of isLargeEnough', ()=>{
        it('Test with invalid inputs', ()=>{
            expect(()=> findNewApartment.isLargeEnough('string', 50)).to.throw(Error, "Invalid input!");
            expect(()=> findNewApartment.isLargeEnough([], 50)).to.throw(Error, "Invalid input!");
            expect(()=> findNewApartment.isLargeEnough([50], '50')).to.throw(Error, "Invalid input!");
        })
        it('Test with valid inputs', ()=>{
            expect(findNewApartment.isLargeEnough([20, 40, 50], 50)).to.equal('50');
            expect(findNewApartment.isLargeEnough([30, 50, 60,], 50)).to.equal('50, 60');
            expect(findNewApartment.isLargeEnough([20, 40, 50], 60)).to.equal('');
        })
    })
    describe('Test of isItAffordable', ()=>{
        it('Test of invalid input', ()=>{
            expect(()=> findNewApartment.isItAffordable(500, "500")).to.throw(Error, 'Invalid input!');
            expect(()=> findNewApartment.isItAffordable('500', 300)).to.throw(Error, 'Invalid input!');
            expect(()=> findNewApartment.isItAffordable(0, 500)).to.throw(Error, 'Invalid input!');
            expect(()=> findNewApartment.isItAffordable(500, 0)).to.throw(Error, 'Invalid input!');
            expect(()=> findNewApartment.isItAffordable(0, 0)).to.throw(Error, 'Invalid input!');
        })
        it('Test of valid input', ()=>{
            expect(findNewApartment.isItAffordable(500, 400)).to.equal("You don't have enough money for this house!");
            expect(findNewApartment.isItAffordable(500, 500)).to.equal('You can afford this home!');
            expect(findNewApartment.isItAffordable(500, 800)).to.equal('You can afford this home!');

        })
    })
})