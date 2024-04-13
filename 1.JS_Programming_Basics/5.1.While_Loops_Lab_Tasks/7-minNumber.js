function minNumber(input){
    let index = 0;
    let currentValue = input[index]
    let minNumber = Number.MAX_SAFE_INTEGER;

    while(currentValue !== "Stop"){
        let newNumber = Number(currentValue);
        if(newNumber < minNumber){
            minNumber = newNumber;
        }
        index++
        currentValue = input[index]
    }
    console.log(minNumber);
}
minNumber(["-10",
"20",
"-30",
"Stop"])
