//Importing module

import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

console.log('Importing module');
// alert('importing');

addToCart('apple', 10);

console.log(price, tq);

///////////////
//another way

// import * as ShoppingCart from './shoppingCart.js';

// console.log('Importing module');

// ShoppingCart.addToCart('orange', 19);

// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);
///////////////////
// default export
// import add, { cart } from './shoppingCart.js';

// add('pineapple', 9);
// add('dragonFruit', 6);
// add('strawberry', 3);

// console.log(cart);

/////////////
//top level await
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// const getData = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();

//   return { title: data.at(-1).title, body: data.at(-1).body };
// };

// const resData1 = getData();
// resData1.then(res1 => console.log(res1));
// console.log(resData1);

// const resData2 = await getData();
// console.log(resData2);
////////////////
//module pattern
const orderInfo = (function () {
  const shippingCost = 10;
  const cart = [];
  let totalPrice = 290;
  const totalQuantity = 20;

  const addToCart = function (product, quantity) {
    totalPrice++;
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to the cart,${totalPrice}`);
  };
  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} has been ordered to the supplier`);
  };

  return { cart, totalPrice, totalQuantity, addToCart };
})();

orderInfo.addToCart('shoes', 2);

orderInfo.addToCart('hats', 4);

console.log(orderInfo);
console.log(orderInfo.cart);
console.log(orderInfo.shippingCost);

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';
const test1 = {
  person: [{ good: 1 }, { evil: 2 }],
  clothes: { purple: 2 },
};

const test2 = test1;
const test3 = Object.assign({}, test1);
const test4 = cloneDeep(test1);
test1.clothes.purple = 6;

console.log(test2);
console.log(test3);
console.log(test4);

////////////////////
//replaced by "start":"parcel index.html" in package.json in "script"
// "test": "echo \"Error: no test specified\" && exit 1"
console.log('Hi');

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting},${this.name}`);
  }
}
const peter = new Person('peter');
Promise.resolve('TEST').then(x => console.log(x));
import 'core-js/stable';
import 'regenerator-runtime/runtime';
console.log('Good');
