function equalSums(input){
let startNumber = Number(input[0]);
let endNumber = Number(input[1]);
let sumEvenNum = 0;
let sumOddNum = 0;
let printString = '';
let currNumber =0;

for(currNumber = startNumber; currNumber <= endNumber; currNumber++){
    let numberAsString = currNumber.toString();
        for(let index = 0; index < numberAsString.length; index++){
            let currDigit = numberAsString[index]
            let currDigitAsNumber = Number(currDigit);
                if((index + 1) % 2 != 0){
                    sumOddNum += currDigitAsNumber;
                }else{
                    sumEvenNum += currDigitAsNumber;
                }
        }
        if(sumOddNum === sumEvenNum){
            printString += numberAsString + ' ';
        }
        sumEvenNum = 0;
        sumOddNum = 0;
    }
    console.log(printString);   
}
equalSums(["299969",
"300000"])