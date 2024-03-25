let x = 8;
// post increment

let postIncrement:number = x++;
console.log("post increment value:", postIncrement);
console.log("value after post increment:", x);

 // pre increment

let preIncrement:number = ++x;
console.log("pre increment value:", preIncrement);
console.log("value after pre increment:", x);

// post decrement

let postDecrement:number = x--;
console.log("post decrement value:", postDecrement);
console.log("value after post decrement:", x);

// pre decrement

let preDecrement:number = --x;
console.log("pre decrement value:", preDecrement);
console.log("value after pre decrement:", x);

 let a:number = 5;
 let b:number = 2;
 let c:number;
 c= ++a + a++ + --b + b-- + a + b++ + b;
 console.log(c);

let w:number = 10;
let y:number = 8;
let z:number;
z= ++w + w++ + --y + y-- + w + y++ + y;
console.log(z);
