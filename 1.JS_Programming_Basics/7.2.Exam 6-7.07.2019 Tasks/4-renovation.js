function renovation(input){
let index = 0;
let hight = Number(input[index]);
index++;
let width = Number(input[index]);
index++;
let unpaintedArea = Number(input[index]);
index++;
let command = input[index];
index++;
let paintLitres = 0;
let Fullarea = 4 * hight * width;
let areaForPaint = Math.ceil(Fullarea - Fullarea * unpaintedArea / 100);

while(command !== "Tired!"){
    let newLitres = Number(command);
    paintLitres += newLitres;
    if(paintLitres > areaForPaint){
        let extraPaint = paintLitres - areaForPaint;
        console.log(`All walls are painted and you have ${extraPaint} l paint left!`);
        return;
    }else if(paintLitres === areaForPaint){
        console.log(`All walls are painted! Great job, Pesho!`);
        return;
    }else{
        command = input[index];
        index++
    }
}
    let quadraticMetersLeft = areaForPaint - paintLitres;
console.log(`${quadraticMetersLeft} quadratic m left.`);
}
renovation(["2",
"3",
"25",
"6",
"7",
"8"])
