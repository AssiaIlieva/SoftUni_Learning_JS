function hospital(input){
    let days = Number(input[0]);
    let patiensPerDay = 0;
    let numberOfDoctors = 7;
    let treatedPatiens = 0;
    let untreatedPatiens = 0;

    for(i = 1; i <= days; i++){
        patiensPerDay = Number(input[i]);
        if(i % 3 === 0){
            if(untreatedPatiens > treatedPatiens){
                numberOfDoctors += 1;
            }
        }
        if(patiensPerDay > numberOfDoctors){
            untreatedPatiens += patiensPerDay - numberOfDoctors;
            treatedPatiens += numberOfDoctors;
        }else{
            treatedPatiens += patiensPerDay;
        }
    }
    console.log(`Treated patients: ${treatedPatiens}.`);
    console.log(`Untreated patients: ${untreatedPatiens}.`);
}
hospital([3, 7, 7, 7])