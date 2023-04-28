/*

Author: Zhayida

*/

// ------- Federal taxes ------- //

"use sprict";

// input
let federaltaxes = .23;
let salary = 6500;

// calculation
let withheldAmount = salary * federaltaxes;

// output
console.log(
    "While making $" + salary + "amount each month, the federal taxes takes $" + withheldAmount
);

// Running

/*

While making $6500amount each month, the federal taxes takes $1495

*/