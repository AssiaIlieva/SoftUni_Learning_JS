import { movieTheater } from "../movieTheater.js";
import { expect } from "chai";

describe('Test movieTheater', ()=>{
    describe('Test of ageRestrictions', ()=>{
        it('Test with "G" as input', ()=>{
            expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie');
        })
        it('Test with "PG" as input', ()=>{
            expect(movieTheater.ageRestrictions('PG')).to.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
        })
        it('Test with "R" as input', ()=>{
            expect(movieTheater.ageRestrictions('R')).to.equal('Restricted! Under 17 requires accompanying parent or adult guardian');
        })
        it('Test with "NC-17" as input', ()=>{
            expect(movieTheater.ageRestrictions('NC-17')).to.equal('No one under 17 admitted to watch the movie');
        })
        it('Test with "any string" as input', ()=>{
            expect(movieTheater.ageRestrictions('whatever')).to.equal('There are no age restrictions for this movie');
        })
    })
    describe('Test of moneySpent', ()=>{
        it('Test with non-valid inputs', ()=>{
            expect(()=>movieTheater.moneySpent('G', ['Nachos','Popcorn'])).to.throw(Error, 'Invalid input');
            expect(()=>movieTheater.moneySpent('G', ['Nachos','Popcorn'],['Soda','Water'])).to.throw(Error, 'Invalid input');
            expect(()=>movieTheater.moneySpent(6, 1,['Soda','Water'])).to.throw(Error, 'Invalid input');
            expect(()=>movieTheater.moneySpent(6, ['Nachos','Popcorn'], 1)).to.throw(Error, 'Invalid input');
        })
        it('Test with valid inputs with discount', ()=>{
            expect(movieTheater.moneySpent(4, [], [])).to.equal('The total cost for the purchase with applied discount is 48.00')
            expect(movieTheater.moneySpent(4, ['Nachos', 'Nachos'], ['Water','Soda'])).to.equal('The total cost for the purchase with applied discount is 60.80')
            expect(movieTheater.moneySpent(4, ['Nachos', 'Popcorn'], [])).to.equal('The total cost for the purchase with applied discount is 56.40')
            expect(movieTheater.moneySpent(4, [], ['Soda'])).to.equal('The total cost for the purchase with applied discount is 50.00')
        })
        it('Test with valid inputs without discount', ()=>{
            expect(movieTheater.moneySpent(1, [], [])).to.equal('The total cost for the purchase is 15.00')
            expect(movieTheater.moneySpent(1, ['Nachos', 'Popcorn'], ['Water','Soda'])).to.equal('The total cost for the purchase is 29.50')
            expect(movieTheater.moneySpent(1, ['Nachos', 'Nachos'], [])).to.equal('The total cost for the purchase is 27.00')
            expect(movieTheater.moneySpent(1, [], ['Soda'])).to.equal('The total cost for the purchase is 17.50')
        })
    })
    describe('Test of reservation', ()=>{
        it('Test of non-valid input', ()=>{
            expect(()=>movieTheater.reservation([],[])).to.throw(Error, 'Invalid input');
            expect(()=>movieTheater.reservation(5,[])).to.throw(Error, 'Invalid input');
            expect(()=>movieTheater.reservation(5,5)).to.throw(Error, 'Invalid input');
        })
        it('Test of valid inputs', ()=>{
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 5)).to.equal(2);
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 7)).to.equal(1);
        })
    })
})