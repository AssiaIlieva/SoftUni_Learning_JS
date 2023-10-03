function sumOfNumbers(input){
let number = input[0];
let sum = 0;
for(index = 0; index < number.length; index++){
    sum = sum + Number(number[index]);
} console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["1234"])