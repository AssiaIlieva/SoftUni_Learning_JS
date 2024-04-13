function truckDriver(input){
    let season = input[0];
    let km = Number(input[1]);
    let salary = 0;

    if(km <= 5000){
        switch(season){
            case "Spring":
            case "Autumn":
                salary = (4 * km * 0.75) * 0.90;
                console.log(`${salary.toFixed(2)}`); break
            case "Summer":
                salary = (4 * km * 0.9) * 0.90;
                console.log(`${salary.toFixed(2)}`); break
                case "Winter":
                    salary = (4 * km * 1.05) * 0.90;
                    console.log(`${salary.toFixed(2)}`); break
        }
    }else if(km > 5000 && km <= 10000){
        switch(season){
            case "Spring":
            case "Autumn":
                salary = (4 * km * 0.95) * 0.90;
                console.log(`${salary.toFixed(2)}`); break
            case "Summer":
                salary = (4 * km * 1.1) * 0.90;
                console.log(`${salary.toFixed(2)}`); break
                case "Winter":
                    salary = (4 * km * 1.25) * 0.90;
                    console.log(`${salary.toFixed(2)}`); break
        }
    }else if(km > 10000 && km <= 20000){
                salary = (4 * km * 1.45) * 0.90;
                console.log(`${salary.toFixed(2)}`);
    }
}
truckDriver(["Autumn", 8600])
