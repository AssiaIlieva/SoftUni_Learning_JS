/* Тя е редовна клиентка на една книжарница, затова има намаление за нея, което представлява някакъв процент от общата сума.
Напишете програма, която изчислява колко пари ще трябва да събере Ани, за да плати сметката, като имате предвид следния ценоразпис: 
•	Пакет химикали - 5.80 лв. 
•	Пакет маркери - 7.20 лв. 
•	Препарат - 1.20 лв (за литър)
Вход От конзолата се четат 4 числа:
•	Брой пакети химикали - цяло число в интервала [0...100]
•	Брой пакети маркери - цяло число в интервала [0...100]
•	Литри препарат за почистване на дъска - цяло число в интервала [0…50]
•	Процент намаление - цяло число в интервала [0...100]
Изход Да се отпечата на конзолата колко пари ще са нужни на Ани, за да си плати сметката. */

function suppliesForSchool(input) {
    let packsPens = Number(input[0]);
    let packsMarkers = Number(input[1]);
    let cleaningLiquid = Number(input[2]);
    let discountPersent = Number(input[3]);
    let pricePens = packsPens * 5.80;
    let priceMarkers = packsMarkers * 7.20;
    let priceCleaningLiquid = cleaningLiquid * 1.20;
    let totalPrice = pricePens + priceMarkers + priceCleaningLiquid;
    let finalPrisce = totalPrice - (totalPrice * discountPersent/100);
    
    console.log(finalPrisce);
}

suppliesForSchool (["4","2","5","13"])