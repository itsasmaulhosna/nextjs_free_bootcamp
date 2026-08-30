let fruits = ['Mango', 'Banana', 'Lichi', 'Annar'];
let newFruits = fruits.forEach((f, indx) => {
  console.log(`${indx} --> ${f}`);
});

// map
let newFruits2 = fruits.map((f) => f.toLocaleLowerCase());
console.log(newFruits2, '\n', fruits);
// filter
let custom = fruits.filter((f) => f.length > 5);
console.log(custom);
