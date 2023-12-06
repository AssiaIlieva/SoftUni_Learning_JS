function sortNumbers(num1, num2, num3){
    let highestNumber = Math.max(num1, num2, num3);
    let lowestNumber = Math.min(num1, num2, num3);
    let midlleNumber = (num1 + num2 + num3) - highestNumber - lowestNumber;
console.log(highestNumber);
console.log(midlleNumber);
console.log(lowestNumber);
}
sortNumbers(-2, 1, 3)