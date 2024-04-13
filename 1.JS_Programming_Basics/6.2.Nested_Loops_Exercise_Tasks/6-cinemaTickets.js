function cinemaTickets(input){
    let index = 0;
    let command = input[index];
    index ++;
    let sturdentTickets = 0;
    let standardTickets = 0;
    let kidTikcets = 0;
   
    while(command !== "Finish"){
        let movieName = command;
        let places = Number(input[index]);
        index++;
        let command1 = input[index];
        index++
        let takentPlaces = 0;
            while(command1 !== "End"){
                let ticketType = command1;
                takentPlaces++;

                if(ticketType === "student"){
                    sturdentTickets++;
                }else if(ticketType === "standard"){
                    standardTickets++;
                }else if(ticketType === "kid"){
                    kidTikcets++;
                }
                if(places === takentPlaces){
                    break;
                }
                command1 = input[index];
                index++
            } 
            let perTicketsSold = takentPlaces / places * 100;
            console.log(`${movieName} - ${perTicketsSold.toFixed(2)}% full.`);
            command = input[index];
            index++
    }
        let totalTickets = sturdentTickets + standardTickets + kidTikcets;
        let perStudentTickets = sturdentTickets / totalTickets * 100;
        let perStandartTickets = standardTickets / totalTickets * 100;
        let perKidTickets = kidTikcets / totalTickets * 100;
        console.log(`Total tickets: ${totalTickets}`);
        console.log(`${perStudentTickets.toFixed(2)}% student tickets.`);
        console.log(`${perStandartTickets.toFixed(2)}% standard tickets.`);
        console.log(`${perKidTickets.toFixed(2)}% kids tickets.`);
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