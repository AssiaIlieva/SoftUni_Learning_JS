function matchTickets(input){
    let budget = Number(input[0]);
    let ticketCategory = input[1];
    let peopleCount = Number(input[2]);
    let ticketAmount = 0;

    if(peopleCount <= 4){
        budget *= 0.25;
    } else if(peopleCount <= 9){
        budget *= 0.40;
    } else if(peopleCount <= 24){
        budget *= 0.50;
    } else if(peopleCount <= 49){
        budget *= 0.60;
    } else {
        budget *= 0.75;
    }
    if(ticketCategory === "VIP"){
        ticketAmount = peopleCount * 499.99;
    }else if(ticketCategory === "Normal"){
        ticketAmount = peopleCount * 249.99;
    }
    if(budget >= ticketAmount){
        let moneyLeft = budget - ticketAmount;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    }else if(budget < ticketAmount){
        let moneyNeeded = ticketAmount - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
}
matchTickets([30000, "VIP", 49])