function carNumber(input){
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let print = ""

    for(let i = startNumber; i <= endNumber; i++){
        for(let j = startNumber; j <= endNumber; j++){
            for(let k = startNumber; k <= endNumber; k++){
                for(let l = startNumber; l <= endNumber; l++){
                    if(((i % 2 === 0 && l % 2 !== 0) || (i % 2 !== 0 && l % 2 === 0)) && i > l && (j+k)%2===0){
                        print += `${i}${j}${k}${l} `
                    }
                }
            }
        }
    }
    console.log(print);
}
carNumber(["5", "8"])