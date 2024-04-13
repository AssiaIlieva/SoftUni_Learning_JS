function skiTrip(input){
    let tripDuration = Number(input[0]);
    let accommodationType = input[1];
    let feedback = input[2];
    let nights = tripDuration - 1;
    let price = 0;

    switch(accommodationType){
        case "room for one person": price = nights * 18; break
        case "apartment": price = nights * 25;
            if(nights < 10){
                price *= 0.70;
            }else if(nights <= 15){
                price *= 0.65;
            }else if(nights > 15){
                price *= 0.50;
            } break
        case "president apartment": price = nights * 35;
            if(nights < 10){
                price *= 0.90;
            }else if(nights <= 15){
                price *= 0.85;
            }else if(nights > 15){
                price *= 0.80;
            } break
    }
    switch (feedback) {
        case "positive": price *= 1.25; break;
        case "negative": price *= 0.90; break;
        }
        console.log(price.toFixed(2));
}
skiTrip(["2", "apartment", "positive"])