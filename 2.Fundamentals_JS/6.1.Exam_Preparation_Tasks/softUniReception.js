function softUniReception(input) {
  let studentsPerHour = Number(input[0]) + Number(input[1]) + Number(input[2]);
  let hoursNeeded = 0;
  let studentsCount = Number(input[3]);

  for (let i = studentsCount; i > 0; i -= studentsPerHour) {
    hoursNeeded++;
    if (hoursNeeded % 4 == 0) {
      i += studentsPerHour;
    }
  }
  console.log(`Time needed: ${hoursNeeded}h.`);
}
softUniReception(['5','6','4','20']);
