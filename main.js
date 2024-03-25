"use strict";
let x = 8;
// post increment
let postIncrement = x++;
console.log("post increment value:", postIncrement);
console.log("value after post increment:", x);
// pre increment
let preIncrement = ++x;
console.log("pre increment value:", preIncrement);
console.log("value after pre increment:", x);
// post decrement
let postDecrement = x--;
console.log("post decrement value:", postDecrement);
console.log("value after post decrement:", x);
// pre decrement
let preDecrement = --x;
console.log("pre decrement value:", preDecrement);
console.log("value after pre decrement:", x);
let a = 5;
let b = 2;
let c;
c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c);
let w = 10;
let y = 8;
let z;
z = ++w + w++ + --y + y-- + w + y++ + y;
console.log(z);
