function multiplicationTable(input){
    let inputNumber = Number(input[0]);

    for(i = 1; i <= 10; i++){
        let result = i * inputNumber;
        console.log(`${i} * ${inputNumber} = ${result}`)
    }
}
multiplicationTable(["5"])