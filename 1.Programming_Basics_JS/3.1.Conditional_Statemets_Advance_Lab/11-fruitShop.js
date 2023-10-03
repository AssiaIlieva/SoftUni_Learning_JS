function fruitShop(input) {
    let fruit = input[0];
    let dayOfWeek = input[1];
    let numberOfFruits = Number(input[2]);
    let totalSum = 0;
    switch (dayOfWeek) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (fruit) {
                case "banana": totalSum = numberOfFruits * 2.5; break
                case "apple": totalSum = numberOfFruits * 1.2; break
                case "orange": totalSum = numberOfFruits * 0.85; break
                case "grapefruit": totalSum = numberOfFruits * 1.45; break
                case "kiwi": totalSum = numberOfFruits * 2.7; break
                case "pineapple": totalSum = numberOfFruits * 5.50; break
                case "grapes": totalSum = numberOfFruits * 3.85; break
            } break
        case "Saturday":
        case "Sunday":
            switch (fruit) {
                case "banana": totalSum = numberOfFruits * 2.7; break
                case "apple": totalSum = numberOfFruits * 1.25; break
                case "orange": totalSum = numberOfFruits * 0.9; break
                case "grapefruit": totalSum = numberOfFruits * 1.6; break
                case "kiwi": totalSum = numberOfFruits * 3; break
                case "pineapple": totalSum = numberOfFruits * 5.60; break
                case "grapes": totalSum = numberOfFruits * 4.2; break
            }
    }if (totalSum != 0) {
        console.log(totalSum.toFixed(2));
    } else {
        console.log("error");
    }
}
fruitShop(["apple", "Tuesday", "2"])