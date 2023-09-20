/* Напишете програма, която изчислява колко ще струва на група хора да си поръчат храна за вкъщи. 
Пилешко меню –  10.35 лв. Меню с риба – 12.40 лв. Вегетарианско меню  – 8.15 лв.
Групата ще си поръча и десерт, чиято цена е равна на 20% от общата сметка (без доставката). Цената на доставка е 2.50 лв и се начислява най-накрая.  
От конзолата се четат  
3 реда:
•	Брой пилешки менюта – цяло число в интервала [0 … 99]
•	Брой менюта с риба – цяло число в интервала [0 … 99]
•	Брой вегетариански менюта – цяло число в интервала [0 … 99]
Изход Да се отпечата на конзолата един ред:  "{цена на поръчката}" */

function foodDelivery(input) {
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegitarianMenus = Number(input[2]);
    let priceAllMenus = chickenMenus * 10.35 + fishMenus * 12.40 + vegitarianMenus * 8.15;
    let priceDessert = priceAllMenus * 0.20;
    let totalPrice = priceAllMenus + priceDessert + 2.50;
    console.log(totalPrice);
}

foodDelivery (["9","2","6"])