function familyTrip(input){
let budget = Number(input[0]);
let nights = Number(input[1]);
let hotelPrice = Number(input[2]);
let extraExpenses = Number(input[3]) * budget / 100;
let accommodationPrice = 0;

if(nights > 7){
accommodationPrice = nights * hotelPrice * 0.95;
}else{
    accommodationPrice = nights * hotelPrice;
}
let totalSum = accommodationPrice + extraExpenses;
if(totalSum <= budget){
    let moneyLeft = budget - totalSum;
    console.log(`Ivanovi will be left with ${moneyLeft.toFixed(2)} leva after vacation.`);
}else{
    moneyNeeded = totalSum - budget;
    console.log(`${moneyNeeded.toFixed(2)} leva needed.`);
}
}
familyTrip(["500", "7", "66", "15"])