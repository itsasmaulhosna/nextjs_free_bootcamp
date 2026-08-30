function add(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log(add(1, 2, 3, 44, 5, 6, 77, 88, 90));

// object

const obj = {
  name: 'Maya',
  age: 22,
  address: 'Gazipur',
  versity: 'MIST',
};
const { name, ...reamining } = obj;
console.log(reamining);

// array

const arr = [1, 2, 3, 4, 5, 6, 77, 88, 9, 80];
const [, , , ...rest] = arr;
console.log(rest);
