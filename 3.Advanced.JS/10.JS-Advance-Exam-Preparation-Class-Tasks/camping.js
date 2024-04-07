class SummerCamp {
    constructor(organizer, location){
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }
    registerParticipant(name, condition, money){
        if(!this.priceForTheCamp[condition]){
            throw new Error('Unsuccessful registration at the camp.');
        }
        let newParticipant = this.listOfParticipants.find((x) =>{return x.name === name});
        let moneyNeeded = this.priceForTheCamp[condition];
        if(newParticipant){
            return `The ${name} is already registered at the camp.`
        }else if(money < moneyNeeded){
            return `The money is not enough to pay the stay at the camp.`
        }else{
            let newEntry = {name, condition, power: 100, wins: 0};
            this.listOfParticipants.push(newEntry);
            return `The ${name} was successfully registered.`
        }
    }
    unregisterParticipant(name){
        let participantToRemove = this.listOfParticipants.find((x) => x.name === name);
        if(!participantToRemove){
            throw new Error(`The ${name} is not registered in the camp.`);
        }else{
            this.listOfParticipants = this.listOfParticipants.filter((x) => x.name !== name);
            return `The ${name} removed successfully.`;
        }
    }
    timeToPlay(typeOfGame, participant1, participant2){
        if(typeOfGame === 'WaterBalloonFights'){
            let firstParticipant = this.listOfParticipants.find((x) => {return x.name === participant1});
            let secondParticipant = this.listOfParticipants.find((x)=> {return x.name === participant2});
            if(!firstParticipant || !secondParticipant){
                throw new Error(`Invalid entered name/s.`);
            }else if(firstParticipant.condition !== secondParticipant.condition){
                throw new Error(`Choose players with equal condition.`);
            }else{
                if(firstParticipant.power > secondParticipant.power){
                    firstParticipant.wins++;
                    return `The ${firstParticipant.name} is winner in the game ${typeOfGame}.`
                }else if(secondParticipant.power > firstParticipant.power){
                    secondParticipant.wins++;
                    return `The ${secondParticipant.name} is winner in the game ${typeOfGame}.`
                }else{
                    return `There is no winner.`
                }
            }
        }
        if(typeOfGame === 'Battleship'){
            let participant = this.listOfParticipants.find((x) => {return x.name === participant1});
            if(!participant){
                throw new Error(`Invalid entered name/s.`);
            }else{
                participant.power += 20;
                return `The ${participant.name} successfully completed the game ${typeOfGame}.`
            }
        }
    }
    toString(){
        let numberParticipants = this.listOfParticipants.length;
        let result = [`${this.organizer} will take ${numberParticipants} participants on camping to ${this.location}`];
        this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        for(let el of this.listOfParticipants){
            let newEntry = `${el.name} - ${el.condition} - ${el.power} - ${el.wins}`
            result.push(newEntry);
        }
        return result.join('\n');
    } 
}



