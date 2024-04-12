import { planYourTrip } from "../planYourTrip.js";
import { expect } from "chai";

describe('Test planYourTrip', ()=>{
    describe('Test choosingDestination', ()=>{
        it('Test with invalid year input', ()=>{
            expect(()=> planYourTrip.choosingDestination('Ski Resort', 'Winter',2021)).to.throw(Error, 'Invalid Year!');
            expect(()=> planYourTrip.choosingDestination('Ski Resort', 'Winter',2025)).to.throw(Error, 'Invalid Year!');
            expect(()=> planYourTrip.choosingDestination('Ski Resort', 'Winter','2025')).to.throw(Error, 'Invalid Year!');
            expect(()=> planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024.4)).to.throw(Error, 'Invalid Year!');
            expect(()=> planYourTrip.choosingDestination('Ski Resort', 'Winter', undefined)).to.throw(Error, 'Invalid Year!');
        })        
        it('Test with invalid destination input', ()=>{
            expect(()=> planYourTrip.choosingDestination('Beach', 'Winter',2024)).to.throw(Error, 'This destination is not what you are looking for.');
            expect(()=> planYourTrip.choosingDestination('Beach', 'Summer',2024)).to.throw(Error, 'This destination is not what you are looking for.');
        })        
        it('Test with valid destination input', ()=>{
            expect(planYourTrip.choosingDestination('Ski Resort', 'Winter',2024)).to.equal('Great choice! The Winter is the perfect time to visit the Ski Resort.')
        })        
        it('Test with invalid season input', ()=>{
            expect(planYourTrip.choosingDestination('Ski Resort', 'Summer',2024)).to.equal('Consider visiting during the Winter for the best experience at the Ski Resort.')
        })        
    })
    describe('Test exploreOptions', ()=>{
        it('Test with valid inputs', ()=>{
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 0)).to.equal('Snowboarding, Winter Hiking');
            expect(planYourTrip.exploreOptions(["Skiing"], 0)).to.equal('');
        })        
        it('Test with invalid activities input', ()=>{
            expect(() => planYourTrip.exploreOptions("Skiing", 0)).to.throw(Error, 'Invalid Information!');
        })        
        it('Test with invalid activityIndex input', ()=>{
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], '1')).to.throw(Error, 'Invalid Information!');
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], -1)).to.throw(Error, 'Invalid Information!');
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 4)).to.throw(Error, 'Invalid Information!');
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1.5)).to.throw(Error, 'Invalid Information!');
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 3)).to.throw(Error, 'Invalid Information!');
            expect(() => planYourTrip.exploreOptions([], 0)).to.throw(Error, 'Invalid Information!');
        })          
    })
    describe('Test estimateExpenses', ()=>{        
        it('Test with invalid distanceInKilometers input', ()=>{
            expect(() => planYourTrip.estimateExpenses('100', 5)).to.throw(Error, 'Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(100, '5')).to.throw(Error, 'Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(-100, 5)).to.throw(Error, 'Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(100, -5)).to.throw(Error, 'Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(0, 5)).to.throw(Error, 'Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(100, 0)).to.throw(Error, 'Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(undefined, 0)).to.throw(Error, 'Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(100, undefined)).to.throw(Error, 'Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(0, 0)).to.throw(Error, 'Invalid Information!');
            expect(() => planYourTrip.estimateExpenses([], undefined)).to.throw(Error, 'Invalid Information!');
            expect(() => planYourTrip.estimateExpenses('100', '5')).to.throw(Error, 'Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(undefined, 5)).to.throw(Error, 'Invalid Information!');
          
        })
        it('Test with valid inputs friendly bidget', ()=>{
            expect(planYourTrip.estimateExpenses(100, 4)).to.equal('The trip is budget-friendly, estimated cost is $400.00.')
            expect(planYourTrip.estimateExpenses(100, 5)).to.equal('The trip is budget-friendly, estimated cost is $500.00.')
            expect(planYourTrip.estimateExpenses(100.1, 4)).to.equal('The trip is budget-friendly, estimated cost is $400.40.')
            expect(planYourTrip.estimateExpenses(100, 4.01)).to.equal('The trip is budget-friendly, estimated cost is $401.00.')
            expect(planYourTrip.estimateExpenses(100.1, 4.1)).to.equal('The trip is budget-friendly, estimated cost is $410.41.')
        })         
        it('Test with valid inputs non-friendly bidget', ()=>{
            expect(planYourTrip.estimateExpenses(100, 6)).to.equal('The estimated cost for the trip is $600.00, plan accordingly.')
            expect(planYourTrip.estimateExpenses(100.1, 6)).to.equal('The estimated cost for the trip is $600.60, plan accordingly.')
            expect(planYourTrip.estimateExpenses(100, 6.1)).to.equal('The estimated cost for the trip is $610.00, plan accordingly.')
            expect(planYourTrip.estimateExpenses(100.1, 6.1)).to.equal('The estimated cost for the trip is $610.61, plan accordingly.')
        })         
    })
})