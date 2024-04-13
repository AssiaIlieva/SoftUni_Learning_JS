function ages(years){
let age = '';
if(years < 0){
    age = 'out of bounds';
}else if(years < 3){
    age = 'baby';
}else if(years < 14){
    age = 'child';
}else if(years < 20){
    age = 'teenager';
}else if(years < 66){
    age = 'adult';
}else{
    age = 'elder';
}
console.log(age);
}
ages(-1)