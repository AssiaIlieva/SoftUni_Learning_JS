function evenPositonElement(array){
let result = [];
for(let i = 0; i < array.length; i++){
    if(i % 2 === 0){
        result.push(array[i]);
    }
}
console.log(result.join(' '));
}
evenPositonElement(['20', '30', '40', '50', '60'])