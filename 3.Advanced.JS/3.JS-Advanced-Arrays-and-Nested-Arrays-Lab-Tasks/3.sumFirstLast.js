function sumFirstAndLast(array){
let sum = Number(array.shift()) + Number(array.pop());
console.log(sum);
}
sumFirstAndLast(['20', '30', '40'])