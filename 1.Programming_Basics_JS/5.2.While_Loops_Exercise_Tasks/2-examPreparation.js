function examPreparation(input){
    let NumberBadGrades = Number(input[0]);
    let index = 1;
    let taskName = input[index];
    let currGrade = Number(input[++index]);
    let badGrades = 0;
    let sumGrades = 0;
    let taskCount = 0;

    while(taskName !== "Enough"){
        sumGrades += currGrade;
        taskCount += 1;
        if(currGrade <= 4){
            badGrades += 1
        }
        if(NumberBadGrades === badGrades){
            console.log(`You need a break, ${badGrades} poor grades.`);
            return;
        }
            index++;
            taskName = input[index];
            currGrade = Number(input[++index]);
        }
        if(taskName === "Enough"){
            taskName = input[index - 3];
        }
        let avrgGrade = sumGrades / taskCount;
        console.log(`Average score: ${avrgGrade.toFixed(2)}`);
        console.log(`Number of problems: ${taskCount}`);
        console.log(`Last problem: ${taskName}`);
}   

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])