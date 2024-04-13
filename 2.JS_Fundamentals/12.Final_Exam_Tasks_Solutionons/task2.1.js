function taks2(input) {
    let num = Number(input.shift())
   
    let pattern = /^(\S+)\>(?<digits>\d{3})\|(?<lower>[a-z]{3})\|(?<upper>[A-Z]{3})\|(?<last>[^<>]+)\<\1$/gm
  
   
    for(let i = 0; i < num; i++){
        let password = input[i];
     
        let match = password.match(pattern);
      
        if(match === null){
            console.log('Try another password!');
        }else{
            let matches = password.matchAll(pattern);
            for (const match  of matches) {
                
                let password = match.groups.digits+match.groups.lower+match.groups.upper+match.groups.last
               
                console.log(`Password: ${password}`);
            }
        }
    }
}
taks2(["5",

"aa>111|mqu|BAU|mqu<aa",

"()>111!aaa!AAA!^&*<()",

"o>088|abc|AAA|***<o",

"asd>asd|asd|ASD|asd<asd",

"*>088|zzzz|ZzZ|123<*"])