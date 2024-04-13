function sequenses(input){
    let obj = {}
    let index = 1;
for (let json of input){
    let arr = JSON.parse(json).sort((a, b) => b - a);
    if((Object.keys)(obj).length === 0){
        obj[index] = arr;
        index++  
    }
    let arrToCheckStringified = JSON.stringify(arr);
    let isUnique = true;
    for(let key in obj){
        let currentValueStringified = JSON.stringify(obj[key]);
        if(arrToCheckStringified === currentValueStringified){
            isUnique = false;
        }
    }
    if(isUnique){
        obj[index] = arr;
        index++
    }
}
let resultArr = Object.values(obj).sort((a, b) => a.length - b.length);
resultArr.forEach(element => {
    console.log(`[${element.join(', ')}]`);
});
}
sequenses(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]
)