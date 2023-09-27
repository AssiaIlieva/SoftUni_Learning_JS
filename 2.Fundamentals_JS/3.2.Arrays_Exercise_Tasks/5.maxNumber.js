function maxNumber(array){
    let maxValue = array[array.length - 1];
    let result = '';
    for(let i = array.length - 1; i >= 0; i--){
        if(array[i] > maxValue){
            result = 
            maxValue = array[i];
        }
    }
    console.log(result.join(' '));
}
maxNumber([1, 4, 3, 2])