let products = [
  { title: 'Mouse', price: 300, inStock: false },
  { title: 'Battery', price: 5600, inStock: true },
  { title: 'Laptop', price: 679000, inStock: true },
  { title: 'Mobile', price: 4688, inStock: false },
];
let totalPrice = products.reduce((acc, current) => {
  return (acc += current.price);
}, 0);
console.log(totalPrice);

// sort
let sorted = [10, 20, 330, 478, 973, 477].sort((a, b) => a - b);
console.log(sorted);

let item = products.sort((a, b) => a.price - b.price);
console.log(item);

let estItem = products
  .filter((p) => p.inStock == true)
  .reduce((acc, current) => {
    return (acc += current.price);
  }, 0);
console.log(estItem);
