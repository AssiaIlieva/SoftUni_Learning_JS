function sequences(input) {
    let obj = {};

    for (let json of input) {
        let arr = JSON.parse(json).sort((a, b) => b - a);
        let arrStringified = JSON.stringify(arr);

        if (!Object.values(obj).some(value => JSON.stringify(value) === arrStringified)) {
            obj[arrStringified] = arr;
        }
    }

    let resultArr = Object.values(obj).sort((a, b) => a.length - b.length);
   resultArr.forEach(element => {
    console.log(`[${element.join(', ')}]`);
});
}
sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]
)