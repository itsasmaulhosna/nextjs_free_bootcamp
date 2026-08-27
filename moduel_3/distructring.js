const student = {
  name: 'Maya',
  age: 22,
  address: 'Gazipur',
};
// old
const oldName = student.name;

// new
const { age, address, name } = student;
console.log(name);

const student1 = {
  name: 'Zain',
  age: 2,
  address: {
    city: 'Dhaka',
    zip: 2345,
    nation: 'Bangladeshi',
  },
};

const {
  name: stdName,
  address: { city, zip },
} = student1;
console.log(stdName, address);

// array
const arr = ['Red', 'Pink', 'Black', 'Blue'];
const [, , third] = arr;
console.log(third);
