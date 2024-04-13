function rounding(number, precision){
    if(precision > 15){
        precision = 15
    }

    let precisedNumber = number.toFixed(precision);

    console.log(parseFloat(precisedNumber));
}
rounding(10.5, 3)