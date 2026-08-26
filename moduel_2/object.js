let user = {
  name: 'Maya',
  age: 22,
  address: 'Dhaka',
};
delete user.address;
// console.log(user['name']);
user.address = 'Rajshahi';
user.address = {
  city: 'Rajshahi',
  area: 'mohanogar',
};
console.log(Object.entries(user));
