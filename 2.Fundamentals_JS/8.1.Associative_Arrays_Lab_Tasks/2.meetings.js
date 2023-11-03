function meetings(input) {
  let schedule = {};

  for (let line of input) {
    let [day, name] = line.split(" ");
    if (schedule.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      schedule[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  }
  for (let [day, name] of Object.entries(schedule)) {
    console.log(`${day} -> ${name}`);
  }
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
