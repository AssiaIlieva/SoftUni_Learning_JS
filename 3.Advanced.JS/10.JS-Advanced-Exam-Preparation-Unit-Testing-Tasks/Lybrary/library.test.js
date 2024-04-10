import { library } from "../library.js";
import { expect } from "chai";

describe('Library tests', ()=>{
    describe('calcPriceOfBook tests', ()=>{
        it('invalid input - name of the book ', ()=>{
        expect(()=>library.calcPriceOfBook(1,1)).to.throw('Invalid input');
        });
        it('invalid input - year', ()=>{
        expect(()=>library.calcPriceOfBook('1','1')).to.throw('Invalid input');
        });
        it('valid data and year before 1980', ()=>{
        expect(library.calcPriceOfBook('The Little Prince', 1943)).to.equal('Price of The Little Prince is 10.00');
        });
        it('valid data and year equal to 1980', ()=>{
        expect(library.calcPriceOfBook('The Little Prince', 1980)).to.equal('Price of The Little Prince is 10.00');
        });
        it('valid data and year after 1980', ()=>{
        expect(library.calcPriceOfBook('The Little Prince', 1981)).to.equal('Price of The Little Prince is 20.00');
        });
    });
    describe('findBook tests', ()=>{
        it('invalid input - empty array', ()=>{
            expect(()=>library.findBook([], "The Little Prince")).to.throw('No books currently available');
            });
        it('valid input - available book', ()=>{
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Troy")).to.equal('We found the book you want.');
            });
        it('valid input - unavailable book', ()=>{
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "The Little Prince")).to.equal('The book you are looking for is not here!');
            });
    });
    describe('arrangeTheBooks tests', ()=>{
        it('invalid input - non integer input', ()=>{
            expect(()=>library.arrangeTheBooks(5.5)).to.throw('Invalid input');
            });
        it('invalid input - negative number input', ()=>{
            expect(()=>library.arrangeTheBooks(-1)).to.throw('Invalid input');
            });
        it('arranged books - all books on shelves', ()=>{
            expect(library.arrangeTheBooks(39)).to.equal('Great job, the books are arranged.');
        });
        it('arranged books - all books on shelves, full shelves', ()=>{
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });
        it('unarranged books - more books than available space on shelves', ()=>{
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
})