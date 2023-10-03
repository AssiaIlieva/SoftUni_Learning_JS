function flowers(input){
    let chrysanthemumCount = Number(input[0]);
    let rosesCount = Number(input[1]);
    let tulipsCount = Number(input[2]);
    let season = input[3];
    let weekend = input[4];
    let totalSum = 0;
    let flowersSum = chrysanthemumCount + rosesCount + tulipsCount;

    if(season === "Summer"){
        totalSum = chrysanthemumCount * 2 + rosesCount * 4.10 + tulipsCount * 2.50;
        if(weekend === "Y"){
            totalSum *= 1.15;
        }
        if(flowersSum > 20){
            totalSum *= 0.80;
        }
    } else if(season === "Autumn"){
        totalSum = chrysanthemumCount * 3.75 + rosesCount * 4.50 + tulipsCount * 4.15;
        if(weekend === "Y"){
            totalSum *= 1.15;
        }
        if(flowersSum > 20){
            totalSum *= 0.80;
        }
    }else if(season === "Spring"){
        totalSum = chrysanthemumCount * 2 + rosesCount * 4.10 + tulipsCount * 2.50;
        if(weekend === "Y"){
            totalSum *= 1.15;
        }
        if(tulipsCount > 7){
            totalSum *= 0.95;
        }
        if(flowersSum > 20){
            totalSum *= 0.80;
        }
    }else if(season === "Winter"){
        totalSum = chrysanthemumCount * 3.75 + rosesCount * 4.50 + tulipsCount * 4.15;
        if(weekend === "Y"){
            totalSum *= 1.15;
        }
        if(rosesCount >= 10){
            totalSum *= 0.90;
        }
        if(flowersSum > 20){
            totalSum *= 0.80;
        }
    }
    console.log((totalSum + 2).toFixed(2));
}
flowers([10, 10, 10, "Autumn", "N"])