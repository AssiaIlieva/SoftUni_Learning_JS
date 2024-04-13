function oscarCeremony(input) {
    let hallRent = Number(input[0]);

    let statuettePrice = hallRent * 0.70;
    let cateringPrice = statuettePrice * 0.85;
    let soundPrice = cateringPrice * 0.50;

    let totalPrice = hallRent + statuettePrice + cateringPrice + soundPrice;

    console.log(totalPrice.toFixed(2));
}
oscarCeremony (["5555"])