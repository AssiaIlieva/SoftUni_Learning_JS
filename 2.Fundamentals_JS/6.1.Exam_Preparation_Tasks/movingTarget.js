function movingTarget(input){
    let targets = input[0].split(' ').map(Number)
    for(let i = 1; i < input.length; i++){
        let newCommand = input[i].split(' ');
        let action = newCommand[0];
        switch(action){
            case 'Shoot':
                shoot(Number(newCommand[1]), Number(newCommand[2]));
                break;
            case 'Add':
                add(Number(newCommand[1]), Number(newCommand[2]));
                break;
            case 'Strike':
                strike(Number(newCommand[1]), Number(newCommand[2]));
                break;
            case 'End':
                console.log(targets.join('|'));
        }
    }
    function shoot(index, power){
        if(index >= 0 && index < targets.length){
            targets[index] = targets[index] - power;
            targets[index] > 0 ? targets[index] : targets.splice(index, 1);
        }
    }
    function add(index, value){
        if(index >= 0 && index < targets.length){
            targets.splice(index, 0, value)
        }else{
            console.log("Invalid placement!");
        }
    }
    function strike(index, radius){
        if(index - radius >= 0 && index + radius < targets.length){
            targets.splice(index - radius, radius * 2 + 1)
        }else{
            console.log('Strike missed!');
        }
    }
}
movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])