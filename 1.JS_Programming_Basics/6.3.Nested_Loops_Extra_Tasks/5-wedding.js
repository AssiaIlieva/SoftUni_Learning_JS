function wedding(input){
    let men = Number(input[0]);
    let women = Number(input[1]);
    let tables = Number(input[2]);
    let print = "";

    for(i = 1; i <= men; i++){
        for(j = 1; j <= women; j++){
            let newPair = `(${i} <-> ${j}) `;
            tables--;
            if(tables >= 0){
                print += newPair;
            }else{
                break;
            }
        }
    }
    console.log(print);
}
wedding(["5", "8", "40"])