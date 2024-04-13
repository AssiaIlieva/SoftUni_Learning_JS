function walking(input){
    let goal = 10000;
    let index = 0;
    let sumOfSteps = 0;
    let newInput = input[index];

    while(newInput !== "Going home"){
        let newSteps = Number(input[index]);
        sumOfSteps += newSteps;
        index++;
        newInput = input[index];
        if(sumOfSteps >= goal){
            let additionalSteps = sumOfSteps - goal;
            console.log(`Goal reached! Good job!`);
            console.log(`${additionalSteps} steps over the goal!`);
            break;
        }
    }
    if(newInput === "Going home"){
        index++;
        let lastSteps = Number(input[index]);
        sumOfSteps += lastSteps;
            if(sumOfSteps >= goal){
                let additionalSteps = sumOfSteps - goal;
                console.log(`Goal reached! Good job!`);
                console.log(`${additionalSteps} steps over the goal!`);
            }else{
                let stepsneeded = goal - sumOfSteps;
                console.log(`${stepsneeded} more steps to reach goal.`);
            }
    }
}
walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])
