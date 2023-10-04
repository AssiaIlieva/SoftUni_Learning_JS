function moutainRun(input){
let record = Number(input[0]);
let distance = Number(input[1]);
let secPerMeter = Number(input[2]);

let timeWithoutDelay = distance * secPerMeter;
let timeForCliming = Math.floor(distance / 50) * 30 + timeWithoutDelay;

if (timeForCliming < record) {
    console.log(`Yes! The new record is ${timeForCliming.toFixed(2)} seconds.`);
    
}else if(timeForCliming >= record){
    let extraTime = timeForCliming - record;
    console.log(`No! He was ${extraTime.toFixed(2)} seconds slower.`);
}
}
moutainRun(["5554.36", "1340", "3.23"])