/*
Author: Zhayida
*/

// ------- Tip amount of food ------- //

"use sprict";

// input
let foodBill = 200;
let tippercentage = .18;

// calculation
let tipAmount = foodBill * tippercentage;
let totalAmount = tipAmount + foodBill;

// output
console.log(
    "The Tip on a $" + foodBill + " food bill is $" + tipAmount + " and the total amount is $" + totalAmount
    )

// Running
// The Tip on a $200 food bill is $36 and the total amount is $236