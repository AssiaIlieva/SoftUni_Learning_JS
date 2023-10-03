function logistics(input){
let cargoCount = Number(input[0]);
let busTonsCount = 0;
let truckTonsCount = 0;
let trainTonsCount = 0;
let tonsCount = 0;
let cargoCosts = 0;
for(i = 1; i <= cargoCount; i++){
    let newInput = Number(input[i]);
    if(newInput <= 3){
        busTonsCount += newInput;
        tonsCount += newInput;
        cargoCosts += newInput * 200;
    }else if(newInput <= 11){
        truckTonsCount += newInput;
        tonsCount += newInput;
        cargoCosts += newInput * 175;
    }else{
        trainTonsCount += newInput;
        tonsCount += newInput;
        cargoCosts += newInput * 120;
         }
    }
    let averageCost = cargoCosts / tonsCount;
    let busCargoPercentage = busTonsCount / tonsCount * 100;
    let truckCargoPercentage = truckTonsCount / tonsCount * 100;
    let trainCargoPercentage = trainTonsCount / tonsCount * 100;
    console.log(averageCost.toFixed(2));
    console.log(`${busCargoPercentage.toFixed(2)}%`);
    console.log(`${truckCargoPercentage.toFixed(2)}%`);
    console.log(`${trainCargoPercentage.toFixed(2)}%`);
}
logistics([5, 2, 10, 20, 1, 7])