//Напишете програма, която изчислява колко часа ще са необходими на един архитект, 
//за да изготви проектите на няколко строителни обекта. Изготвянето на един проект отнема три часа
//вход ["George ", "4 "]
//изход The architect George will need 12 hours to complete 4 project/s.

function projectCtration(input) {
    let name = input[0];
    let numberProjects = input[1];
    let totalHours = numberProjects * 3;
    console.log(`The architect ${name} will need ${totalHours} hours to complete ${numberProjects} project/s.`);

}
projectCtration (["George", 4])