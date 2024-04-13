function catWalking(input) {
let minPerWalk = Number(input[0]);
let walksNum = Number(input[1]);
let calories = Number(input[2]);

let caloriesBurnt = walksNum * minPerWalk * 5;

if (caloriesBurnt >= calories / 2) {
    console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurnt}.`);
    }else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurnt}.`);
    }
}
catWalking(["30", "3", "600"])