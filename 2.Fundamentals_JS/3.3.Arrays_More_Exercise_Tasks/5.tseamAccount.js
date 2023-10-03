function tseamAccount(arr){
let account = arr[0].split(' ');
for(let i = 1; i < arr.length; i++){
    let currentElement = arr[i].split(' ');
    let command = currentElement[0];
    let game = currentElement[1];

    if(command === 'Play!'){
        break;
    }else if(command === 'Install' && !account.includes(game)){
        account.push(game);
    }else if(command === 'Uninstall' && account.includes(game)){
        let index = account.indexOf(game);
        account.splice(index,1);
    }else if(command === 'Update' && account.includes(game)){
        let index = account.indexOf(game);
        account.splice(index,1);
        account.push(game);
    }else if(command === 'Expansion'){
        let expansion = game.split('-');
        let gameForExpansion = expansion[0];
        
        if(account.includes(gameForExpansion)){
            let index = account.indexOf(gameForExpansion);
            let expandedGame = expansion.join(':');
            account.splice(index + 1, 0, expandedGame)
        }

    }
}
    console.log(account.join(' '));
}
tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']
)