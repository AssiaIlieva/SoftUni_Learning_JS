function task2(input){
    let pattern = /^([A-Za-z0-9!@\#\$\?]+)=(\d+)<<(.+)$/

    let command = input.shift();
    while(command !== 'Last note'){
        let match = command.match(pattern);
        if(match){
            let pick = match[1].match(/[^!@\#\$\?]/g).join('');
            let geoLength = Number(match[2]);
            let codeLength = match[3].length;
            if(geoLength === codeLength){
                console.log(`Coordinates found! ${pick} -> ${match[3]}`);
            }else{
                console.log(`Nothing found!`);
            }
            
        }else{
            console.log(`Nothing found!`);
        }
        command = input.shift();
    }
}
task2(["Ka?!#nch@@en@ju##nga@=3<<thfbghvn",
"=9Cho?@#Oyu<<thvb7ydht",
"Nan??ga#Par!ba!t?=16<<twm03q2rx5hpmyr6",
"Dhau??la#gi@ri?!#=3<<bvnfhrtiuy",
"Last note"])
