import { chooseYourCar } from "../chooseYourCar.js";
import { expect } from "chai";

describe('Test chooseYourCar', ()=>{
    describe('Test choosingType', ()=>{
        it('Tests of inputs with invalid year', ()=>{
            expect(()=> chooseYourCar.choosingType('Sedan', 'Red', 1899)).to.throw(Error, 'Invalid Year!');
            expect(()=> chooseYourCar.choosingType('Sedan', 'Red', 2023)).to.throw(Error, 'Invalid Year!');
        })
        it('Tests of inputs with invalid type', ()=>{
            expect(()=> chooseYourCar.choosingType('Kombi', 'Red', 1900)).to.throw(Error, 'This type of car is not what you are looking for.');
            expect(()=> chooseYourCar.choosingType('Jeap', 'Red', 1900)).to.throw(Error, 'This type of car is not what you are looking for.');
        })
        it('Tests of valid inputs', ()=>{
            expect(chooseYourCar.choosingType('Sedan', 'Red', 2009)).to.equal(`This Sedan is too old for you, especially with that Red color.`);
            expect(chooseYourCar.choosingType('Sedan', 'Blue', 1900)).to.equal(`This Sedan is too old for you, especially with that Blue color.`);
            expect(chooseYourCar.choosingType('Sedan', 'Orange', 2010)).to.equal(`This Orange Sedan meets the requirements, that you have.`);
            expect(chooseYourCar.choosingType('Sedan', 'Green', 2022)).to.equal(`This Green Sedan meets the requirements, that you have.`);
            
        })
    })
    describe('Test brandName', ()=>{
        it('Tests with invalid inputs', ()=>{
            expect(()=> chooseYourCar.brandName('string', 0)).to.throw(Error, 'Invalid Information!');
            expect(()=> chooseYourCar.brandName([], 0)).to.throw(Error, 'Invalid Information!');
            expect(()=> chooseYourCar.brandName(['BMW'], -1)).to.throw(Error, 'Invalid Information!');
            expect(()=> chooseYourCar.brandName(['BMW'], 1)).to.throw(Error, 'Invalid Information!');
            expect(()=> chooseYourCar.brandName(['BMW'], '1')).to.throw(Error, 'Invalid Information!');
        })
        it('Tests with valid inputs', ()=>{
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0)).to.equal('Toyota, Peugeot');
            expect(chooseYourCar.brandName(["BMW"], 0)).to.equal('');
        })
    })
    describe('Test CarFuelConsumption', ()=>{
        it('Test with invalid inputs', ()=>{
            expect(()=> chooseYourCar.carFuelConsumption(100, '10')).to.throw(Error, 'Invalid Information!');
            expect(()=> chooseYourCar.carFuelConsumption('100', 10)).to.throw(Error, 'Invalid Information!');
            expect(()=> chooseYourCar.carFuelConsumption(-100, 10)).to.throw(Error, 'Invalid Information!');
            expect(()=> chooseYourCar.carFuelConsumption(100, -10)).to.throw(Error, 'Invalid Information!');
            expect(()=> chooseYourCar.carFuelConsumption(-100, -10)).to.throw(Error, 'Invalid Information!');
        })
        it('Test with valid inputs', ()=>{
           expect(chooseYourCar.carFuelConsumption(100, 10)).to.equal('The car burns too much fuel - 10.00 liters!')
           expect(chooseYourCar.carFuelConsumption(200, 10)).to.equal('The car is efficient enough, it burns 5.00 liters/100 km.')
           expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.')
        })
    })
})