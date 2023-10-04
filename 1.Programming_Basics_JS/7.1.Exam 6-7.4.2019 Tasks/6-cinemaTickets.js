function cinemaTickets(input){
    let index = 0;
    let command1 = input[index];
    index++;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    while(command1 !== "Finish"){
        let movieName = command1
        let placesNum = Number(input[index]);
            index++
            let command2 = input[index];
            index++;
            let placesTaken = 0;
            while(command2 !== "End"){
                let newTicket = command2;
                placesTaken++
                    if(newTicket === "student"){
                        studentTickets++;
                    }else if(newTicket === "standard"){
                        standardTickets++;
                    }else if(newTicket === "kid"){
                        kidTickets ++;
                    }
                    if(placesNum === placesTaken){
                        break;
                    }
                    command2 = input[index];
                    index++
            }   let percTakenPlaces = placesTaken / placesNum * 100;
                console.log(`${movieName} - ${percTakenPlaces.toFixed(2)}% full.`);
                command1 = input[index];
                index++
    }
        let totalTickets = studentTickets + standardTickets + kidTickets;
        let percStudentTickets = studentTickets / totalTickets * 100;
        let percStandardTickets = standardTickets / totalTickets * 100;
        let percKidTickets = kidTickets / totalTickets * 100;
    console.log(`Total tickets: ${totalTickets.toFixed(2)}`);
    console.log(`${percStudentTickets.toFixed(2)}% student tickets.`);
    console.log(`${percStandardTickets.toFixed(2)}% standard tickets.`);
    console.log(`${percKidTickets.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])