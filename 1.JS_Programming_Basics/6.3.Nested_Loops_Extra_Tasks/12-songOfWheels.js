function songOfWheels(input){
    let controlDigit = Number(input[0]);
    let count = 0;
    let print = "";
    let password = "";

    for(let a = 1; a <= 9; a++){
        for(let b = 1; b <= 9; b++){
            for(let c = 1; c <= 9; c++){
                for(let d = 1; d <= 9; d++){
                    if(a < b && c > d && a * b + c * d === controlDigit){
                        count ++
                        print += `${a}${b}${c}${d} `;
                        if(count === 4){
                            password = `${a}${b}${c}${d}`
                        }
                    }
                }
            }
        }
    }
    if(count > 0){
    console.log(print);
    }
    if(count < 4){
        console.log(`No!`);
    }else{
        console.log(`Password: ${password}`);
    }
}
songOfWheels(["55"])