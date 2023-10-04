function birthdayParty(input){
let hallRent = Number(input[0]);
let cakePrice = hallRent * 0.20;
let drinksPrice = cakePrice * 0.55;
let animatorPrice = hallRent / 3;
let totalSum = hallRent + cakePrice + drinksPrice+ animatorPrice;

console.log(`${totalSum}`)
}
birthdayParty(["2250"])