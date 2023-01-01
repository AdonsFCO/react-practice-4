function getIntMonthly(i) {
  return i / 12 / 100;
}
function getQuote(amount, amountOfQuotes, interest) {
  return (amount * interest) / (1 - (1 + interest) ** (amountOfQuotes * -1));
}

function getInterestValue(currentBalance, interest) {
  return currentBalance * interest;
}

function getCapital(interestValue, quote) {
  return quote - interestValue;
}

function getCurrentBalance(capital, currentBalance) {
  return capital - currentBalance;
}

function getAmortizationTable(amount, amountOfQuotes, monthlyInterest) {
  const months = [];
  let currentBalance = amount;
  monthlyInterest = getIntMonthly(monthlyInterest);
  const quotes = getQuote(amount, amountOfQuotes, monthlyInterest).toFixed(2);

  for (let number = 0; number < amountOfQuotes; number++) {
    let interestValue = getInterestValue(
      currentBalance,
      monthlyInterest
    ).toFixed(2);
    let capital = getCapital(interestValue, quotes).toFixed(2);
    currentBalance = Math.round(getCurrentBalance(currentBalance, capital));

    let month = {
      number: number + 1,
      quotes,
      capital,
      interestValue,
      balance: currentBalance + 1,
    };

    months.push(month);
  }

  return months;
}
export { getAmortizationTable };
