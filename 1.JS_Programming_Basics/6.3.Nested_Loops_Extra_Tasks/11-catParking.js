function catParking(input){
    let days = Number(input[0]);
    let hours = Number(input[1]);
    let totalSum = 0;
    

    for(let d = 1; d <= days; d++){
            let daySum = 0;
        for(h = 1; h <= hours; h++){
            if(d % 2 === 0 && h % 2 !== 0){
                daySum += 2.50;
            }else if(d % 2 !== 0 && h % 2 === 0){
                daySum += 1.25;
            }else{
                daySum += 1;
            }
        }
        console.log(`Day: ${d} - ${daySum.toFixed(2)} leva`);
        totalSum += daySum;
    }
        console.log(`Total: ${totalSum.toFixed(2)} leva`);
}
catParking(["5", "2"])