function experienceGaining(input) {
let experienceNeeded = input[0];

let battlesCount = 0;
let expGained = 0;

for(let i = 2; i < input.length; i++){
    let newExp = input[i];
    battlesCount++;
    if(battlesCount % 3 === 0 && battlesCount % 5 === 0){
        expGained += newExp * 1.05;
    }else if(battlesCount % 3 === 0){
        expGained += newExp * 1.15;
    }else if(battlesCount % 5 === 0){
        expGained += newExp * 0.9;
    }else{
        expGained += newExp;
    }
    if(expGained >= experienceNeeded){
        console.log(`Player successfully collected his needed experience for ${battlesCount} battles.`);
        return;
    }
   }
   let moreExpToGain = experienceNeeded - expGained;
   console.log(`Player was not able to collect the needed experience, ${moreExpToGain.toFixed(2)} more needed.`);
   }
experienceGaining([400, 5, 50, 100, 200, 100, 20]);
