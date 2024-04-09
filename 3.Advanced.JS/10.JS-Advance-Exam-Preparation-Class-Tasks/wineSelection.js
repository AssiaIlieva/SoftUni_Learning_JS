class WineSelection{
    constructor(space){
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }
    reserveABottle (wineName, wineType, price){
        if(this.space <=0){
            throw new Error('Not enough space in the cellar.')
        }
        let newBottle = {wineName, wineType, price, paid: false};
        this.wines.push(newBottle);
        this.space -= 1;
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }
    payWineBottle( wineName, price ){
        let bottleToFind = this.wines.find(x => x.wineName === wineName);
        if(!bottleToFind){
            throw new Error(`${wineName} is not in the cellar.`);
        }
        if(bottleToFind.paid === true){
            throw new Error(`${wineName} has already been paid.`)
        }
        this.bill += price;
        bottleToFind.paid = true;
        bottleToFind.price = price;
        return `You bought a ${wineName} for a ${price}$.`
    }
    openBottle(wineName){
       let index = this.wines.findIndex((x) => x.wineName === wineName);

       if(index === -1){
        throw new Error(`The wine, you're looking for, is not found.`);
       };
       if(this.wines[index].paid === false){
        throw new Error(`${wineName} need to be paid before open the bottle.`)
       }
       this.wines.splice(index, 1);
       this.space += 1;
       return `You drank a bottle of ${wineName}.`
    }
    cellarRevision(wineType){
        if(!wineType){
            
            let result = [`You have space for ${this.space} bottles more.`, `You paid ${this.bill}$ for the wine.`];
            this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
            for(let wine of this.wines){
                if(wine.paid === true){
                    wine.paid = 'Has Paid';
                    result.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid}.`)
                }else{
                    wine.paid = 'Not Paid';
                    result.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid}.`)
                }
            }
            return result.join('\n')


        }else{
            let filtered = this.wines.filter(x => x.wineType === wineType);
            let result = [];

            if(filtered.length === 0){
                throw new Error(`There is no ${wineType} in the cellar.`)
            }
            for(let wine of filtered){
                if(wine.paid === true){
                    wine.paid = 'Has Paid';
                    result.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid}.`)
                }else{
                    wine.paid = 'Not Paid';
                    result.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid}.`)
                }
            }
            return result.join('\n');
        }
    }
}
let selection = new WineSelection(5);

console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));
console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
console.log(selection.cellarRevision());


