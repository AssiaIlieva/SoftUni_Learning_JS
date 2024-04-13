function newHouse(input){
    let flower = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let totalSum = 0;
    
    if(flower === "Roses"){
        totalSum = 5 * numberOfFlowers;
    }else if(flower === "Dahlias"){
        totalSum = 3.8 * numberOfFlowers;
    }else if(flower ===  "Tulips"){
        totalSum = 2.8 * numberOfFlowers;
    }else if(flower === "Narcissus"){
        totalSum = 3 * numberOfFlowers;
    }else if(flower === "Gladiolus"){
        totalSum = 2.5 * numberOfFlowers;
    }
    if(flower === "Roses" && numberOfFlowers >80){
        totalSum *= 0.90;
    }else if(flower === "Dahlias" && numberOfFlowers >90){
        totalSum *= 0.85;
    }else if(flower === "Tulips" && numberOfFlowers >80){
        totalSum *= 0.85;
    }else if(flower === "Narcissus" && numberOfFlowers < 120){
        totalSum *= 1.15;
    }else if(flower === "Gladiolus" && numberOfFlowers < 80){
        totalSum *= 1.20;
    }
    if(budget >= totalSum){
        let moneyLeft = (budget - totalSum).toFixed(2);
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flower} and ${moneyLeft} leva left.`);
    }else if(totalSum > budget){
        let moneyNeeded =  (totalSum - budget).toFixed(2);
        console.log(`Not enough money, you need ${moneyNeeded} leva more.`);
    }
}
newHouse(["Narcissus", "119", "360"])