/* Напишете програма, която изчислява разходите за ремонта, предвид следните цени:
•	Предпазен найлон - 1.50 лв. за кв. метър
•	Боя - 14.50 лв. за литър
•	Разредител за боя - 5.00 лв. за литър
За всеки случай, към необходимите материали, Румен иска да добави още 10% от количеството боя и 2 кв.м. найлон, разбира се и 
0.40 лв. за торбички. Сумата, която се заплаща на майсторите за 1 час работа, е равна на 30% от сбора на всички разходи за материали.
Входът се чете от конзолата и съдържа точно 4 реда:
1.	Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100]
2.	Необходимо количество боя (в литри) - цяло число в интервала [1…100]
3.	Количество разредител (в литри) - цяло число в интервала [1…30]
4.	Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9]
Да се отпечата на конзолата един ред: "{сумата на всички разходи}" */

function repainting(input) {

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintTinner = Number(input[2]);
    let workHours = Number(input[3]);
    let priceMaterials = (nylon + 2)*1.5 + (paint + paint * 0.1) * 14.50 + paintTinner * 5 + 0.40;
    let totalPrice = priceMaterials + workHours * (priceMaterials * 0.30);
    console.log(totalPrice);
}
repainting (["5","10","10","1"])