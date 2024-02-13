function timeToWalk(stepsCount, footPrint, speed){
let speedInMPerSec = speed *1000 / 3600;
let distance = stepsCount * footPrint;
let rest = Math.floor(distance / 500);
let timeInSec = distance / speedInMPerSec + rest * 60;
let hours = Math.floor(timeInSec / 3600);
let minutes = Math.floor(timeInSec % 3600 /60);
let seconds = Math.round(timeInSec % 60);
let formatedHours = hours < 10 ? `0${hours}` : `${hours}`;
let formatedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
let formatedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
console.log(`${formatedHours}:${formatedMinutes}:${formatedSeconds}`);

}
timeToWalk(2564, 0.70, 5.5)