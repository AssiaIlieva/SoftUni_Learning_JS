function passwordGenerator(input){
    let nNumber = Number(input[0]);
    let lNumber = Number(input[1]);
    let print = "";

    for(let i = 1; i < nNumber; i++){
        let digit1 = i;
        for(let j = 1; j < nNumber; j++){
            let digit2 = j;
            for(let k = 97; k < 97 + lNumber; k++){
                let digit3 = String.fromCharCode(k)
                for(let l = 97; l < 97 + lNumber; l++){
                    let digit4 = String.fromCharCode(l);
                   for(let m = 2; m <= nNumber; m++){
                    let digit5 = m;
                        if(m > i && m > j){
                        print += `${digit1}${digit2}${digit3}${digit4}${digit5} `
                        }
                    }
                }
            }
        }
    }
    console.log(print);
}
passwordGenerator(["3", "2"])