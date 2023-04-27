/*
Author: Zhayida
*/

// ------- Rentals ------- //

"use sprict";

// input
let amountOfPeople = 38;
let seatPerVan = 15;
let amountOfRent = 250;

// calculation
let amountOfVan = 38 / 15;
amountOfVan = Math.ceil(amountOfVan);

let totalCost = amountOfVan *  amountOfRent;
let costPerPerson = totalCost % amountOfPeople;

costPerPerson = Math.ceil(costPerPerson)

// output
console.log("we will need " + amountOfVan + " vans");
console.log("the total cost for van rental is " + totalCost);
console.log("each person had to pay " + costPerPerson + " for the van rental");