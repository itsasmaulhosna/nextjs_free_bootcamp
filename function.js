function total(price, quantity) {
  const totalPrice = price * quantity;
  return totalPrice;
}
const spend = total(10, 5);
const save = 200 - spend;
console.log(spend);
console.log(save);

function greet(name) {
  return `Hello, ${name}!`;
}
const greeting = greet('Alice');
console.log(greeting);
