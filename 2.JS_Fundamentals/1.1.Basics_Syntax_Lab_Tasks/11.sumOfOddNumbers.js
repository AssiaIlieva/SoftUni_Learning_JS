function sumOfOddNumbers(n){
let sum = 0;
let lastNumber = n * 2

for(let i = 1; i <= lastNumber; i +=2){
    sum += i;
    console.log(i);
}
console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(3)