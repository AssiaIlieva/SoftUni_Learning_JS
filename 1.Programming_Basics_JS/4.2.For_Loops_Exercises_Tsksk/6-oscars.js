function oscars(input){
    let actor = input[0];
    let accademyPoints = Number(input[1]);
    let juryMembersCount = Number(input[2]);
    let juryName = '';
    let lettersOfnameCount = 0;

    for(i = 3; i < juryMembersCount * 2 + 3; i++){
        if(i % 2 !== 0){
            juryName = input[i];
            lettersOfnameCount = juryName.length;
            accademyPoints = accademyPoints + lettersOfnameCount * input[i+1] / 2;
            }  
        if(accademyPoints >= 1250.5){
            break}
        }
        if(accademyPoints >= 1250.5){
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${accademyPoints.toFixed(1)}!`);
        }else{
            let pointsNeeded = 1250.5 - accademyPoints;
            console.log(`Sorry, ${actor} you need ${pointsNeeded.toFixed(1)} more!`);
        }
    }
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])

