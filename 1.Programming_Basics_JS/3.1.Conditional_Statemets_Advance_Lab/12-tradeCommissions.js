function tradeCommission(input){
    let town = input[0];
    let salesCount = Number(input[1]);

    if(salesCount >= 0 && salesCount <= 500){
        switch(town){
            case "Sofia": console.log((salesCount * 0.05).toFixed(2)); break
            case "Varna": console.log((salesCount * 0.045).toFixed(2)); break
            case "Plovdiv": console.log((salesCount * 0.055).toFixed(2));break
            default:console.log("error"); break
        }
    } else if(salesCount > 500 && salesCount <= 1000){
        switch(town){
            case "Sofia": console.log((salesCount * 0.07).toFixed(2)); break
            case "Varna": console.log((salesCount * 0.075).toFixed(2)); break
            case "Plovdiv": console.log((salesCount * 0.08).toFixed(2));break
            default:console.log("error"); break
        }
    } else if(salesCount > 1000 && salesCount <= 10000){
        switch(town){
            case "Sofia": console.log((salesCount * 0.08).toFixed(2)); break
            case "Varna": console.log((salesCount * 0.1).toFixed(2)); break
            case "Plovdiv": console.log((salesCount * 0.12).toFixed(2));break
            default:console.log("error"); break
        }
    } else if(salesCount > 10000){
        switch(town){
            case "Sofia": console.log((salesCount * 0.12).toFixed(2)); break
            case "Varna": console.log((salesCount * 0.13).toFixed(2)); break
            case "Plovdiv": console.log((salesCount * 0.145).toFixed(2));break
            default:console.log("error"); break
        }
    } else {
        console.log("error");
    }
}
tradeCommission(["Kaspichan", "-50"])