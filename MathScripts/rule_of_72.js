/*
Author: Zhayida
*/

// ------- Rule of 72 -------

"use sprict";

// input
let interestRate = 3;
let balance = 15000;

// calculation
let years = 72 / interestRate;
let worth = balance * 2;

// output
console.log("At a " + interestRate + "% interest rate, your savings will be worth " + worth.toFixed(2) + " in " + years + " years.")