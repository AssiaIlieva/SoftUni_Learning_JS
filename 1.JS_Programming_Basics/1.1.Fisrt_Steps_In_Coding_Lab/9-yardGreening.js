// Напишете програма, която изчислява необходимата сума, които Божидара ще трябва да заплати на фирмата
// изпълнител на проекта. Цената на един кв. м. е 7.61 лв със ДДС. Понеже нейният двор е доста голям,
// фирмата изпълнител предлага 18% отстъпка от крайната цена.
//  От конзолата се прочита само един ред: 1.	Кв. метри, които ще бъдат озеленени
// Изход: На конзолата се отпечатват два реда:
// •	"The final price is: {крайна цена на услугата} lv."
// •	"The discount is: {отстъпка} lv."

function yardGreening(input) {
    let area = input[0];
    let price = area * 7.61;
    let disc = price * 0.18;
    let finalPrice = price - disc;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${disc} lv.`)
}

yardGreening ([550])