function carToGo(input){
    let budget = Number(input[0]);
    let season = input[1];
    let carClass = 0;
    let carType = 0;
    let carPrice = 0;

        if(budget <= 100){
            carClass = "Economy class"
            switch(season){
                case "Summer": carType = "Cabrio"; carPrice = budget * 0.35;
                console.log(carClass);
                console.log(`${carType} - ${carPrice.toFixed(2)}`);break
                case "Winter": carType = "Jeep"; carPrice = budget * 0.65;
                console.log(carClass);
                console.log(`${carType} - ${carPrice.toFixed(2)}`);break
            }
        }else if(budget <= 500){
            carClass = "Compact class"
            switch(season){
                case "Summer": carType = "Cabrio"; carPrice = budget * 0.45;
                console.log(carClass);
                console.log(`${carType} - ${carPrice.toFixed(2)}`);break
                case "Winter": carType = "Jeep"; carPrice = budget * 0.80;
                console.log(carClass);
                console.log(`${carType} - ${carPrice.toFixed(2)}`);break
            }
        }else if(budget > 500){
            carClass = "Luxury class";
            carType = "Jeep"; 
            carPrice = budget * 0.90;
                console.log(carClass);
                console.log(`${carType} - ${carPrice.toFixed(2)}`);
            }
        }
carToGo([1010, "Summer"])