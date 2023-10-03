function profit(input){
    let coins1LvCount = Number(input[0]);
    let coins2LvCount = Number(input[1]);
    let coins5LvCount = Number(input[2]);
    let sum = Number(input[3]);

    for(let i = 0; i <= coins1LvCount; i++){
        for(let j = 0; j <= coins2LvCount; j++){
            for(let k = 0; k <= coins5LvCount; k++){
                let currSum = i * 1 + j * 2 + k * 5;
                if(currSum === sum){
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                }else{
                    continue;
                }
            }
        }
    }
}
profit(["5", "3", "1", "7"])