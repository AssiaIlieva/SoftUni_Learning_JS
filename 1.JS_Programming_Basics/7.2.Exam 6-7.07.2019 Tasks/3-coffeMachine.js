function coffeeMachine(input){
    let drinkType = input[0];
    let sugarQnt = input[1];
    let drinksNum = Number(input[2]);
    let totalPrice = 0;

    if(drinkType === "Espresso"){
        switch(sugarQnt){
            case "Without": totalPrice = drinksNum * 0.9; break;
            case "Normal": totalPrice = drinksNum * 1; break;
            case "Extra": totalPrice = drinksNum * 1.20; break;
        }
    }else if(drinkType === "Cappuccino"){
        switch(sugarQnt){
            case "Without": totalPrice = drinksNum * 1; break;
            case "Normal": totalPrice = drinksNum * 1.2; break;
            case "Extra": totalPrice = drinksNum * 1.60; break;
        }
    }else if(drinkType === "Tea"){
        switch(sugarQnt){
            case "Without": totalPrice = drinksNum * 0.5; break;
            case "Normal": totalPrice = drinksNum * 0.6; break;
            case "Extra": totalPrice = drinksNum * 0.7; break;
        }
    }
    if(sugarQnt === "Without"){
        totalPrice *= 0.65;
    }
    if(drinkType === "Espresso" && drinksNum >= 5){
        totalPrice *= 0.75;
    }
    if(totalPrice > 15){
        totalPrice *= 0.80;
    }
        console.log(`You bought ${drinksNum} cups of ${drinkType} for ${totalPrice.toFixed(2)} lv.`);
}
coffeeMachine(["Espresso", "Without", "10"])