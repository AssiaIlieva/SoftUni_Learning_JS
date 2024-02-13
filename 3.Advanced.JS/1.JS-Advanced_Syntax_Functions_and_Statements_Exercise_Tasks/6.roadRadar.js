function roadRadar(speed, area){
let limit = 0;
switch(area){
    case 'motorway': limit = 130;
    break;
    case 'interstate': limit = 90;
    break;
    case 'city': limit = 50;
    break;
    case 'residential': limit = 20;
    break;
}
const speeding = speed - limit;
let status = '';
if(speeding <= 0){
    console.log(`Driving ${speed} km/h in a ${limit} zone`);
}else if(speeding <= 20){
    status = 'speeding';
    console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`);
}else if(speeding > 20 && speeding <= 40){
    status = 'excessive speeding';
    console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`);
}else{
    status = 'reckless driving';
    console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`);
}
}
roadRadar(120, 'interstate')