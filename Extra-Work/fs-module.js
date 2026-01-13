//code for  fs module
const os = require('os');

const { add, subtract, multiply, divide } = require('./calculator');
let sum = add(5, 3);
let difference = subtract(10, 4);
let product = multiply(6, 7);
let quotient = divide(20, 5);
console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);