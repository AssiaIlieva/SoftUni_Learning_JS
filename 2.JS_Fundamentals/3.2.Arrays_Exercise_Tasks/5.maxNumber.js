function maxNumber(array){
    let maxValue = array[array.length - 1];
    let result = String(maxValue);
    for(let i = array.length - 2; i >= 0; i--){
        if(array[i] > maxValue){
            result = array[i] + ' ' + result;
            maxValue = array[i];
        }
    }
    console.log(result);
}
maxNumber([14, 24, 3, 19, 15, 17])