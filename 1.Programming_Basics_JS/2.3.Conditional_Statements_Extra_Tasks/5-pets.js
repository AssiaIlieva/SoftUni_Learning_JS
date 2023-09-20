function pets(input) {
    let days = Number(input[0]);
    let stockOfFood = Number(input[1]);
    let dogFoodPerDay = Number(input[2]);
    let catFoodPerDay = Number(input[3]);
    let turtleFoodPerDay = Number(input[4]);

    let totalFoodNeeded = days * (dogFoodPerDay + catFoodPerDay + turtleFoodPerDay / 1000);

    if(stockOfFood >= totalFoodNeeded) {
        let spareFood = Math.floor(stockOfFood - totalFoodNeeded);
        console.log(`${spareFood} kilos of food left.`);
    } else {
        let neededFood = Math.ceil(totalFoodNeeded - stockOfFood);
        console.log(`${neededFood} more kilos of food are needed.`);
    }
}
pets ([5, 10, 2.1, 0.8, 321])