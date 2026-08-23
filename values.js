// falsy values: false, 0, '', null, undefined, NaN
let x = false; // falsy
const age = '20';
true; // truthy
if (age) {
  console.log('You are an adult.');
} else {
  console.log('You are not an adult.');
}

console.log(age * 0); // NaN
console.log(typeof NaN); // number
