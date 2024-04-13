function poolDay(input) {
    let peopleNum = Number(input[0]);
    let priceEntry = Number(input[1]);
    let priceSunBed = Number(input[2]);
    let priceUnbrella = Number(input[3]);
    

    let totalEntryFee = peopleNum * priceEntry;
    let totalSunbedFee = Math.ceil(peopleNum * 0.75) * priceSunBed;
    let totalUnbrellaFee = Math.ceil(peopleNum / 2) * priceUnbrella;

    let totalSum = totalEntryFee + totalSunbedFee + totalUnbrellaFee;

    console.log(`${totalSum.toFixed(2)} lv.`);
    
    
}
poolDay(["21", "5.50", "4.40", "6.20"])