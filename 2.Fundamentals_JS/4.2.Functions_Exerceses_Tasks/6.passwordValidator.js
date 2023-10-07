function passwordValidator(password){
    if(lengthCheck(password) &&
        charCheck(password) && 
        digitsNumberCheck(password)){
            console.log('Password is valid');
            return;
        }else{
            lengthCheck(password);
            charCheck(password);
            digitsNumberCheck(password);
        }

    function lengthCheck(password){
        if (password.length >= 6 && password.length <= 10) {
            return true;            
        }else{
            console.log("Password must be between 6 and 10 characters");
        }
    }
    function charCheck(password){
        for(let i = 0; i < password.length; i++){
            let charCode = password.charCodeAt(i)
            if(charCode >= 48 && charCode <= 57 ||
                charCode >= 65 && charCode <= 90 ||
                charCode >= 97 && charCode <= 122){
                    return true;
                }else{
                    console.log('Password must consist only of letters and digits');
                }
        }
    }
    function digitsNumberCheck(password){
        let digitsCount = 0;
        for(let i = 0; i < password.length; i++){
            let charCode = password.charCodeAt(i)
            if(charCode >= 48 && charCode <= 57){
                    digitsCount++;
                }
            }

        if(digitsCount >= 2){
            return true;
        }else{
            console.log("Password must have at least 2 digits");
            }
        }
    }

passwordValidator('Pa$s$s')