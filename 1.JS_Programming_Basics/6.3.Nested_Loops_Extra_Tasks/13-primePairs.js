function primePairs(input){
    let start1Pair = Number(input[0]);
    let start2Pair = Number(input[1]);
    let end1Pair = start1Pair + Number(input[2]);
    let end2Pair = start2Pair + Number(input[3]);
   

    for(let pair1 = start1Pair; pair1 <= end1Pair; pair1++){
            let isPrime1 = true;
            let isPrime2 = true;
            for(let i = 2; i < pair1; i++){
                if(pair1 % i === 0){
                 isPrime1 = false;
                 break;
                }
            }
            for( let pair2 = start2Pair; pair2 <= end2Pair; pair2++){
                for(let j = 2; j < pair2; j++){
                        if(pair2 % j === 0){
                        isPrime2 = false;
                        break;
                        }else isPrime2 = true;
                    }
                    if(isPrime1 === true && isPrime2 === true){
                        console.log(`${pair1}${pair2}`);
                        }      
                }
    }
}
primePairs(["10", "30", "9", "6"])