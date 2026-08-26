let user = {
  name: 'Maya',
  age: 22,
  address: {
    city: 'Rajshahi',
    area: 'mohanogar',
    zipcode: 3000,
  },
};
// console.log(user['address']['zipcode']);
// console.log(user.address.city);

let entry = Object.entries(user);
// console.log(entry[0][1]);

let student = [
  {
    name: 'A',
    id: 101,
  },
  {
    name: 'B',
    id: 102,
  },
  {
    name: 'C',
    id: 103,
  },
  {
    name: 'D',
    id: 104,
    address: {
      city: 'Rajshahi',
      area: 'mohanogar',
      zipcode: 3000,
      option: ['victroy', 'minhe'],
    },
  },
];
student[3].address.option[0] = 'Preuim';
console.log(student[3].address.option[0]);
