function argumentInfo(){
    let data = arguments;
    let result = {};
    for(element of data){
        let type = typeof element;
        console.log(`${type}: ${element}`);
        if(!result[type]){
            result[type] = 0;
        }
        result[type]++
    }   
    let resultArr = Object.entries(result);
    resultArr.sort((a, b) => b[1] - a[1]);
    for(el of resultArr){
        console.log(`${el[0]} = ${el[1]}`);
    }
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })