function swimmingRecord(input) {
    let currentRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let initialTime = distance * timePerMeter;
    let delayCount = Math.floor(distance / 15);
    let delayTime = delayCount * 12.5;

    let totalTime = initialTime + delayTime;

    if(totalTime >= currentRecord) {
        let timeNeeded = (totalTime - currentRecord).toFixed(2);
        console.log(`No, he failed! He was ${timeNeeded} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    }
}
swimmingRecord(["10464","1500","20"])


