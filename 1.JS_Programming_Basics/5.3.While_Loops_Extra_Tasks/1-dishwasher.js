function dishwasher(input){
    let index = 0;
    let detergentBottles = Number(input[index]);
    index++;
    let detergentQuantity = detergentBottles * 750;
    let inputCount = 0;
    let dishesCount = 0;
    let potsCount = 0;
    let command = input[index];
    index++
    while(command !== "End"){
        let dishesToWash = Number(command);
        command = input[index];
        index++;
        inputCount++;
            if(detergentQuantity < 0){
                let detergentNeeded =Math.abs(detergentQuantity);
                console.log(`Not enough detergent, ${detergentNeeded} ml. more necessary!`);
                return;
            }else if(inputCount === 3){
                potsCount += dishesToWash;
                detergentQuantity -= dishesToWash * 15;
                inputCount = 0;

            }else{
                dishesCount += dishesToWash;
                detergentQuantity -= dishesToWash * 5;
            }
    }
    console.log(`Detergent was enough!`);
    console.log(`${dishesCount} dishes and ${potsCount} pots were washed.`);
    console.log(`Leftover detergent ${detergentQuantity} ml.`);
}
dishwasher([1, 10, 15, 10, 12, 13, 30])