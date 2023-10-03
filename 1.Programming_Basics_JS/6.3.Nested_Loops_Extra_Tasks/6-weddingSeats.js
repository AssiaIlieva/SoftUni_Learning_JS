function weddingSeats(input){
    let lastSector = input[0];
    let numberRows = Number(input[1]);
    let numberSeats1Row = Number(input[2]);
    let seatsCount = 0;
    let lastSectorAsNum = lastSector.charCodeAt(0);
    

    for(let s = 65; s <= lastSectorAsNum; s++){
        for(let r = 1; r <= numberRows; r++){
            if(r % 2!== 0){
                for(let p1 = 97; p1 < 97+numberSeats1Row; p1++){
                    let sector = String.fromCharCode(s);
                    let row = r;
                    let place = String.fromCharCode(p1);
                    seatsCount++;
                    console.log(`${sector}${row}${place}`);
                    continue
                }
            }else if(r % 2 === 0){
                for(let p1 = 97; p1 < 99+numberSeats1Row; p1++){
                    let sector = String.fromCharCode(s);
                    let row = r;
                    let place = String.fromCharCode(p1)
                    seatsCount++;
                    console.log(`${sector}${row}${place}`);
                }
            }
        } numberRows++
    }
    console.log(seatsCount);
}
weddingSeats(["C", "4", "2"])