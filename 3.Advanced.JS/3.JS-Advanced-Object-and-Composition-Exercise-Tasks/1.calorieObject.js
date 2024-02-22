function calorieObject(input) {
    let result = {};
    let arrLength = input.length;
    for (let i = 0; i < arrLength; i += 2) {
        let product = input[i];
        let calories = input[i + 1];
        result[product] = Number(calories);
    }
    console.log(result);
}
calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
