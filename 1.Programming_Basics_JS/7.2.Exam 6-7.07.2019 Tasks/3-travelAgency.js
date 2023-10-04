    function travelAgency(input){
    let destination = input[0];
    let packageType = input[1];
    let statusVIP = input[2];
    let daysNum = Number(input[3]);
    let price = 0;

    
    if(daysNum >= 7){
        daysNum = daysNum - 1;
    }
    if(packageType !== "withEquipment" && packageType !== "noEquipment" && packageType !== "withBreakfast" && packageType !== "noBreakfast"){
        console.log(`Invalid input!`);
        return
    }
    if(daysNum < 1){
        console.log(`Days must be positive number!`);   
    }else if(destination === "Bansko" || destination === "Borovets"){
            if(packageType === "withEquipment"){
                if(statusVIP === "no"){
                    price = daysNum * 100;
                }else if(statusVIP === "yes"){
                    price = daysNum * 100 * 0.90;
                }else{
                    console.log(`Invalid input!`);
                }
            }else if(packageType === "noEquipment"){
                if(statusVIP === "no"){
                    price = daysNum * 80;
                }else{
                    price = daysNum * 80 * 0.95;
                }
            }
            console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    }else if(destination === "Varna" || destination === "Burgas"){
            if(packageType === "withBreakfast"){
                if(statusVIP === "no"){
                    price = daysNum * 130;
                }else{
                    price = daysNum * 130 * 0.88;
                }
            }else if(packageType === "noBreakfast"){
                if(statusVIP === "no"){
                    price = daysNum * 100;
                }else if(statusVIP === "yes"){
                    price = daysNum * 100 * 0.93;
                }else{
                    console.log(`Invalid input!`);
                }
            } 
            console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
        }else{
            console.log(`Invalid input!`);
        }
    }    
travelAgency(["Borovets", "noEquipment", "yes", "6"]);
