function lettersOfCombinations(input){
    let startLetter = input[0];
    let endLetter = input[1];
    let skipedLetter = input[2];
    let counter = 0;
    let print = "";

    for(let i = startLetter.charCodeAt(0) ; i <= endLetter.charCodeAt(0); i++){
        for(let j = startLetter.charCodeAt(0); j <= endLetter.charCodeAt(0); j++){
            for(let k = startLetter.charCodeAt(0); k <= endLetter.charCodeAt(0); k++){
                if(i !== skipedLetter.charCodeAt(0) && j !== skipedLetter.charCodeAt(0) && k !== skipedLetter.charCodeAt(0)){
                    let iAsChar = String.fromCharCode(i);
                    let jAsChar = String.fromCharCode(j);
                    let kAsChar = String.fromCharCode(k);
                    print += `${iAsChar}${jAsChar}${kAsChar} `
                    counter++;
                }
            }
        }
    }
    console.log(`${print}${counter}`);
}
lettersOfCombinations(["a", "c", "z"])