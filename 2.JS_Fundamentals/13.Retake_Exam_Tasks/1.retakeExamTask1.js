function task1(input){
    let string = input.shift();

    let command = input.shift();

    while(command !== 'Easter'){
        let [action, ...tokens] = command.split(' ')
        if(action === 'Replace'){
            let currChar = tokens[0];
            let newChar = tokens[1];
            string = string.split(currChar).join(newChar);
            console.log(string);
        }else if(action === 'Remove'){
            let substring = tokens[0];
            string = string.replace(substring, '');
            console.log(string);
        }else if(action === 'Change'){
            let toCase = tokens[0];
            if(toCase === 'Lower'){
                string = string.toLowerCase();
                console.log(string);
            }else{
                string = string.toUpperCase();
                console.log(string);
            }
        }else if(action === 'Reverse'){
            let startInx = Number(tokens[0]);
            let endInx = Number(tokens[1]);
            if(startInx >= 0 && startInx < string.length && endInx >=0 && endInx < string.length){
                let substring = string.slice(startInx, endInx + 1);
                let reversed = substring.split('').reverse().join('');
                console.log(reversed);
            }
        }else if(action === 'Includes'){
            let substring = tokens[0];
            let isIncluded = string.includes(substring);
            if(isIncluded){
                console.log('True');
            }else{
                console.log('False');
            }
        }
        command = input.shift();
    }
}
task1(['Easterbscomming',
'Replace b I',
'Remove commIng',
'Change Upper',
'Reverse 0 5',
'Easter'])
