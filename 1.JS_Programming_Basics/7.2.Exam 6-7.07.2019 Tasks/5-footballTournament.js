function footballTurnament(input){
    let teamName = input[0];
    let gamesNum = Number(input[1]);
    let winsCount = 0;
    let losesCount = 0;
    let tieCount = 0;

    if (gamesNum === 0) {
        console.log(`${teamName} hasn't played any games during this season.`);
        return;
    }
        for(let i = 2; i < gamesNum +2; i++){
            let newGame = input[i];
            switch (newGame) {
                case "W":
                    winsCount++;
                    break;
                case "L":
                    losesCount++;
                    break;
                case "D":
                    tieCount++
            }
        }
    let pointsWon = winsCount * 3 + tieCount;
    let percWins = winsCount / gamesNum * 100;
    console.log(`${teamName} has won ${pointsWon} points during this season.`);
    console.log(`Total stats:`);
    console.log(`## W: ${winsCount}`);
    console.log(`## D: ${tieCount}`);
    console.log(`## L: ${losesCount}`);
    console.log(`Win rate: ${percWins.toFixed(2)}%`);
}
footballTurnament(["Barcelona",
"7",
"W",
"D",
"L",
"L",
"W",
"W",
"D"])


