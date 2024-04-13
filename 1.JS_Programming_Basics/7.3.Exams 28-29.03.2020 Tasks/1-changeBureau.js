function changeBureau(input){
let bitcoinAmount = Number(input[0]);
let yoanAmount = Number(input[1]);
let commision = Number(input[2]);
let moneyInLv = bitcoinAmount * 1168 + yoanAmount * 0.15 * 1.76;
let moneyInEuro = moneyInLv / 1.95
let finalSum = moneyInEuro - moneyInEuro * commision / 100;

console.log(finalSum.toFixed(2));
}
changeBureau(["1", "5", "5"])