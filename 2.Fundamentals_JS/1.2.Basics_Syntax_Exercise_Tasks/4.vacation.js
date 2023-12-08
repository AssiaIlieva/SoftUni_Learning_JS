function vacation(count, type, day){
let singlePrice = 0;
if(type === 'Students'){
    switch(day){
        case 'Friday': singlePrice = 8.45; break;
        case 'Saturday': singlePrice = 9.8; break;
        case 'Sunday': singlePrice = 10.46; break;
    }
}else if(type === 'Business'){
    switch(day){
        case 'Friday': singlePrice = 10.9; break;
        case 'Saturday': singlePrice = 15.6; break;
        case 'Sunday': singlePrice = 16; break;
    }
}else if(type === 'Regular'){
    switch(day){
        case 'Friday': singlePrice = 15; break;
        case 'Saturday': singlePrice = 20; break;
        case 'Sunday': singlePrice = 22.5; break;
    }
}
let calculatedPrice = count * singlePrice;
if(type === "Students" && count >= 30){
    calculatedPrice *= 0.85;
}else if(type === 'Business' && count >= 100){
    calculatedPrice = (count - 10) * singlePrice;
}else if(type === 'Regular' && (count >= 10 && count <= 20)){
    calculatedPrice *= 0.95
}
console.log(`Total price: ${calculatedPrice.toFixed(2)}`);
}
vacation(40, "Regular", "Saturday")