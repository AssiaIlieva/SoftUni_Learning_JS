function worldTour(input) {
    let travel = input.shift();
    let command = input.shift();
while(command !== 'Travel'){
    let tokens = command.split(':');
    let action = tokens[0]
    if(action === 'Add Stop'){
        let index = Number(tokens[1]);
        let string = tokens[2]
        if(index >= 0 && index < travel.length){
            let leftHalf = travel.slice(0, index);
            let rightHalf = travel.slice(index);
            travel = leftHalf + string + rightHalf;
        }
    }else if(action === 'Remove Stop'){
        let startIdx = Number(tokens[1]);
        let endIndex = Number(tokens[2]);
        if(startIdx >= 0 && startIdx < travel.length && endIndex >= 0 && endIndex < travel.length){
            let leftHalf = travel.slice(0, startIdx);
            let rightHalf = travel.slice(endIndex + 1);
            travel = leftHalf + rightHalf;
        }
    }else if(action === 'Switch'){
        let oldString = tokens[1];
        let newString = tokens[2];
        if(travel.includes(oldString)){
            let arr = travel.split(oldString);
            let updatedTravel = arr.join(newString);
            travel = updatedTravel;
        }
    }
    console.log(travel);
    command = input.shift();
}
    console.log(`Ready for world tour! Planned stops: ${travel}`);
  }
worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])


