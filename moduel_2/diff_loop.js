// for of,,for in
let techstack = ['js', 'ts', 'react', 'node', 'nextjs'];
for (let tech of techstack) {
  console.log('Learning', tech);
}

let obj = {
  name: 'Maya',
  age: 22,
  address: 'Gazipur',
};
for (let ele in obj) {
  console.log(ele, '->', obj[ele]);
}

// break
let marks = 50;
for (let i = marks; i < 100; i++) {
  if (i > 60) {
    break;
  }
  console.log(i);
}

// continue
for (i = 1; i < 15; i++) {
  if (i % 2 != 0) {
    continue;
  }
  console.log(i);
}
