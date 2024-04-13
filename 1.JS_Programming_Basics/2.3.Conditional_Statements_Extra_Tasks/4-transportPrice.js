function transportPrice(input) {
    let kilometers = Number(input[0]);
    let daytime = input[1];
    let travelcost = 0;

    if (kilometers >= 100) {
        travelcost = kilometers * 0.06;
        console.log((travelcost).toFixed(2));
    } else if(kilometers >= 20) {
        travelcost = kilometers * 0.09;
        console.log((travelcost).toFixed(2));
    } else if (kilometers < 20, daytime === "day") {
        travelcost = kilometers * 0.79 + 0.70;
        console.log((travelcost).toFixed(2));
    } else if (kilometers < 20, daytime === "night") {
        travelcost = kilometers * 0.90 + 0.70;
        console.log((travelcost).toFixed(2));
    }
}
transportPrice (["180", "night"])
