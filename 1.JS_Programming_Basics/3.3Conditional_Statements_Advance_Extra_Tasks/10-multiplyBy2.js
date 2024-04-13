function multiplyBy2(input){
    
    for (i = 0; i < input.length; i++){
        let number = input[i];
            if (number >= 0){
                let numberMult2 = number * 2;
                console.log(`Result: ${numberMult2.toFixed(2)}`);
            } else{
                console.log("Negative number!");
            } 
            }
}
multiplyBy2([12, 43.2144, 12.3, 543.23, -20])