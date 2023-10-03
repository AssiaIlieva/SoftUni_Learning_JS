function sequence(input){
    let inputNumber = Number(input[0]);

    let currentNumber = 1;

    while(currentNumber <= inputNumber){
        console.log(currentNumber);
        currentNumber = currentNumber * 2 + 1;
    }
}
sequence(["17"])