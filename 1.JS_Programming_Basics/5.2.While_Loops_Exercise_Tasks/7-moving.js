function moving(input){
    let width = Number(input[0]);
    let length = Number(input[1]);
    let hight = Number(input[2]);
    let newInput = input[3];
    let index = 3;
    let freeSpace = width * length * hight;

    while(newInput !== "Done"){
        if(freeSpace > 0){
            newInput = Number(newInput);
            freeSpace -= newInput;
            index++;
            newInput = input[index]
        }else{
            break;
        }        
    }
    if(freeSpace >= 0){
        console.log(`${freeSpace} Cubic meters left.`);
    }else{
        let spaceNeeded = Math.abs(freeSpace);
        console.log(`No more free space! You need ${spaceNeeded} Cubic meters more.`);
    }
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])