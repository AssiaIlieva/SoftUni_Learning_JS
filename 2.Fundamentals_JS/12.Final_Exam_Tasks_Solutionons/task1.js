function task1(input){
    let password = input.shift();
    let command = input.shift();
    let charPattern = /[\w]/g;
    let uppperCharPattern = /[A-Z]/;
    let lowerCharPattern = /[a-z]/;
    let digitsPattern = /\d+/

    while(command !== 'Complete'){
        if(command.includes('Make Upper ')){
            let index = Number(command.split('Make Upper ')[1])
            let changedChar = password[index].toUpperCase();
            let leftHalf = password.slice(0, index);
            let rightHalf = password.slice(index + 1);
            password = leftHalf + changedChar + rightHalf
            console.log(password);
        }else if(command.includes('Make Lower ')){
            let index = Number(command.split('Make Lower ')[1])
            let changedChar = password[index].toLowerCase();
            let leftHalf = password.slice(0, index);
            let rightHalf = password.slice(index + 1);
            password = leftHalf + changedChar + rightHalf
            console.log(password);
        }else if(command.includes('Insert')){
            let tokens = command.split(' ')
            let index = Number(tokens[1]);
            let char = tokens[2];
            let leftHalf = password.slice(0, index);
            let rightHalf = password.slice(index);
            password = leftHalf + char + rightHalf
            console.log(password);
        }else if(command.includes('Replace')){
            let tokens = command.split(' ')
            let char = tokens[1];
            let value = Number(tokens[2]);
            let charValue = char.charCodeAt();
            let newChar = String.fromCharCode(value + charValue);
            password = password.split(char).join(newChar)
            console.log(password);
        }else if(command === 'Validation'){
            if(password.length < 8){
                console.log(`Password must be at least 8 characters long!`);
            }
            let charCheck = charPattern.test(password)
            if(!charCheck){
                console.log('Password must consist only of letters, digits and _!');
            }
            let upperCaseCheck = uppperCharPattern.test(password)
            if(!upperCaseCheck){
                console.log('Password must consist at least one uppercase letter!');
            }
            if(!lowerCharPattern.test(password)){
                console.log(`Password must consist at least one lowercase letter!`);
            }
            if(!digitsPattern.test(password)){
                console.log(`Password must consist at least one digit!`);
            }
        }
        command = input.shift();
    }
}
task1(['invalidpassword*', 'Add 2 p', 'Replace i -50', 'Replace * 10', 'Make Upper 2', 'Validation', 'Complete'])

