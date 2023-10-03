function backInTime(input){
    let totalMoney = Number(input[0]);
    let lastYear = Number(input[1]);
    let currYear = 0;
    let yearsOld = 18;

    for(i = 1800; i <= lastYear; i++){
        currYear = i;
        if(currYear % 2 === 0){
            totalMoney -= 12000;
        }else{
            totalMoney -= 12000 + 50 * yearsOld;
        }
        yearsOld += 1;
    }
    if(totalMoney >= 0){
        console.log(`Yes! He will live a carefree life and will have ${totalMoney.toFixed(2)} dollars left.`);
    }else{
        let moneyNeeded = Math.abs(totalMoney);
        console.log(`He will need ${moneyNeeded.toFixed(2)} dollars to survive.`);
    }
}
backInTime([100000.15, 1808])