let name = ['Maya', 'Mina', 'Naema', 'Nisa', 'Zain', 'Nirob'];
let number = [1, 2, 3, 4, 5];
console.log(name[3], number[3]);

name.push('Rita');
number.pop(5);
// console.log(name, number);

name.unshift('Zain');
name.shift();
console.log(name);

name.splice(2, 1, 'Mithila');
console.log(name);
