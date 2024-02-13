function printNElement(array, step){
    let result = [];
    for(let i = 0; i < array.length; i += step){
        result.push(array[i]);
    }
    return result;
}
printNElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2)

