function triangleOfNumbers(number){
for(let row = 1; row <= number; row++){
    let string = '';
    for(let col = 1; col <= row; col++){
        string += `${row} `;
    }
    console.log(string);
}
}
triangleOfNumbers(5)