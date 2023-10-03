function grades(input){
let numberOfStudents = Number(input[0]);
let gradesSum = 0;
let topGradesCount = 0;
let veryGoodGradesCount = 0;
let goodGradesCount = 0;
let failGradesCount = 0;

for(i = 1; i <= numberOfStudents; i++){
    let newGrade = Number(input[i]);
    if(newGrade < 3){
        gradesSum += newGrade;
        failGradesCount += 1
    }else if(newGrade < 4){
        gradesSum += newGrade;
        goodGradesCount += 1;
    }else if(newGrade < 5){
        gradesSum += newGrade;
        veryGoodGradesCount += 1;
    }else{
        gradesSum += newGrade;
        topGradesCount += 1;
    }
}
let topStudents = topGradesCount / numberOfStudents * 100;
    let veryGoodStudents = veryGoodGradesCount / numberOfStudents * 100;
    let goodStudents = goodGradesCount / numberOfStudents * 100;
    let failedStudents = failGradesCount / numberOfStudents * 100;
    let averageGrade = gradesSum / numberOfStudents;
    console.log(`Top students: ${topStudents.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${veryGoodStudents.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${goodStudents.toFixed(2)}%`);
    console.log(`Fail: ${failedStudents.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);
}
grades([10, 3.00, 2.99, 5.68, 3.01, 4, 4, 6.00, 4.50, 2.44, 5])