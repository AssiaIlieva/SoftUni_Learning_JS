function maxNumber(input){
    let index = 0;
    let currentValue = input[index]
    let maxNumber = Number.MIN_SAFE_INTEGER;

    while(currentValue !== "Stop"){
        let newNumber = Number(currentValue);
        if(newNumber > maxNumber){
            maxNumber = newNumber;
        }
        index++
        currentValue = input[index]
    }
    console.log(maxNumber);
}
maxNumber(["45",
"-20",
"7",
"99",
"Stop"])
