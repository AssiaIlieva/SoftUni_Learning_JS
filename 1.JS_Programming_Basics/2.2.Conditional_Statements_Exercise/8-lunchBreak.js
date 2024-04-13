function lunchBreak(input) {
    let movieName = input[0];
    let movieTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime / 8;
    let relaxTime = breakTime / 4;
    let lunchActivitiesDuration = movieTime + lunchTime + relaxTime;

    if(breakTime >= lunchActivitiesDuration) {
        let timeLeft = Math.ceil(breakTime - lunchActivitiesDuration);
        console.log(`You have enough time to watch ${movieName} and left with ${timeLeft} minutes free time.`);
    } else {
        let timeNeeded = Math.ceil(lunchActivitiesDuration - breakTime);
        console.log(`You don't have enough time to watch ${movieName}, you need ${timeNeeded} more minutes.`);
    }
}
lunchBreak(["Game of Thrones","60","96"])


