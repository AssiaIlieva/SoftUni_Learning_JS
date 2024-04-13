function pcGameShop(input){
let gamesNum = Number(input[0]);
let heartstoneCount = 0;
let forniteCount = 0;
let overwachCount = 0;
let othersCount = 0;


for(let i = 1; i <= gamesNum; i++){
    let newGame = input[i];
    if(newGame === "Hearthstone"){
        heartstoneCount++
    }else if(newGame === "Fornite"){
        forniteCount++;
    }else if(newGame === "Overwatch"){
        overwachCount++;
    }else{
        othersCount++;
    }
}
let percFornite = forniteCount / gamesNum *100;
let percHeartstone = heartstoneCount / gamesNum * 100;
let percOverwach = overwachCount / gamesNum * 100;
let percOthers = othersCount / gamesNum * 100;
console.log(`Hearthstone - ${percHeartstone.toFixed(2)}%`); 
console.log(`Fornite - ${percFornite.toFixed(2)}%`);
console.log(`Overwatch - ${percOverwach.toFixed(2)}%`);
console.log(`Others - ${percOthers.toFixed(2)}%`);
}
pcGameShop(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])

