function vacation(input){
    let index = 0;
    let excursionPrice = Number(input[index]);
    index++
    let accountBalance = Number(input[index]);
    index++
    let transactionType = input[index];
    index++
    let transactionAmmount = Number(input[index])
    index++
    let spendCount = 0;
    let daysCount = 0;
    

    while(accountBalance <= excursionPrice){
        if(transactionType === "spend"){
            spendCount += 1;
            daysCount += 1;
            accountBalance -= transactionAmmount;
            transactionType = input[index];
            index++
            transactionAmmount = Number(input[index]);
            index++
                if(accountBalance < 0){
                    accountBalance = 0;
                }
                if(spendCount > 4){
                    console.log(`You can't save the money.`);
                    console.log(daysCount);
                    return;
                }
        }else if(transactionType === "save"){
            spendCount = 0;
            daysCount += 1;
            accountBalance += transactionAmmount;
            transactionType = input[index];
            index++
            transactionAmmount = Number(input[index]);
            index++
                if(accountBalance >= excursionPrice){
                    console.log(`You saved the money for ${daysCount} days.`);
                    return
                };
            }   
        }
    }
vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])