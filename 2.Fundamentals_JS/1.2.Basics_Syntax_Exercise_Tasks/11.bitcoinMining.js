function bitcoinMining(array){
    let arrayLength = array.length;
    let money = 0;
    let bitcoinsBought = 0;
    let daysCount = 0;
    let firstCoinDay = 0;
    let goldPrice = 67.51;
    let bitcoinPrice = 11949.16;

    for(let i = 0; i < arrayLength; i++){
        daysCount++;
        let dayGoldAmound = Number(array[i]);
        if(daysCount % 3 === 0){
            dayGoldAmound *= 0.7;
        }
        money += dayGoldAmound * goldPrice;
        if(money >= bitcoinPrice && firstCoinDay == 0){
            firstCoinDay = daysCount;
        }
        if(money >= bitcoinPrice){
            let newPerchase = Math.trunc(money / bitcoinPrice);
            bitcoinsBought += newPerchase;
            money -= newPerchase * bitcoinPrice;
        }
    }
    console.log(`Bought bitcoins: ${bitcoinsBought}`);
    if(firstCoinDay > 0){
        console.log(`Day of the first purchased bitcoin: ${firstCoinDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
bitcoinMining([3124.15, 504.212, 2511.124])