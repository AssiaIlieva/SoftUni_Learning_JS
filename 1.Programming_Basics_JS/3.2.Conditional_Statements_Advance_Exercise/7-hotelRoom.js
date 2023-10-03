function hotelRoom(input){
    let month = input[0];
    let nights = Number(input[1]);
    let priceAppartment = 0;
    let priceStudio = 0;

    if(month === "May" || month ==="October"){
        priceStudio = nights * 50;
        priceAppartment = nights * 65;
        if(nights > 7 && nights < 14){
            priceStudio *= 0.95;
        }else if(nights > 14){
            priceStudio *= 0.70;
        }
    } else if(month === "June" || month === "September"){
        priceStudio = nights * 75.20;
        priceAppartment = nights * 68.70;
        if(nights > 14){
            priceStudio *= 0.80;
        }
    } else if(month === "July" || month === "August"){
        priceStudio = nights * 76;
        priceAppartment = nights * 77;
    }
    if(nights > 14){
        priceAppartment *= 0.9;
    }
        console.log(`Apartment: ${priceAppartment.toFixed(2)} lv.`);
        console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}
hotelRoom(["August", "20"])

