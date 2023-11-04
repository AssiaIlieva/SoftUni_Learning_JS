function schoolGrades(arr) {
    let students = {};
  
    for (let element of arr) {
      let tokens = element.split(" ");
      let name = tokens.shift();
      let grades = tokens.map((x) => Number(x));
  
      if (name in students) {
        students[name].push(...grades);
      } else {
        students[name] = grades;
      }
    }
  
    let sortedKeys = Object.keys(students).sort((a, b) => a.localeCompare(b));
  
    for (let student of sortedKeys) {
      let name = student;
      let avrgGrade =
        students[student].reduce((a, b) => a + b, 0) / students[student].length;
      console.log(`${name}: ${avrgGrade.toFixed(2)}`);
    }
  }
schoolGrades(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);
