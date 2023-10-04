function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let actorsCount = Number(input[1]);
    let costumePirce = Number(input[2]);

    let decorPrice = budget * 0.10;
    let totalCostumePrice = actorsCount * costumePirce;

    if(actorsCount > 150){
        totalCostumePrice = totalCostumePrice * 0.90;
    }
    let totalMovieCost = decorPrice + totalCostumePrice;
    if(budget >= totalMovieCost) {
        let moneyLeft = (budget - totalMovieCost).toFixed(2);
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft} leva left.`);
    } else {
        let moneyNeeded = (totalMovieCost - budget).toFixed(2);
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded} leva more.`);
    }
}
godzillaVsKong (["9587.88","222","55.68"])
