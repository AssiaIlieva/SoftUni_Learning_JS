function accountBalance(input){
let accountBalance = 0;
let index = 0
let currentElement = input[index];

while(currentElement !== "NoMoreMoney"){
    let elementAsNumber = Number(currentElement);
    if(elementAsNumber < 0){
        console.log(`Invalid operation!`); break;
    }
    accountBalance += elementAsNumber;
    console.log(`Increase: ${elementAsNumber.toFixed(2)}`);
    currentElement = input[++index];
}
    console.log(`Total: ${accountBalance.toFixed(2)}`);
}
accountBalance(["120",
"45.55",
"-150"])
