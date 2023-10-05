function formatGrade(grade) {
  let lable = "";
  if (grade < 3) {
    grade = 2;
    lable = "Fail";
  } else {
    if (grade < 3.5) {
      lable = "Poor";
    } else if (grade < 4.5) {
      lable = "Good";
    } else if (grade < 5.5) {
      lable = "Very good";
    } else if (grade >= 5.5) {
      lable = "Excellent";
    }
    grade = grade.toFixed(2);
  }
  console.log(`${lable} (${grade})`);
}
formatGrade(3.5);
