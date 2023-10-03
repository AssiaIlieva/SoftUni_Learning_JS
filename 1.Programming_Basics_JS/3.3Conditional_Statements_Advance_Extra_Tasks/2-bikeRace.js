function bikeRace(input){
    let juniorCount = Number(input[0]);
    let seniorCount = Number (input[1]);
    let raceType = input[2];
    let entryFee = 0;

    if(raceType === "trail"){
        entryFee = (juniorCount * 5.50 + seniorCount * 7) * 0.95;
        console.log(entryFee.toFixed(2));
    }else if(raceType === "cross-country"){   
            if(juniorCount + seniorCount >= 50){
                entryFee = ((juniorCount * 8 + seniorCount * 9.5) *0.75) * 0.95;
                console.log(entryFee.toFixed(2));
            }else{
                entryFee = (juniorCount * 8 + seniorCount * 9.5) * 0.95;
                console.log(entryFee.toFixed(2));
            }
    }else if(raceType === "downhill"){
        entryFee = (juniorCount * 12.25 + seniorCount * 13.75) * 0.95;
        console.log(entryFee.toFixed(2));
    }else if(raceType === "road"){
        entryFee = (juniorCount * 20 + seniorCount * 21.50) * 0.95;
        console.log(entryFee.toFixed(2));
    }
}
bikeRace([10, 10, "downhill"])