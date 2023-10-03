function luckyNumbers(input){
    let number = Number(input[0]);
    let print = "";

    for(let i = 1; i < number; i++){
        if(i > 9){
            continue;
        }
        for(let j = 1; j < number; j++){
            if(j > 9){
                continue;
            }
            for(let k = 1; k < number; k++){
                if(k > 9){
                    continue;
                }
                for(let l = 1; l < number; l++){
                    if(l > 9){
                        continue;
                    }
                    if((i + j === k + l) &&  number % (i + j) === 0){
                            print += `${i}${j}${k}${l} `;
                        }
                    }
                }
            }
        }
    console.log(print); 
}
luckyNumbers(["24"])