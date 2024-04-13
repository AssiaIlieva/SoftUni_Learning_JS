function invalidNumber(input){
    let number = Number(input[0]);
    let validNumber = number >= 100 && number <= 200 || number === 0;

    if(!validNumber){
        console.log("invalid");
    }
}
invalidNumber(["75"])