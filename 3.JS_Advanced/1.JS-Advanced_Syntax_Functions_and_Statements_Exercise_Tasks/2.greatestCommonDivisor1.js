function greatesCommonDivisor(num1, num2){
    let biggerNum = Math.max(num1, num2);
    for(let i = 2; i <= biggerNum; i++){
        if(num1 % i === 0 && num2 % i === 0){
            console.log(i);
            return;
        }
    }
    console.log(1);

}
greatesCommonDivisor(2154, 458)