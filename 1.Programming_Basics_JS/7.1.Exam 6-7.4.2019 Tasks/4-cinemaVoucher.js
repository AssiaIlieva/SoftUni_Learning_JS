function cinemaVoucher(input) {
    let voucherPrice = Number(input[0]);
    let newInput = input[1];
    let purchaseTicket = 0;
    let purchaseOther = 0;
    let purchasePrice = 0;
    let index = 1;

    while(newInput !== "End"){
        if(newInput.length > 8){
            let sum1 = newInput.charCodeAt(0);
            let sum2 = newInput.charCodeAt(1);
            purchasePrice = sum1 + sum2
            voucherPrice -= purchasePrice;
            if(voucherPrice < 0){
                console.log(purchaseTicket);
                console.log(purchaseOther);
                return;
            }
            purchaseTicket += 1;
            index++;
            newInput = input[index];
        }else{
            purchasePrice = newInput.charCodeAt(0);
            voucherPrice -= purchasePrice;
            if(voucherPrice < 0){
                console.log(purchaseTicket);
                console.log(purchaseOther);
                return;
            }
            purchaseOther +=1;
            index++;
            newInput = input[index];
        }
    }
    console.log(purchaseTicket);
    console.log(purchaseOther);
}
cinemaVoucher(["1500",
"Avengers: Endgame",
"Bohemian Rhapsody",
"Deadpool 2",
"End"])