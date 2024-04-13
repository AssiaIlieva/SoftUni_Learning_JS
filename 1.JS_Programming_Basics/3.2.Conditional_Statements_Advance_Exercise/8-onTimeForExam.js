function onTimeForExam(input) {
    let hoursExam = Number(input[0]);
    let minutesExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minutesArrival = Number(input[3]);

    let timeForExam = hoursExam * 60 + minutesExam;
    let timeForArrival = hourArrival * 60 + minutesArrival;
    let timeDifference = timeForExam - timeForArrival;

    if (timeDifference == 0) {
        console.log(`On time`);
    } else if (timeDifference > 0) {
        if (timeDifference <= 30) {
            console.log(`On time`);
            console.log(`${timeDifference} minutes before the start`);
        } else if (timeDifference < 60) {
            console.log(`Early`);
            console.log(`${timeDifference} minutes before the start`)
        } else if (timeDifference >= 60) {
            let hours = Math.floor(timeDifference / 60);
            let minutes = timeDifference % 60;
            if (minutes < 10) {
                minutes = "0" + minutes
            }
            console.log(`Early`);
            console.log(`${hours}:${minutes} hours before the start`)
        }
    } else if (timeDifference < 0) {
        let minutesLate = Math.abs(timeDifference);
        if (minutesLate < 60) {
            console.log(`Late`);
            console.log(`${minutesLate} minutes after the start`);
        } else if (minutesLate >= 60) {
            let hours = Math.floor(minutesLate / 60);
            let minutes = minutesLate % 60;
            if (minutes < 10) {
                minutes = "0" + minutes
            }
            console.log(`Late`);
            console.log(`${hours}:${minutes} hours after the start`)
        }
    }
}
onTimeForExam(["11", "30", "12", "29"])