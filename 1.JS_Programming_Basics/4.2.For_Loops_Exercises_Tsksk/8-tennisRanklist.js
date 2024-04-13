function tennisRanklist(input){
    let tournamentCount = Number(input[0]);
    let initialPoints = Number(input[1]);
    let tournamentPoints = 0;
    let winsCount = 0;
        for(i = 2; i < tournamentCount + 2; i++){
        let tournamentResult = input[i];
        if(tournamentResult === "W"){
            tournamentPoints += 2000;
            winsCount += 1;
        }else if(tournamentResult === "F"){
            tournamentPoints += 1200;
        }else if(tournamentResult === "SF"){
            tournamentPoints += 720;
        }
    } 
    let totalPoints = initialPoints + tournamentPoints;
    let percentWins = (winsCount / tournamentCount * 100).toFixed(2);
    let averagePoints = Math.floor(tournamentPoints / tournamentCount);
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${percentWins}%`);
}
tennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])
