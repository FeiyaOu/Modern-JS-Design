//Exporting module
console.log('Exporting module');

// console.log('Start fetching');

// await fetch('https://jsonplaceholder.typicode.com/posts');

// console.log('Finish fetching');

const shippingCost = 10;
const cart = [];

const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
};

const totalPrice = 239;
const totalQuantity = 20;

export { addToCart, totalPrice, totalQuantity as tq, cart };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity * 3} ${product} has been added to the cart`);
}

//////////////////
//module pattern; example with IIFE function
// const getOrder = (function () {
//   const shippingCost = 10;
//   const cart = [];
//   const totalPrice = 234;
//   const totalQuantity = 20;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to the cart`);
//   };
//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} has been ordered to the supplier`);
//   };

//   return { cart, totalPrice, totalQuantity, addToCart };
// })();

// const orderInfo = getOrder();
// orderInfo.addToCart('shoes', 2);

// orderInfo.addToCart('hats', 4);

// console.log(orderInfo);
// console.log(orderInfo.cart);
// console.log(orderInfo.shippingCost);
