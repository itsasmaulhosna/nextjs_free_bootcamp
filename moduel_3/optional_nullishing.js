let user = {
  name: 'Maya',
  age: 22,
  address: {
    city: 'Faridpur',
  },
};

let user2 = {
  name: 'Mita',
  age: 35,
};
// optional chain>?
console.log(user2?.address?.city);
console.log(user.address.city);
// nullishing collesing
console.log(user2?.address?.city ?? 'Dhaka');
