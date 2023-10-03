function traveling(input){
    let index = 0;
    let destination = "";
    let budget = 0;
    
    
    while(destination !== "End"){
        destination = input[index]
        if(destination === "End"){
            break;
        }
        index++;
        budget = Number(input[index]);
        index++;
        let savedMoney = 0;
            while(savedMoney < budget){
                savedMoney += Number(input[index]);
                index++;
            }
            console.log(`Going to ${destination}!`);
    }
}
traveling(["Greece", "1000", "200", "200", "300", "100", "150",
"240", "Spain", "1200", "300", "500", "193", "423", "End"])