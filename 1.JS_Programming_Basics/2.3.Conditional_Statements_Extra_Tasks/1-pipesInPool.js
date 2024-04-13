function pipesInPool(input) {
let poolV = Number(input[0]);
let flowP1 = Number(input[1]);
let flowP2 = Number(input[2]);
let hoursOfWork = Number(input[3]);

let litresP1 = flowP1 * hoursOfWork;
let litresP2 = flowP2 * hoursOfWork;
let litresTotal = litresP1 + litresP2;

if(litresTotal <= poolV) {
    let percentFulness = (litresTotal / (poolV / 100)).toFixed(2);
    let percentP1 = (litresP1 / (litresTotal / 100)).toFixed(2);
    let precentP2 = 100 - percentP1;
    
    console.log(`The pool is ${percentFulness}% full. Pipe 1: ${percentP1}%. Pipe 2: ${precentP2}%.`);
} else{
    let overFlowLitres = (litresTotal - poolV).toFixed(2);
    console.log(`For ${hoursOfWork} hours the pool overflows with ${overFlowLitres} liters.`);
}
}
pipesInPool([1000, 100, 120, 3])
