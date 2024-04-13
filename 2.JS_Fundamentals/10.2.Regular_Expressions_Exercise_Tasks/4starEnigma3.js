function starEnigma(input){
    let pattern = /[^-@!:>]*@(?<planet>[A-Za-z]+)[^-@!:>]*:(?<population>\d+)[^-@!:>]*!(?<type>A|D)![^-@!:>]*->(?<soldiers>\d+)/
    let num = Number(input.shift());
    let attackedPlanets = [];
    let attacksConts = 0;
    let destroyedPlanets = [];
    let destroyCounts = 0;

    for(let i = 0; i < num; i++){
        let newMessage = input.shift();
        let keyMatch = newMessage.match(/[stra]/gi)
        if(keyMatch){
            let key = keyMatch.length;
            encriptedMsg = newMessage.split('').map(a => a.charCodeAt() - key).map(a => String.fromCharCode(a)).join('')
        }else{
            encriptedMsg = newMessage
        }
       let match = encriptedMsg.match(pattern);
       if(match){
            let planet = match.groups.planet;
            let type = match.groups.type;
            if(type === 'A'){
                attackedPlanets.push(planet);
                attacksConts++;
            }else if(type === 'D'){
                destroyedPlanets.push(planet);
                destroyCounts++;
            }
       }
    }
    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));
    console.log(`Attacked planets: ${attacksConts}`);
    attackedPlanets.forEach(element => {
        console.log(`-> ${element}`);
    });
    console.log(`Destroyed planets: ${destroyCounts}`);
    destroyedPlanets.forEach(element => {
        console.log(`-> ${element}`);
    });
}
starEnigma(['3',
"tt(''DGsvywgerx>6444444444%H%1B9444",
'GQhrr|A977777(H(TTTT',
'EHfsytsnhf?8555&I&2C9555SR'])