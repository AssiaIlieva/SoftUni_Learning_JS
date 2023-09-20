function harvest(input) {
    let vineyardArea = Number(input[0]);
    let grapePerSquareM = Number(input[1]);
    let litresOfVineNorm = Number(input[2]);
    let numberOfWorkers = Number(input[3]);

    let harvestForVine = vineyardArea * grapePerSquareM * 0.40;
    let litresOfVineProduced = harvestForVine / 2.50;

    if(litresOfVineNorm > litresOfVineProduced) {
        let litresOfVineNeeded = Math.floor(litresOfVineNorm - litresOfVineProduced);
        console.log(`It will be a tough winter! More ${litresOfVineNeeded} liters wine needed.`);
    } else {
        let extraLitresOfWine = Math.ceil(litresOfVineProduced - litresOfVineNorm);
        let winePerWorker = Math.ceil(extraLitresOfWine / numberOfWorkers);
        console.log(`Good harvest this year! Total wine: ${litresOfVineProduced} liters.`);
        console.log(`${extraLitresOfWine} liters left -> ${winePerWorker} liters per person.`);
    }
}
harvest([1020, 1.5, 425, 4])