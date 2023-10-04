function tournamentOfChristmas(input){
    let index = 0;
    let days = Number(input[index])
    index++;
    let totalMoney = 0;
    let daysWon = 0;
    
    for(i = 1; i <= days; i++){
        let command = input[index];
        let moneyPerDay = 0;
        let gamesWon = 0;
        let gamesLost = 0;
        while(command !== "Finish" ){
            let sport = input[index];
            index++
            let result = input[index];
            index++
            if(result === "win"){
                moneyPerDay += 20;
                gamesWon ++;
            }else if(result === "lose"){
                gamesLost++
            }
            command = input[index];
        }
        if (gamesWon > gamesLost) {
            moneyPerDay *= 1.1;
            daysWon++
            totalMoney += moneyPerDay;
        }else{
            totalMoney += moneyPerDay;
        }
        index++
        command = input[index];
    }
    if (daysWon > days/2) {
        totalMoney *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
        }else if(daysWon < days/2){
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
        }
}
tournamentOfChristmas(["2", "volleyball", "win", "football", "lose", "basketball", "win", "Finish", "golf", "win", "tennis","win", "badminton", "win", "Finish", ])