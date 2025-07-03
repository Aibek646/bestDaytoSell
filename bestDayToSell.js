// function maxProfit(prices) {
//   let buy = prices[0];
//   prices[0] = 0;
//   let profit = 0;
//   for (let i = 1; i < prices.length; i++) {
//     if (buy > prices[i]) {
//       buy = prices[i];
//       prices[i] = 0;
//     } else {
//       profit = Math.max(prices[i] - buy, profit);
//     }
//   }
//   return profit;
// }
var maxProfit = function (prices) {
  let sellIdx = prices.length - 1;
  let profit = 0;

  for (let buyIdx = prices.length - 1; buyIdx >= 0; buyIdx--) {
    let buyVal = prices[buyIdx];
    let sellVal = prices[sellIdx];

    if (buyVal - sellVal >= 0) {
      sellIdx = buyIdx;
    } else {
      let price = sellVal - buyVal;
      profit = Math.max(profit, price);
    }
  }
  return profit;
};

const prices = [7, 1, 5, 3, 6, 4];
