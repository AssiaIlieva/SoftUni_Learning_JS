function travelTime(input){
let travels = {};
    for(let line of input){
        let[country, town, price] = line.split(' > ');
        price = Number(price);

        if(!travels.hasOwnProperty(country)){
            travels[country] = {}
        }
        if(!travels[country].hasOwnProperty(town) || travels[country][town] > price){
            travels[country][town] = price;
        }
    }
    let sortedCountries = Object.keys(travels).sort((a, b) => a.localeCompare(b));

    for(let country of sortedCountries){
        let sortedTowns = Object.entries(travels[country]).sort((a, b) => a[1] - b[1]);
        let strTowns = sortedTowns.map(([town, price]) => `${town} -> ${price}`).join(' ');
        console.log(`${country} -> ${strTowns}`);
    }
}
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ])