// Spread opreator=three dots ...
//let newarr=[...oldarr]
// let newObj={...oldObj}

// array
let cart = ['Apple', 'Banana', 'Mango'];
// cart.push('Egg');
let cart2 = [...cart, 'Egg'];
console.log(cart2);

// object
let personalInfo = {
  name: 'Maya',
  age: 22,
};

let contactInfo = {
  email: 'mayabihere@gmail.com',
  mobile: 1518455465,
};

const fulprofile = { ...personalInfo, ...contactInfo };
console.log(fulprofile);
