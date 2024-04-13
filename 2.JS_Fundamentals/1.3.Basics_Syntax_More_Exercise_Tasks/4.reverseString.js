function reverseString(string){
    let newString = ''
    for(let i = string.length; i >= 1; i--){
        newString += string.charAt(i-1);
    }
console.log(newString);
}
reverseString('SoftUni')