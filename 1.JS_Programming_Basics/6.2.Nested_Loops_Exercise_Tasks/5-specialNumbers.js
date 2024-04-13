function specialNumbers(input){
    let inputNumber = Number(input[0]);
    let startNumber = 1111;
    let endNumber = 9999;
    let printString = "";
   
    for(let i = startNumber; i <= endNumber; i++){
        let numberAsString = i.toString();
        let isSpecialNumber = true;
            for(let index = 0; index < numberAsString.length; index++){
                let digit = Number(numberAsString[index]);
                    if(inputNumber % digit !== 0){
                        isSpecialNumber = false;
                        break;
                    }
            }
            if(isSpecialNumber){
                printString += numberAsString + " ";
            }            
    }
    console.log(printString);
}
specialNumbers(["16"])