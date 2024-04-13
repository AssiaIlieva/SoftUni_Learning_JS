function schoolCamp(input){
    let season = input[0];
    let groupType = input[1];
    let studentsCount = Number(input[2]);
    let nightsCount = Number(input[3]);
    let pricePerNight = 0;
    let totalSum = 0;
    let sportType = 0;

    if(season === "Winter"){
        switch(groupType){
            case "boys": pricePerNight = 9.60; sportType = "Judo"; break
            case "girls": pricePerNight = 9.60; sportType = "Gymnastics"; break
            case "mixed": pricePerNight = 10; sportType = "Ski"; break
        }
    }else if(season === "Spring"){
        switch(groupType){
            case "boys": pricePerNight = 7.20; sportType = "Tennis"; break
            case "girls": pricePerNight = 7.20; sportType = "Athletics"; break
            case "mixed": pricePerNight = 9.5; sportType = "Cycling"; break
            }
    }else if(season === "Summer"){
        switch(groupType){
            case "boys": pricePerNight = 15; sportType = "Football"; break
            case "girls": pricePerNight = 15; sportType = "Volleyball"; break
            case "mixed": pricePerNight = 20; sportType = "Swimming"; break
            }
    }
    totalSum = studentsCount * pricePerNight * nightsCount;
    if(studentsCount >= 50){
        totalSum *= 0.50;
    }else if(studentsCount >= 20){
        totalSum *= 0.85;
    }else if(studentsCount >= 10){
        totalSum *= 0.95;
    }
    console.log(`${sportType} ${totalSum.toFixed(2)} lv.`);
}
schoolCamp(["Summer", "boys", 60, 7,])