let fruits = ['Mango', 'Banana', 'Lichi', 'Annar', 'Jackfruite'];
let newFruits = fruits.forEach((f, indx) => {
  console.log(`${indx} --> ${f}`);
});

// map
let newFruits2 = fruits.map((f) => f.toLocaleLowerCase());
console.log(newFruits2, '\n', fruits);
// filter
let custom = fruits.filter((f) => f.length > 5);
console.log(custom);
// find>1st match
let custom2 = fruits.find((f) => f.length > 5);
console.log(custom2);

// include>check item

let findFr = fruits.includes('Mangos');
console.log(findFr);

// some
const student = [
  { name: 'Maya', marks: 45 },
  { name: 'Taya', marks: 75 },
  { name: 'Jaya', marks: 95 },
  { name: 'Naya', marks: 35 },
];
let studentCheck = student.some((s) => s.marks > 80);
console.log(studentCheck);

let studentCheck2 = student.every((s) => s.marks > 80);
console.log(studentCheck2);
