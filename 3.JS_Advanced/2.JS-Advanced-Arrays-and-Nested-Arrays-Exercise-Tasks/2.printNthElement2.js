function printNElement(array, step){
    
    return array.filter((el, index) => index % step === 0);
}
printNElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2)

