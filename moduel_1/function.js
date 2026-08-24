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

// arrow function
const total2 = (price, quantity = 12) => {
  const totalPrice = price * quantity;
  return totalPrice;
};

const spend2 = total2(10);
const save2 = 200 - spend2;
console.log(spend2);
console.log(save2);

const add = (x, y) => x + y;
const sum = add(5, 3);
console.log(sum);
