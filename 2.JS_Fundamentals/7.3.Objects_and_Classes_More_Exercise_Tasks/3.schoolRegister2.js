function schoolRegister(array) {
  let schoolRegister = {};
  //създаваме обект, в който да съхраняваме ключове с различните класове,
  // които са масив от обекти, всеки от който е оделният ученик
  for (let line of array) {
    //взимаме всеки стринг от входа и го сплитваме два пъти, за да вземем:
    let tokens = line.split(", "); // първи сплит, за да отделим отделните свойства и втори път, да вземем:
    let name = tokens[0].split(": ")[1]; //името
    let grade = Number(tokens[1].split(": ")[1]) + 1; //класа, който увеличаваме с 1 за настоящата учебна година
    let score = Number(tokens[2].split(": ")[1]); //оценката от миналата учебна година
    if (score > 3) {
      //правим проверка, дали оценката е по-голяма от 3 и ако да, тогава
      let student = { name, score }; //създаваме обект за всеки студент със свойства име и оценка
      if (!schoolRegister.hasOwnProperty(grade)) {
        //проверяваме дали в главния ни обект вече има свойство,
        schoolRegister[grade] = []; //отговарящо на настощия клас и ако не, добавяме в главния обект
        // ново свойстово с името на класа и стойност празен масив
      }
      schoolRegister[grade].push(student); //пушваме обекта на текущия студент в съответния клас(масив) на основния обект
    }
  }
  let sortedGrades = Object.keys(schoolRegister).sort((a, b) => a - b); //изваждаме и сортираме класовете (ключовете) на основния обект
  for (let grade of sortedGrades) {
    //итерираме през масива от сортирани ключове, като за всеки клас
    let students = schoolRegister[grade]; // създава се масив от обекти с учениците за съответния клас от главния обект
    
    console.log(`${grade} Grade`); // печатаме съответния клас
    console.log(`List of students: ${students.map((s) => s.name).join(", ")}`); //вадим от обектите на учениците само имената им
    console.log(  //печатаме средната оценка на учениците в този клас, като извикваме фукнцията за средно аритметично, на която подаваме извадените от обетите оценки на учениците
      `Average annual score from last year: ${average(
        students.map((s) => s.score)
      ).toFixed(2)}`
    );
    console.log(" ");
  }
  function average(arr) { //функция за пресмятане на средно аритметично от стойности в масив
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }
}
schoolRegister([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);
