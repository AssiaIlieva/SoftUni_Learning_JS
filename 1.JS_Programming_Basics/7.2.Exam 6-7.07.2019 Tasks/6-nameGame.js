function nameGame(input){
    let index = 0;
    let winnerName = "";
    let maxPoints = 0;
    let command = input[index];
    index++;

    while(command !== "Stop"){
        let currentPlayer = command;
        let currentName = currentPlayer.length;
        let currentPoints = 0;
        
            for(let i = 0; i < currentName; i++){
                let currentNum = Number(input[index]);
                index++;
                let currentLetterValue = currentPlayer.charCodeAt(i);
                
                if(currentLetterValue === currentNum){
                    currentPoints += 10;
                }else{
                    currentPoints += 2;
                }

            }
        if(currentPoints >= maxPoints){
            winnerName = currentPlayer;
            maxPoints = currentPoints
        }
        command = input[index];
        index++
    }
    console.log(`The winner is ${winnerName} with ${maxPoints} points!`);
}
nameGame(["Pesho",
"124",
"34",
"111",
"97",
"99",
"Gosho",
"98",
"124",
"88",
"76",
"18",
"Stop"])
