//Напишете функция, която получава: име, фамилия, възраст и град и печата съобщение от следния вид: 
//"You are <firstName> <lastName>, a <age>-years old person from <town>."


function concatenateData(imput) {
let name = imput[0];
let surname = imput[1];
let age = imput[2];
let city = imput[3];

console.log(`You are ${name} ${surname}, a ${age}-years old person from ${city}.`);

}
concatenateData (["Maria", "Ivanova", 20, "Sofia"])