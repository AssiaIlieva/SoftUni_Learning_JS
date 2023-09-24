function spiceMustFlow(startingYield){
let totalYeald = 0;
let daysCount = 0;

while(startingYield >= 100){
    daysCount += 1
    totalYeald += startingYield - 26;
    startingYield -= 10
}
if(totalYeald >= 26){
    totalYeald -= 26
}
console.log(daysCount);
console.log(totalYeald);
}
spiceMustFlow(450)