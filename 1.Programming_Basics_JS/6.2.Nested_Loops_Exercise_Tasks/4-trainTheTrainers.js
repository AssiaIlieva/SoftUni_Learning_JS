function trainTheTrainers(input){
    let juryCount = Number(input[0]);
    let index = 1
    let presentationName = input[index];
     index++
    let gradesCount = 0;
    let totalSumGrades = 0;

    while(presentationName !== "Finish"){

        let sumGrades = 0;
        for(i=1; i <= juryCount; i++){
            let newGrade = Number(input[index]);
            sumGrades += newGrade;
            gradesCount += 1;   
            index++         
        }
            let avrGrade = sumGrades / juryCount;
            console.log(`${presentationName} - ${avrGrade.toFixed(2)}.`);
            totalSumGrades += sumGrades;
            presentationName = input[index];
            index++
    }
    let avrPresentationsGrade = totalSumGrades / gradesCount;
    console.log(`Student's final assessment is ${avrPresentationsGrade.toFixed(2)}.`);
}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


