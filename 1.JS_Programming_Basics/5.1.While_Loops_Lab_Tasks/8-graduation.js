function graduation(input){
    let name = input[0];
    let schollYear = 0;
    let annualGrades = 0;
    let failsCount = 0;

    for(i = 1; i <= 12; i++){
        let currentGrade = Number(input[i]);
        schollYear += 1;
        if(currentGrade < 4){
            failsCount += 1;
            if(failsCount > 1){
                break;
            }
        }else{
        annualGrades += currentGrade;     
        }
    }
    if(failsCount > 1){
        console.log(`${name} has been excluded at ${schollYear - 1} grade`);
    }else{
        let avrGrade = annualGrades / 12;
        console.log(`${name} graduated. Average grade: ${avrGrade.toFixed(2)}`);
    }
}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])