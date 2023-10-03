function savePasswords(input){
    let xEnd = Number(input[0]);
    let yEnd = Number(input[1]);
    let maxPassNumber = Number(input[2]);
    let print = "";
    let passwordsCount = 0;
    let a = 35;
    let b = 64;

    for(let x = 1; x <= xEnd; x++){
        if(passwordsCount === maxPassNumber){
            break;}
          for(let y = 1; y <= yEnd; y++){
                if(passwordsCount === maxPassNumber){
                    break;
                }                   
                let aChar = String.fromCharCode(a);
                let bChar = String.fromCharCode(b);
                print += `${aChar}${bChar}${x}${y}${bChar}${aChar}|`;
                passwordsCount++
                a++;
                if(a === 56){
                    a = 35;
                }
                b++;
                if(b === 97){
                    b = 64;
                }
        }                 
    }
    console.log(print);        
}
savePasswords(["20", "50", "10"])