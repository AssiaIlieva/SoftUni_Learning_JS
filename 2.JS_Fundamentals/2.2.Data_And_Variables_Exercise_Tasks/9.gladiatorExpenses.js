function gladiatorExpenses(
  losses,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let expenses = 0;

  for (i = 1; i <= losses; i++) {
    let lossCount = i;
    if (lossCount % 2 == 0) {
      expenses += helmetPrice;
    }
    if (lossCount % 3 == 0) {
      expenses += swordPrice;
    }
    if (lossCount % 6 == 0) {
      expenses += shieldPrice;
    }
    if (lossCount % 12 == 0) {
      expenses += armorPrice;
    }
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);
