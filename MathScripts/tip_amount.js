/*
Author: Zhayida
*/

// ------- Tip amount of food -------

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
