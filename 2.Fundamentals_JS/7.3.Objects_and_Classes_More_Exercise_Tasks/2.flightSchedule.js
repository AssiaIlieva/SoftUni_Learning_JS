function flightSchedule(input) {
    let keyWord = input.pop()[0];
    let flights = input[0];
    let updatedFlights = input[1];
    let objFlights = {};
    for (let flight of flights) {
      let [num, desination] = flight.split(" ");
      objFlights[num] = {
        Destination: desination,
        Status: "Ready to fly",
      };
    }
    for (let flight of updatedFlights) {
      let [num, status] = flight.split(" ");
      if (objFlights.hasOwnProperty(num)) {
        objFlights[num].Status = status;
      }
    }
    for (let flight in objFlights) {
      if (objFlights[flight].Status === keyWord) {
        console.log(objFlights[flight]);
      }
    }
  }
  flightSchedule([['WN269 Delaware',
  'FL2269 Oregon',
   'WN498 Las Vegas',
   'WN3145 Ohio',
   'WN612 Alabama',
   'WN4010 New York',
   'WN1173 California',
   'DL2120 Texas',
   'KL5744 Illinois',
   'WN678 Pennsylvania'],
   ['DL2120 Cancelled',
   'WN612 Cancelled',
   'WN1173 Cancelled',
   'SK330 Cancelled'],
   ['Ready to fly']
])