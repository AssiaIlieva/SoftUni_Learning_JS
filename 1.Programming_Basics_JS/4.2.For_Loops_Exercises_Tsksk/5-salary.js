function salary(input){
    let tabsCount = Number(input[0]);
    let salary = Number(input[1]);
    let website = '';

    for(i=2; i < tabsCount + 2; i++){
        website = input[i];
            if(website === "Facebook" ){
                salary -= 150;
            }else if(website === "Instagram" ) {
                salary -= 100;
            }else if(website === "Reddit"){
                salary -= 50;
            }else if( salary <= 0){
                break
            }
    }
    if(salary <= 0){
        console.log("You have lost your salary." );
    }else{
        console.log(Math.floor(salary));
    }
}
salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])

