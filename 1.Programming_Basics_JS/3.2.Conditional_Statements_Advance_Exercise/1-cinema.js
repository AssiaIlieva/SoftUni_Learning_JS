function cinema(input){
    let movieType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);
    let numberOfTickets = rows * cols;
    let profit = 0;

    if(movieType === "Premiere"){
        profit = numberOfTickets * 12;
    } else if (movieType === "Normal"){
        profit = numberOfTickets * 7.5;
    } else if (movieType === "Discount"){
        profit = numberOfTickets * 5;
    }
    console.log(`${profit.toFixed(2)} leva`);
}
cinema(["Premiere", "10", "12"])