function cookingByNumbers(inputNumber, ...commands){
    for(let i = 0; i <= 5; i++){
        inputNumber = manupulator(inputNumber, commands[i]);
    }

    function manupulator(num, command){
        switch(command){
            case 'chop': num /= 2;
            console.log(num);
            break;
            case 'dice': num = Math.sqrt(num);
            console.log(num);
            break;
            case 'spice': num += 1;
            console.log(num);
            break;
            case 'bake': num *= 3;
            console.log(num);
            break;
            case 'fillet': num *= 0.8;
            console.log(num);
        }
        return num;
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')