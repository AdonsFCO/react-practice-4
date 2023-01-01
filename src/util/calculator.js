function currencyFormatter(value)
{
  const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'DOM',
});

  return(formatter.format(value))
}


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
      quotes : currencyFormatter(quotes),
      capital : currencyFormatter(capital),
      interestValue : currencyFormatter(interestValue),
      balance:  currencyFormatter(currentBalance),
    };

    months.push(month);
  }

  return months;
}
export { getAmortizationTable };
