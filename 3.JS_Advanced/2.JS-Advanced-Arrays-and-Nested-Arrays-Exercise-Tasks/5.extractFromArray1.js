function extractFromArray(array){
    let biggestNumber = array[0];
    let result = [array[0]];
    for(let i = 1; i < array.length; i++){
        if(array[i] >= biggestNumber){
            result.push(array[i]);
            biggestNumber = array[i];
        }
    }
return result;
}
extractFromArray([20, 
    3, 
    2, 
    15,
    6, 
    1]
    )