function commonElements(array1, array2){
    let array1Length = array1.length;
    let array2Length = array2.length;
    for(let i = 0; i < array1Length; i++){
        for(let j = 0; j < array2Length; j++){
            if(array1[i] === array2[j]){
                console.log(array1[i]);
            }
        }
    }

}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
)