function gameOfIntervals(input){
    let numberOfMoves = Number(input[0]);
    let sumOfPoints = 0;
    let num1To9 = 0;
    let num10To19 = 0;
    let num20To29 = 0;
    let num30To39 = 0;
    let num40To50 = 0;
    let numInvalid = 0;

    for(i = 1; i <= numberOfMoves; i++){
        let newNumber = Number(input[i]);
        if(newNumber >=0 && newNumber < 10){
            num1To9 += 1;
            sumOfPoints += newNumber * 0.20;
        }else if(newNumber >= 10 && newNumber < 20){
            num10To19 += 1;
            sumOfPoints += newNumber * 0.30;
        }else if(newNumber >= 20 && newNumber < 30){
            num20To29 += 1;
            sumOfPoints += newNumber * 0.40;
        }else if(newNumber >= 30 && newNumber < 40){
            num30To39 += 1;
            sumOfPoints += 50;
        }else if(newNumber >= 40 && newNumber <= 50){
            num40To50 += 1;
            sumOfPoints += 100;
        }else{
            numInvalid += 1;
            sumOfPoints /= 2;
        }
    }
    let percentage1To9 = num1To9 / numberOfMoves * 100;
    let percentage10To19 = num10To19 / numberOfMoves * 100;
    let percentage20To29 = num20To29 / numberOfMoves * 100;
    let percentage30To39 = num30To39 / numberOfMoves * 100;
    let percentage40To50 = num40To50 / numberOfMoves * 100;
    let percentageInvalidNum = numInvalid / numberOfMoves * 100;
    console.log(`${sumOfPoints.toFixed(2)}`);
    console.log(`From 0 to 9: ${percentage1To9.toFixed(2)}%`);
    console.log(`From 10 to 19: ${percentage10To19.toFixed(2)}%`);
    console.log(`From 20 to 29: ${percentage20To29.toFixed(2)}%`);
    console.log(`From 30 to 39: ${percentage30To39.toFixed(2)}%`);
    console.log(`From 40 to 50: ${percentage40To50.toFixed(2)}%`);
    console.log(`Invalid numbers: ${percentageInvalidNum.toFixed(2)}%`);
}
gameOfIntervals([10, 43, 57, -12, 23, 12, 0, 50, 40, 30, 20])