function shopping(input) {
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let priceVideoCards = 250;
    let sumVideoCards = videoCards * priceVideoCards;
    let priceProcessors = (sumVideoCards * 0.35);
    let priceRam = (sumVideoCards * 0.10);

    let totalSum = sumVideoCards + processors * priceProcessors + ram * priceRam;
    if (videoCards > processors) {
        totalSum = (totalSum * 0.85);
    }
    if (budget >= totalSum) {
        let moneyLeft = budget - totalSum;
        console.log(`You have ${(moneyLeft).toFixed(2)} leva left!`);
    } else {
        let moneyNeeded = totalSum - budget;
        console.log(`Not enough money! You need ${(moneyNeeded).toFixed(2)} leva more!`);
    }
}
shopping(["920.45","3","1","1"])

