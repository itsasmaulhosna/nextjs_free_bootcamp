let age = 20;
if (age >= 18) {
  console.log('You are an adult.');
} else {
  console.log('You are not an adult.');
}
let score = 85;
if (score >= 90 && score <= 100) {
  console.log('You got an A+');
} else if (score >= 80 && score < 90) {
  console.log('You got a B.');
} else if (score >= 70 && score < 80) {
  console.log('You got a C.');
} else if (score >= 60 && score < 70) {
  console.log('You got a D.');
} else {
  console.log('You got an F.');
}

switch (score) {
  case 90:
    console.log('You got an A+');
    break;
  case 80:
    console.log('You got a B.');
    break;
  default:
    console.log('You got an F.');
}

// ternary operator
const result = age >= 18 ? 'You are an adult.' : 'You are not an adult.';
console.log(result);
