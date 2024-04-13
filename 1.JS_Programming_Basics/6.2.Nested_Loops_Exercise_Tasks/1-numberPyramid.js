function numberPyramid(input){

let n = Number(input[0]);
let string = '';
let current = 1;
let isBigger = false;

for(let rows = 1; rows <= n; rows++){
    for(let cols = 1; cols <= rows; cols++){
        if(current > n){
            isBigger = true;
            break;
        }
        string += current + " ";
        current++
        }
        console.log(string);
        string = "";
        if(isBigger){
            break;
        }
}
}
numberPyramid(["15"])