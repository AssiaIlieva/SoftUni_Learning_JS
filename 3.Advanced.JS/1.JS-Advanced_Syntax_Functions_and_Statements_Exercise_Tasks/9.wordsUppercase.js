function wordsUppercase(text){
    return text.match(/\w+/g).join(', ').toUpperCase();
}
console.log(wordsUppercase('Hello'))