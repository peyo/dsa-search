//loop through array
  //i - (i+1) <-- add these to an array Profit

//compare to see what the largest number is using Math.max()

//find i of largest number. i * 2 - 1 = day to buy shares.

let sharePrice = [128, 97, 121, 123, 98, 97, 105]

function maxPrice(sharePrice) {
  let s = sharePrice;

  let profit = [];
  for (let i = 0; i < sharePrice.length; i++) {
    if (s[i + 1]) {
      profit.push(s[i] - (s[i + 1]))
    }
  }
  
  let max = Math.max(...profit);
  let index = profit.findIndex(element => element === max);
  let i = index + 1
  
  return `Max profit is $${max} on day ${i}.`
}

console.log(maxPrice(sharePrice))