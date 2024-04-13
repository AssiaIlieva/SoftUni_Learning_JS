function cake(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let numberOfPieces = length * width;
    let newInput = input[2];
    let index = 2;

    while(newInput !== "STOP"){
        if(numberOfPieces > 0){
        newInput = Number(newInput);
        numberOfPieces -= newInput;
        index++;
        newInput = input[index];
        }else{
            break
        }
    }
    if(numberOfPieces >= 0){
        console.log(`${numberOfPieces} pieces are left.`);
    }else{
        let piecesNeeded = Math.abs(numberOfPieces);
        console.log(`No more cake left! You need ${piecesNeeded} pieces more.`);
    }
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])