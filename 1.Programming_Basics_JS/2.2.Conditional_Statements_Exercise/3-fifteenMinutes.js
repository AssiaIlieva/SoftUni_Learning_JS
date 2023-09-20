function fifteenMin(input){
    let inputHours = Number(input[0]);
    let inputMinutes = Number(input[1]);
    let plus15Minutes = inputHours * 60 + inputMinutes + 15;
    let newHours = Math.floor(plus15Minutes / 60);
    if(newHours === 24){
        newHours = 0;
    }
    let newMinutes = plus15Minutes % 60;
    if (newMinutes < 10) {
        console.log(`${newHours}:0${newMinutes}`);
    } else {
        console.log(`${newHours}:${newMinutes}`);
    }
}
fifteenMin(["12", "49"])
  