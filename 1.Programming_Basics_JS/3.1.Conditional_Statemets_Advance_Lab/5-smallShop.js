function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let count = Number(input[2]);
    let price = 0;

    if (town === "Sofia") {
        if (product === "coffee") {
            price = count * 0.50;
        }else if (product === "water") {
            price = count * 0.80;
        }else if (product === "beer") {
            price = count * 1.20;
        }else if (product === "sweets") {
            price = count * 1.45;
        }else if (product === "peanuts") {
            price = count * 1.60;
        }
    } else if(town === "Plovdiv") {
        if (product === "coffee") {
            price = count * 0.40;
        }else if (product === "water") {
            price = count * 0.70;
        }else if (product === "beer") {
            price = count * 1.15;
        }else if (product === "sweets") {
            price = count * 1.30;
        }else if (product === "peanuts") {
            price = count * 1.50;
        }
    } else if(town === "Varna"){
        if (product === "coffee") {
            price = count * 0.45;
        }else if (product === "water") {
            price = count * 0.70;
        }else if (product === "beer") {
            price = count * 1.10;
        }else if (product === "sweets") {
            price = count * 1.35;
        }else if (product === "peanuts") {
            price = count * 1.55;
        }
    } console.log(price);
}
smallShop(["sweets", "Sofia", "2.23"])



