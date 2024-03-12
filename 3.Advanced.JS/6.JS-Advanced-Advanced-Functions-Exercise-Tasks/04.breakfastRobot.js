function solution(){
    const successMsg = 'Success';
    const elements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0, 
    };
    const recipes = {
    apple: {carbohydrate: 1, flavour: 2}, 
    lemonade: {carbohydrate: 10, flavour: 20},
    burger: {carbohydrate: 5, fat: 7, flavour: 3},
    eggs: {protein: 5, fat: 1, flavour: 1},
    turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10},
    };
    const getError = (element) => `Error: not enough ${element} in stock`;

    const commands = {
        restock: (element, quantity) => {
        elements[element] += Number(quantity);
        return successMsg;
        },
        prepare: (recipe, quantity) => {
        let missingElementEntry;
        let errorMsg;
        for(let i = 0; i < quantity; i++){
            missingElementEntry = Object.entries(recipes[recipe]).find((x) => elements[x[0]] < Number(x[1]));
            if(missingElementEntry){
                errorMsg = getError(missingElementEntry[0]);
                break;
            }
            Object.entries(recipes[recipe]).forEach((x) => {
                elements[x[0]] -= Number(x[1]); 
            });
        }
            return errorMsg ? errorMsg : successMsg;
        },
        report: () => {
           return Object.keys(elements).reduce((a, b)=>{
                a.push(`${b}=${elements[b]}`);
                return a
            }, [])
            .join(' ');
        }
    }
    return function(cmd){
        const cmdTokens = cmd.split(' ');
        return cmdTokens.length === 1
        ? commands[cmdTokens[0]]()
        : commands[cmdTokens[0]](cmdTokens[1], cmdTokens[2]);
    };
}
let manager = solution (); 
console.log (manager ("restock flavour 50")); 
console.log (manager ("prepare lemonade 4")); 
console.log (manager ("restock carbohydrate 10")); 
console.log (manager ("restock flavour 10")); 
console.log (manager ("prepare apple 1")); 
console.log (manager ("restock fat 10")); 
console.log (manager ("prepare burger 1 ")); 
console.log (manager ("report")); 
     