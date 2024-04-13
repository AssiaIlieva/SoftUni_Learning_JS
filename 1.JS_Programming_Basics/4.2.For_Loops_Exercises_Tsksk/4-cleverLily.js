function cleverLily(input){
    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let moneyGiven = 10;
    let moneySaved = 0;

    for(i = 1; i <= age; i++){
        if(i % 2 !== 0){
            moneySaved += toyPrice;
        }else{
            moneySaved += (moneyGiven - 1);
            moneyGiven += 10;
        }
    }
    if(washerPrice <= moneySaved){
        let moneyLeft = moneySaved - washerPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    }else{
        let moneyNeeded = washerPrice - moneySaved;
        console.log(`No! ${Math.abs(moneyNeeded).toFixed(2)}`);
    }
}
cleverLily(["10",
"170.00",
"6"])

