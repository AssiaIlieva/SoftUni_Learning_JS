function trekkingMania(input){
    let groupsCont = Number(input[0]);
    let numberOfTurists = 0;
    let musalaTurinsts = 0;
    let monlbancTurists = 0;
    let kilimandjaroTurists = 0;
    let k2Tourists = 0;
    let everestTourists = 0;
    let turistsSum = 0;
    
    for(i=1; i <= groupsCont; i++){
        numberOfTurists = Number(input[i]);
        if(numberOfTurists <= 5){
            musalaTurinsts += numberOfTurists;
            turistsSum += numberOfTurists;
        }else if(numberOfTurists <= 12){
            monlbancTurists += numberOfTurists
            turistsSum += numberOfTurists;
        }else if(numberOfTurists <= 25){
            kilimandjaroTurists += numberOfTurists
            turistsSum += numberOfTurists;
        }else if(numberOfTurists <= 40){
            k2Tourists += numberOfTurists
            turistsSum += numberOfTurists;
        }else if(numberOfTurists >= 41){
            everestTourists += numberOfTurists
            turistsSum += numberOfTurists;
        }
    }     
    let p1 = musalaTurinsts / turistsSum * 100 ;
    let p2 = monlbancTurists / turistsSum * 100;
    let p3 = kilimandjaroTurists / turistsSum * 100;
    let p4 = k2Tourists / turistsSum * 100;
    let p5 = everestTourists / turistsSum * 100;
    console.log(`${p1.toFixed(2)}%\n${p2.toFixed(2)}%\n${p3.toFixed(2)}%\n${p4.toFixed(2)}%\n${p5.toFixed(2)}%`);
}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
