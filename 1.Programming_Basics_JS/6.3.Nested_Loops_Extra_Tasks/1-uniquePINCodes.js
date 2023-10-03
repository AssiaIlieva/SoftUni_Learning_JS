function uniquePINCode(input){
    let maxDigit1 = Number(input[0]);
    let maxDigit2 = Number(input[1]);
    let maxDigit3 = Number(input[2]);

    for(let i = 2; i <= maxDigit1; i++){
        for(let j = 2; j <= maxDigit2; j++){
            for(let k = 1; k <= maxDigit3; k++){
                if(i % 2 === 0 && k % 2 === 0 && (j === 2 || j === 3 || j === 5 || j === 7)){
                    console.log(`${i} ${j} ${k}`);
                }
                
            }
        }
    }

}
uniquePINCode(["8", "2", "8",])