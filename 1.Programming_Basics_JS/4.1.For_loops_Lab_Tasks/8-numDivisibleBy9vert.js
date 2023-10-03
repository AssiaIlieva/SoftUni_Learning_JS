function num(input){
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let sum = 0;
    let output = '';

    for (i = n1; i <= n2; i++){
        if(i % 9 === 0){
            sum = sum + i;
        }
    }
    console.log(`The sum: ${sum}`);
    for (i = n1; i <= n2; i++){
        if(i % 9 === 0){
            output = i;
            console.log(i);
        }
    }
}
num(["100", "200"])