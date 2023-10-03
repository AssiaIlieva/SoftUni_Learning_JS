function sumPrimeNonPrime(input){
    let index = 0;
    let newInput = input[index];
    index++
    let sumPrimeNum = 0;
    let sumNonPrimeNum = 0;
    let currNum = 0;
   
    while(newInput !== "stop"){
        currNum = Number(newInput);
        let isPrime = true;
        if(currNum < 0){
            console.log("Number is negative.");
        }else{
            for(i=2; i < currNum; i++){
                if(currNum % i === 0 ){
                    sumNonPrimeNum += currNum;
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                sumPrimeNum += currNum
            }
        }
        newInput = input[index];
        index++
    }
    console.log(`Sum of all prime numbers is: ${sumPrimeNum}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNum}`);
}
sumPrimeNonPrime(["0",
"-9",
"0",
"stop"])


