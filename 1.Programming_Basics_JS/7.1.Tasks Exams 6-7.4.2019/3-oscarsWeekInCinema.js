function oscarsInCinema(input){
    let movieName = input[0];
    let hallType = input[1];
    let ticketsSold = Number(input[2]);
    let ticketPrice = 0;

    if(hallType === "ultra luxury"){
        switch(movieName){
            case "A Star Is Born": ticketPrice = 13.50; break;
            case "Bohemian Rhapsody": ticketPrice = 12.75; break;
            case "Green Book": ticketPrice = 13.25; break;
            case "The Favourite": ticketPrice = 13.95; break;
        }
    }else if(hallType === "luxury"){
        switch(movieName){
            case "A Star Is Born": ticketPrice = 10.50; break;
            case "Bohemian Rhapsody": ticketPrice = 9.45; break;
            case "Green Book": ticketPrice = 10.25; break;
            case "The Favourite": ticketPrice = 11.55; break;
        }
    }else if(hallType === "normal"){
        switch(movieName){
            case "A Star Is Born": ticketPrice = 7.50; break;
            case "Bohemian Rhapsody": ticketPrice = 7.35; break;
            case "Green Book": ticketPrice = 8.15; break;
            case "The Favourite": ticketPrice = 8.75; break;
        }
    }
    let movieIncome = ticketPrice * ticketsSold;
    console.log(`${movieName} -> ${movieIncome.toFixed(2)} lv.`);
}
oscarsInCinema(["Green Book",
"normal",
"63"])