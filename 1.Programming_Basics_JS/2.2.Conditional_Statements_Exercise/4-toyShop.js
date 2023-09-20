// Цени на играчките: Пъзел - 2.60 лв.,Говореща кукла - 3 лв., Плюшено мече - 4.10 лв., Миньон - 8.20 лв., Камионче - 2 лв.
// Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена.
// От спечелените пари Петя трябва да даде 10% за наема на магазина. Да се пресметне дали парите ще ѝ стигнат да отиде на екскурзия.
// От конзолата се четат 6 реда:
// 1.	Цена на екскурзията - реално число в интервала [1.00 … 10000.00]
// 2.	Брой пъзели - цяло число в интервала [0… 1000]
// 3.	Брой говорещи кукли - цяло число в интервала [0 … 1000]
// 4.	Брой плюшени мечета - цяло число в интервала [0 … 1000]
// 5.	Брой миньони - цяло число в интервала [0 … 1000]
// 6.	Брой камиончета - цяло число в интервала [0 … 1000]
// На конзолата се отпечатва:
// •	Ако парите са достатъчни се отпечатва:
// o	"Yes! {оставащите пари} lv left."
// •	Ако парите НЕ са достатъчни се отпечатва:
// o	"Not enough money! {недостигащите пари} lv needed."
// Резултатът трябва да се форматира до втория знак след десетичната запетая.


function toyShop(input) {
    let priceExcursion = Number(input[0]);
    let puzzelsCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let mignonsCount = Number(input[4]);
    let trucksCount = Number(input[5]);
    let allToys = puzzelsCount + dollsCount + bearsCount + mignonsCount + trucksCount;
    let amount = puzzelsCount * 2.60 + dollsCount * 3 + bearsCount * 4.1 + mignonsCount * 8.2 + trucksCount * 2;
    if (allToys >= 50) {
       amount = amount * 0.75;
    }
        amount = amount * 0.90;
    if (amount - priceExcursion >= 0) {
        let moneyLeft = amount - priceExcursion;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeed = priceExcursion - amount;
        console.log(`Not enough money! ${moneyNeed.toFixed(2)} lv needed.`);
    }
}
toyShop(["40.8","20","25","30","50","10"])


