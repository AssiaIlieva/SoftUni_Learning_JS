function flowerShop(input) {
    let magnoliasCount = Number(input[0]);
    let hyacinthsCount = Number(input[1]);
    let rosesCount = Number(input[2]);
    let cactusedCount = Number(input[3]);
    let giftPrice = Number(input[4]);

    let orderPrice = (magnoliasCount * 3.25 + hyacinthsCount * 4 + rosesCount * 3.50 + cactusedCount * 8) * 0.95;

    if (orderPrice >= giftPrice) {
        let moneyLeft = Math.floor(orderPrice - giftPrice);
        console.log(`She is left with ${moneyLeft} leva.`);
    } else {
        let moneyNeeded = Math.ceil(giftPrice - orderPrice);
        console.log(`She will have to borrow ${moneyNeeded} leva.`);
    }
}
flowerShop ([15,7,5,10,100])