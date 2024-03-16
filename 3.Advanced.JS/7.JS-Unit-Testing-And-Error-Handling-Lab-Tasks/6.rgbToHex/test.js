import { rgbToHexColor } from "./rgbToHex.js";
import { expect } from "chai";

describe('rdbToHexCollor', function (){
    it('with valid colors should return correct hex value', function(){
        let red = 255;
        let blue = 100;
        let green = 150;
 
        let result = rgbToHexColor(red, blue, green);
 
        expect(result).to.equal("#FF6496");
     });
    it('with non integer red should return undefined', function(){
       let red = {};
       let blue = 100;
       let green = 100;

       let result = rgbToHexColor(red, blue, green);

       expect(result).to.equal(undefined);
    });
    it('with invalid blue color should return undefined', function(){
        let red = 100;
        let blue = 300; 
        let green = 150;
 
        let result = rgbToHexColor(red, blue, green);
 
        expect(result).to.equal(undefined);
     });
     it('with invalid green color should return undefined', function(){
        let red = 100;
        let blue = 150;
        let green = -50; // невалиден зелен цвят
 
        let result = rgbToHexColor(red, blue, green);
 
        expect(result).to.equal(undefined);
     });
     it('with minimum valid colors should return correct hex value', function(){
        let red = 0;
        let blue = 0;
        let green = 0;
 
        let result = rgbToHexColor(red, blue, green);
 
        expect(result).to.equal("#000000");
     });
 
     it('with maximum valid colors should return correct hex value', function(){
        let red = 255;
        let blue = 255;
        let green = 255;
 
        let result = rgbToHexColor(red, blue, green);
 
        expect(result).to.equal("#FFFFFF");
     });
});

