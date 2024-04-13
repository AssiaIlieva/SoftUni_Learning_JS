function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let actors = Number(input[1]);
    let priceOfCostume = Number(input[2]);
    if (actors > 150) {
        priceOfCostume = priceOfCostume * 0.90;
    }
    let priceOfDecor = budget * 0.10;
    let costOfCostumes = actors * priceOfCostume;
    if (budget - costOfCostumes - priceOfDecor >= 0) {
        let moneyLeft = budget - costOfCostumes - priceOfDecor;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeed = (costOfCostumes + priceOfDecor) - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeed.toFixed(2)} leva more.`);
    }
}
godzillaVsKong(["9587.88", "222", "55.68"])






