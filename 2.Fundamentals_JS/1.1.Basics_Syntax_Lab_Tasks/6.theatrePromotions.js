function theatrePromotion(day, age){
    let result = '';

    if(age < 0 || age > 122){
        result = 'Error!'
    }else if(age <= 18){
        switch(day){
            case "Weekday": result = ("12$");break;
            case "Weekend": result = ("15$");break;
            case "Holiday": result = ("5$");break;
        }
    }else if(age <= 64){
        switch(day){
            case "Weekday": result = ("18$");break;
            case "Weekend": result = ("20$");break;
            case "Holiday": result = ("12$");break;
        }
    }else if(age <= 122){
        switch(day){
            case "Weekday": result = ("12$");break;
            case "Weekend": result = ("15$");break;
            case "Holiday": result = ("10$");break;
        }
    }
    console.log(result);    
}
theatrePromotion('Weekday', 42)