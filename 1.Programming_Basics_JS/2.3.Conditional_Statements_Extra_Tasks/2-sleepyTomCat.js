function sleepyTomCat(input) {
    let holidays = Number(input[0]);
    let workdays = 365 - holidays;
    let playMinutes = holidays * 127 + workdays * 63;

    if (playMinutes <= 30000) {
        let extraSleepInMin = 30000 - playMinutes;
        let extraSleepHours = Math.floor(extraSleepInMin / 60);
        let extraSleepMinutes = extraSleepInMin % 60;

        console.log("Tom sleeps well");
        console.log(`${extraSleepHours} hours and ${extraSleepMinutes} minutes less for play`)
    } else {
        let lessSleepInMin = playMinutes - 30000;
        let lessSleepHours = Math.floor(lessSleepInMin / 60);
        let lessSleepMinutes = lessSleepInMin % 60;

        console.log("Tom will run away");
        console.log(`${lessSleepHours} hours and ${lessSleepMinutes} minutes more for play`);
    }
}
sleepyTomCat([113])