import { expect } from "chai";
import { motorcycleRider } from "../motorcycleRider.js";

describe('MotocycleRider', ()=>{
    describe('licenseRegistration', ()=>{
        it('Tests with valid input', ()=>{
            expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
            expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
            expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
            expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.');
        });
        it('Test with invalid input', ()=>{
            expect(()=> motorcycleRider.licenseRestriction('test')).to.throw(Error, 'Invalid Information!');
            expect(()=> motorcycleRider.licenseRestriction(5)).to.throw(Error, 'Invalid Information!');
        });
    });
    describe('motorcycleShowroom', ()=>{
        it('Tests with invalid input', ()=>{
            expect(()=>motorcycleRider.motorcycleShowroom([125, 500], 'test')).to.throw(Error, 'Invalid Information!');
            expect(()=>motorcycleRider.motorcycleShowroom([125, 500], '5')).to.throw(Error, 'Invalid Information!');
            expect(()=>motorcycleRider.motorcycleShowroom([125, 500], 49)).to.throw(Error, 'Invalid Information!');
            expect(()=>motorcycleRider.motorcycleShowroom([], 100)).to.throw(Error, 'Invalid Information!');
            expect(()=>motorcycleRider.motorcycleShowroom(100, 100)).to.throw(Error, 'Invalid Information!');
            expect(()=>motorcycleRider.motorcycleShowroom('array', 100)).to.throw(Error, 'Invalid Information!');
        })
        it('Tests with valid input', ()=>{
            expect(motorcycleRider.motorcycleShowroom([50, 100], 100)).to.equals("There are 2 available motorcycles matching your criteria!");
            expect(motorcycleRider.motorcycleShowroom([35, 100], 100)).to.equals("There are 1 available motorcycles matching your criteria!");
            expect(motorcycleRider.motorcycleShowroom([35, 100, 'test'], 500)).to.equals("There are 1 available motorcycles matching your criteria!");
            expect(motorcycleRider.motorcycleShowroom([500], 500)).to.equals("There are 1 available motorcycles matching your criteria!");
            expect(motorcycleRider.motorcycleShowroom([0], 500)).to.equals("There are 0 available motorcycles matching your criteria!");
        })
    });
    describe('otherSpendings', ()=>{
        it('Tests with invalid input', ()=>{
            expect(()=>motorcycleRider.otherSpendings('array', ['engine oil'], true )).to.throw(Error, 'Invalid Information!');
            expect(()=>motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil'], 50 )).to.throw(Error, 'Invalid Information!');
            expect(()=>motorcycleRider.otherSpendings(['helmet', 'jacked'], 'array', false )).to.throw(Error, 'Invalid Information!');
            expect(()=>motorcycleRider.otherSpendings(['helmet', 'jacked'], 'array', true )).to.throw(Error, 'Invalid Information!');
        })
        it('Tests with valid input', ()=>{
            expect(motorcycleRider.otherSpendings(['helmet','jacked'],[], true)).to.equal('You spend $450.00 for equipment and consumables with 10% discount!'); 
            expect(motorcycleRider.otherSpendings(['helmet'],['engine oil'], true)).to.equal('You spend $243.00 for equipment and consumables with 10% discount!'); 
            expect(motorcycleRider.otherSpendings([],['engine oil', 'oil filter'], true)).to.equal('You spend $90.00 for equipment and consumables with 10% discount!'); 
            expect(motorcycleRider.otherSpendings(['helmet','jacked'],[], false)).to.equal('You spend $500.00 for equipment and consumables!'); 
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'],['engine oil', 'oil filter'], false)).to.equal('You spend $600.00 for equipment and consumables!'); 
            expect(motorcycleRider.otherSpendings([],['engine oil'], false)).to.equal('You spend $70.00 for equipment and consumables!'); 
            expect(motorcycleRider.otherSpendings([],[], false)).to.equal('You spend $0.00 for equipment and consumables!'); 
        })

    })

})