class Garden {
    constructor(spaceAvailable){
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired){
        if(this.spaceAvailable < spaceRequired){
            throw new Error("Not enough space in the garden.");
        }
        let newPlant = {name: plantName, spaceRequired, ripe: false, quantity: 0};
        this.spaceAvailable -= spaceRequired;
        this.plants.push(newPlant);
        return `The ${plantName} has been successfully planted in the garden.`
    }
    ripenPlant(plantName, quantity){
        let isFound = false;
        for(let plant of this.plants){
            if(plant.name === plantName){
                isFound = true;
                if(plant.ripe === true){
                    throw new Error(`The ${plantName} is already ripe.`);
                }
                if(quantity <= 0){
                    throw new Error("The quantity cannot be zero or negative.");
                }
                plant.ripe = true;
                plant.quantity = quantity;
                if(quantity === 1){
                    return `${quantity} ${plantName} has successfully ripened.`;
                }
                return `${quantity} ${plantName}s have successfully ripened.`
            }
        }
        if(!isFound){
            throw new Error(`There is no ${plantName} in the garden.`);
        }
    }
    harvestPlant(plantName){
        let isFound = false;
        for(let plant of this.plants){
            if(plant.name === plantName){
                isFound = true;
                if(plant.ripe === false){
                    throw new Error (`The ${plantName} cannot be harvested before it is ripe.`)
                }
                this.spaceAvailable += plant.spaceRequired;
                let havesedPlant = {name:plantName, quantity: plant.quantity};
                this.storage.push(havesedPlant);
                let index = this.plants.findIndex((x) => x.name === plantName);
                this.plants.splice(index, 1);
                return `The ${plantName} has been successfully harvested.`
            }
        }
       if(!isFound){
        throw new Error(`There is no ${plantName} in the garden.`)
       } 
    }
    generateReport(){
        let result = [`The garden has ${this.spaceAvailable} free space left.`];
        
        // Sort plants alphabetically by name
        this.plants.sort((a, b) => a.name.localeCompare(b.name));
        
        // Prepare list of plants in the garden
        let plantsInGarden = this.plants.map(plant => plant.name);
        result.push(`Plants in the garden: ${plantsInGarden.join(', ')}`);
        
        // Prepare list of plants in storage
        if(this.storage.length === 0){
            result.push('Plants in storage: The storage is empty.');
        } else {
            let plantsInStorage = this.storage.map(plant => `${plant.name} (${plant.quantity})`);
            result.push(`Plants in storage: ${plantsInStorage.join(', ')}`);
        }
        
        return result.join('\n');
    }
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());