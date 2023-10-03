function averageNumber(input){
    let numberCount = Number(input[0]);
    let sum = 0;
    for(i = 1; i <= numberCount; i++){
        let newNumber = Number(input[i]);
        sum += newNumber;
    }
    let avrNumber = sum / numberCount;
    console.log(avrNumber.toFixed(2));
}
averageNumber(["2", "4", "6",])