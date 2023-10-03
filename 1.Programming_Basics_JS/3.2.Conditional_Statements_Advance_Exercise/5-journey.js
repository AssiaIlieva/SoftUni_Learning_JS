function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let price = 0;
    let accommodation = "";

    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case "summer": price = budget * 0.30; break
            case "winter": price = budget * 0.70; break
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        switch (season) {
            case "summer": price = budget * 0.40; break
            case "winter": price = budget * 0.80; break
        }
    } else if (budget > 1000) {
        destination = "Europe";
        price = budget * 0.90;
    }
    if (season === "summer" && destination != "Europe") {
        accommodation = "Camp";
        console.log(`Somewhere in ${destination}`);
        console.log(`${accommodation} - ${price.toFixed(2)}`);
    } else {
        accommodation = "Hotel"
        console.log(`Somewhere in ${destination}`);
        console.log(`${accommodation} - ${price.toFixed(2)}`);
    }
}
journey(["678.53", "winter"])