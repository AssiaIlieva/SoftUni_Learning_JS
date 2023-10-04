function club(input){
let index = 0;
let targetIncome = Number(input[index]);
index++
let command = input[index];
index++
let income = 0;
let coctail = "";

while(command !== "Party!"){
    coctail = command;
    let numCoctails = Number(input[index]);
    index++
    let name = coctail.length;
    let priceCoctail = Number(name);
    let priceOrder = numCoctails * priceCoctail
    if(priceOrder % 2 !== 0){
        priceCoctail *= 0.75;
    }
    income += numCoctails * priceCoctail
    if(income >= targetIncome){
        break;
    }else{
        command = input[index];
    index++
    }
        }
   if(targetIncome <= income){
        console.log(`Target acquired.`); 
    console.log(`Club income - ${income.toFixed(2)} leva.`);
}else{
    let moneyNeeded = targetIncome - income;
    console.log(`We need ${moneyNeeded.toFixed(2)} leva more.`);
    console.log(`Club income - ${income.toFixed(2)} leva.`);
}
}
club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"])