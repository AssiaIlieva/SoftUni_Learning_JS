function building(input){
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    let string = ""

    for(f = floors; f >=1; f--){
        for(r = 0; r < rooms; r++){
            if(f === floors){
              string += `L${f}${r} `
            }else if(f % 2 === 0){
                string += `O${f}${r} `  
            }else{
                string += `A${f}${r} `
            }
        }console.log(string);
        string = ""
    }
}
building(["9", "5"])