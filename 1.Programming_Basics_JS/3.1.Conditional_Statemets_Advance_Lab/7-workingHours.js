function workingHours(input){
    let time = Number(input[0]);
    let day = input[1];
    if(day === "Sunday" || time < 10 || time > 18){
        console.log("closed");
    } else {
        console.log("open");
    }
}
workingHours(["11", "Sunday"])




