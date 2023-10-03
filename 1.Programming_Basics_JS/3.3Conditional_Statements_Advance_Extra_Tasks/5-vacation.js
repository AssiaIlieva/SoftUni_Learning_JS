function vacation(input){
    let budget = Number(input[0]);
    let season = input[1];
    let location = 0;
    let accommodation = 0;
    let price = 0;

    if(budget <= 1000){
        accommodation = "Camp"
        switch(season){
            case "Summer": location = "Alaska"; price = budget * 0.65;
            console.log(`${location} - ${accommodation} - ${price.toFixed(2)}`); break
            case "Winter": location = "Morocco"; price = budget * 0.45;
            console.log(`${location} - ${accommodation} - ${price.toFixed(2)}`); break
        }
    }else if(budget > 1000 && budget <= 3000){
        accommodation = "Hut"
        switch(season){
            case "Summer": location = "Alaska"; price = budget * 0.8;
            console.log(`${location} - ${accommodation} - ${price.toFixed(2)}`); break
            case "Winter": location = "Morocco"; price = budget * 0.6;
            console.log(`${location} - ${accommodation} - ${price.toFixed(2)}`); break
        }
    }else if(budget > 3000){
        accommodation = "Hotel"
        switch(season){
            case "Summer": location = "Alaska"; price = budget * 0.9;
            console.log(`${location} - ${accommodation} - ${price.toFixed(2)}`); break
            case "Winter": location = "Morocco"; price = budget * 0.9;
            console.log(`${location} - ${accommodation} - ${price.toFixed(2)}`); break
        }
    }
}
vacation([2543.99, "Winter"])