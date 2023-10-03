function secretDoor(input){
    let firstDigitEnd = Number(input[0]);
    let secondDigitEnd = Number(input[1]);
    let thirdDigitEnd = Number(input[2]);

    for(i = 1; i <= firstDigitEnd; i++){
        let firstDigit = i;
        for(j = 1; j <= secondDigitEnd; j++){
            let secondDigit = j;
            for(k = 1; k <= thirdDigitEnd; k++){
                let thirdDigit = k;
                if(firstDigit % 2 === 0 && (secondDigit === 2 || secondDigit === 3 || secondDigit === 5 || secondDigit === 7) && thirdDigit % 2 === 0){
                    console.log(`${firstDigit} ${secondDigit} ${thirdDigit}`);
                }
            }
        }
    }

}
secretDoor(["8", "2", "8"])