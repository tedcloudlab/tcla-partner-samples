const assert = require('assert');
const { orderTotal } = require('../src/index');

const items = [
  { price: 100, quantity: 2 },
  { price: 50, quantity: 1 },
];

assert.strictEqual(orderTotal(items), 250);
console.log('ok - orderTotal');
