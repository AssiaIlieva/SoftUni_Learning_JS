// Напишете функция за конвертиране на щатски долари (USD) в български лева (BGN). Използвайте фиксиран курс между долар и лев:
//1 USD = 1.79549 BGN.
//вход	изход		вход	изход		вход	изход
//(["22"])	39.50078		(["100"])	179.549		(["12.5"])	22.443625

function USDtoBGN(input) {
let dollars = input[0];
let leva = dollars * 1.79549;
console.log(leva);
}

USDtoBGN ([12.5])
