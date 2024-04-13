function carFactory(carOrder){
    let car = {
        model: carOrder.model
    };
    if(carOrder.power <= 90){
        car.engine = {power: 90, volume: 1800}
    }else if(carOrder.power <= 120){
        car.engine = {power: 120, volume: 2400}
    }else if(carOrder.power > 120){
        car.engine = {power: 200, volume: 3500}
    }
    car.carriage = {type: carOrder.carriage, color: carOrder.color};
    let wheelsNeeded = carOrder.wheelsize;
    if(wheelsNeeded % 2 === 0 && wheelsNeeded > 2){
        wheelsNeeded -= 1;
    }
    car.wheels = [wheelsNeeded, wheelsNeeded, wheelsNeeded, wheelsNeeded];
  
    return car
}
carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
)