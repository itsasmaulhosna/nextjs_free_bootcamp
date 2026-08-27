let price = 500;
let quantity = 5;
console.log(`Total price:${price * quantity} taka\n pay the price to get more`);
//  function
function getDiscount(price) {
  return price * 0.1;
}
console.log(
  `You saved: ${getDiscount(price)}taka\nYour total bill ${price * quantity - getDiscount(price)} taka`,
);
// stock
let stock = 1;
console.log(`Status: ${stock > 0 ? 'In stock' + ' ' + stock : 'Out of stcok'}`);
