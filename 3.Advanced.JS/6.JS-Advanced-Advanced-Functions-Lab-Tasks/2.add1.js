function solution(number){
    let a = number
    return function add(b){
        return a+b;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));