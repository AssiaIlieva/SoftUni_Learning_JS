function reportSystem(input){
    let index = 0;
    let moneyNeeded = input[index];
    index++
    let command = input[index];
    index++;
    let cashMoney = 0;
    let cashTransactions = 0;
    let cardMoney = 0;
    let cardTransactions = 0;
    let paymentCount = 0;
    
    while(command !== "End"){
        let newPayment = Number(command);
        command = input[index];
        index++;
        paymentCount++;
            if(paymentCount % 2 !== 0){
                if(newPayment > 100){
                    console.log(`Error in transaction!`);
                }else{
                    console.log(`Product sold!`);
                    cashMoney += newPayment;
                    cashTransactions++;
                }
            }else{
                if(newPayment < 10){
                    console.log(`Error in transaction!`);
                }else{
                    console.log(`Product sold!`);
                    cardMoney += newPayment;
                    cardTransactions++;
                }
            }
            if((cashMoney + cardMoney) >= moneyNeeded){
                let avrPaymentCash = cashMoney / cashTransactions;
                let avrPaymentCard = cardMoney / cardTransactions;
                console.log(`Average CS: ${avrPaymentCash.toFixed(2)}`);
                console.log(`Average CC: ${avrPaymentCard.toFixed(2)}`);
                break;
            }else if(command === "End"){
                console.log(`Failed to collect required money for charity.`);
                break;
            }
    }
}
reportSystem(['600', '86', '150', '98', '227', 'End'])