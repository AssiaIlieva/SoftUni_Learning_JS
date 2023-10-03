function sumNumbers(input){
    let goalNumber = Number(input[0]);
    let index = 1;
    let sum = 0;

    while(sum < goalNumber){
        let currentNumber = Number(input[index]);
        sum += currentNumber;
        index++;
        currentNumber = Number(input[index]);
    }
    console.log(sum);
}
sumNumbers(["100",
"10",
"20",
"30",
"40"])
