function sumOf2Numbers(input){
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;

    for(let i = startNumber; i <= endNumber; i++){
        for(let j = startNumber; j <= endNumber; j++){
            if(i + j === magicNumber){
                counter++;
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
                return;
            }else{
                counter++
                continue;
            }
        }
    }
    console.log(`${counter} combinations - neither equals ${magicNumber}`);
}
sumOf2Numbers(["23", "24", "20"])