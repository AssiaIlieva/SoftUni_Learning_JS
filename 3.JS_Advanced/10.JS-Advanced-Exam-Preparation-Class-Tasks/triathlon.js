class Triathlon{
    constructor(competitionName){
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }
    addParticipant(participantName, participantGender){
        if(this.participants[participantName] === undefined){
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`;
        }else{
            return `${participantName} has already been added to the list`
        }
    }
    completeness (participantName, condition){
        if(!this.participants[participantName]){
            throw new Error(`${participantName} is not in the current participants list`);
        }
        if(condition < 30){
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }
        if(condition < 90){
            let numDisc = Math.floor(condition / 30);
            return `${participantName} could only complete ${numDisc} of the disciplines`
        }else{
            let gender = this.participants[participantName];
            let newFinalist = {participantName, gender};
            this.listOfFinalists.push(newFinalist);
            return `Congratulations, ${participantName} finished the whole competition`
        }
    }
    rewarding (participantName){
        let finalistFound = this.listOfFinalists.find(x => x.participantName === participantName);
        if(!finalistFound){
            return `${participantName} is not in the current finalists list`;
        }else{
            return `${participantName} was rewarded with a trophy for his performance`;
        }
    }
    showRecord (criteria){
        if(this.listOfFinalists.length === 0){
            return `There are no finalists in this competition`;
        }
        if(criteria !== 'all'){
            let finalistFound = this.listOfFinalists.find(x => x.gender === criteria);
            if(!finalistFound){
                return `There are no ${criteria}'s that finished the competition`
            }else{
                return `${finalistFound.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
            }
        }
        if(criteria === 'all'){
            this.listOfFinalists.sort((a, b) => a.participantName.localeCompare(b.participantName));
            let result = [`List of all ${this.competitionName} finalists:`];
            for(let finalist of this.listOfFinalists){
                result.push(finalist.participantName);
            }
            return result.join('\n');
        }
    }
}
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("all"));

