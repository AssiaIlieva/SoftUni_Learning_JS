function sumOfTwoNumbers(input){
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let count = 0;
    let isMagicNumber = false;

    for(i = startNumber; i <= endNumber; i++){
        for(j = startNumber; j <= endNumber; j++){
            count +=1;
            if(i + j === magicNumber){
                isMagicNumber = true;
                console.log(`Combination N:${count} (${i} + ${j} = ${magicNumber})`);
            }
        }
        if(isMagicNumber){
            break;            
        }
    }
    if(isMagicNumber === false){
        console.log(`${count} combinations - neither equals ${magicNumber}`);
    }
}
sumOfTwoNumbers(["88", "888", "2000"])