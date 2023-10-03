function histogram(input){
    let numberCount = Number(input[0]);
    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;
    let p1Percent = 0;
    let p2Percent = 0;
    let p3Percent = 0;
    let p4Percent = 0;
    let p5Percent = 0;

    for(i = 1; i <= numberCount; i++){
        let number = Number(input[i]);
        if(number < 200){
            p1Count += 1;
            p1Percent = p1Count / numberCount * 100;
        }else if(number < 400){
            p2Count += 1;
            p2Percent = p2Count / numberCount * 100;
        }else if(number < 600){
            p3Count +=1;
            p3Percent = p3Count / numberCount * 100;
        }else if(number < 800){
            p4Count +=1;
            p4Percent = p4Count / numberCount * 100;
        }else{
            p5Count +=1;
            p5Percent = p5Count / numberCount * 100;
        }
    }
    console.log(`${p1Percent.toFixed(2)}%`);
    console.log(`${p2Percent.toFixed(2)}%`);
    console.log(`${p3Percent.toFixed(2)}%`);
    console.log(`${p4Percent.toFixed(2)}%`);
    console.log(`${p5Percent.toFixed(2)}%`);
}
histogram(["3",
"1",
"2",
"999"])