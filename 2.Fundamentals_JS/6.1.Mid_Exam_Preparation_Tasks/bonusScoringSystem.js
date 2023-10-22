function bonusScoringSystem(input) {
  let numberOfStudents = Number(input[0]);
  let numberOfLectures = Number(input[1]);
  let courseBonus = Number(input[2]);
  let maxAttendance = 0;
  let maxBonus = 0;

  for(let i = 3; i <= 3 + numberOfStudents; i++){
    let newAttendance = Number(input[i]);
    if(newAttendance > maxAttendance){
      maxAttendance = newAttendance;
      maxBonus = Math.ceil(maxAttendance / numberOfLectures * (5 + courseBonus))
    }
  }
  console.log(`Max Bonus: ${maxBonus}.`);
  console.log(`The student has attended ${maxAttendance} lectures.`);
}
bonusScoringSystem(["5", "25", "30", "12", "19", "24", "16", "20"]);
