/*

    Author: Zhayida Haishan

    Description: This JS calculates the federal tax based on the values of annual
    gross income and a filing status.

*/

// ------- Taxes ------- //

"use sprict";

// input
let personsStatus = "single";

let hourlyPay = 10;
let hoursWorked = 45;

// calculation
let grossPay = hoursWorked * hourlyPay;
let annualHour = hoursWorked * 52;
let overTimeRate = hourlyPay * 1.5;

if (hoursWorked > 40){
    let overTimeHour = hoursWorked - 40;
    grossPay = (hourlyPay * 40) + (overTimeHour * overTimeRate);
}

let annualGrossPay = grossPay * 52;

// input
let taxRate;

// calculation
if (personsStatus == "single") {
    if (annualGrossPay >= 75000){
        taxRate = 0.20;
    }
    else if (annualGrossPay >= 25000) {
        taxRate = 0.15
    }
    else if (annualGrossPay >= 12000) {
        taxRate = 0.10
    }
    else if (annualGrossPay < 12000) {
        taxRate = 0.05
    }
}

if (personsStatus == "joint"){
    if (annualGrossPay >= 75000){
        taxRate = 0.20;
    }
    else if (annualGrossPay >= 25000) {
        taxRate = 0.11
    }
    else if (annualGrossPay >= 12000) {
        taxRate = 0.06
    }
    else if (annualGrossPay < 12000) {
        taxRate = 0.00
    }
}

let taxWithheldWeek = grossPay * taxRate;
let taxWithheldAnnual = annualGrossPay * taxRate;
let netPayWeek = grossPay - taxWithheldWeek;
let netPayYear = annualGrossPay - taxWithheldAnnual;

personsStatus = personsStatus.charAt(0).toUpperCase() + personsStatus.slice(1)

// Output
console.log(`You worked $${hoursWorked.toFixed(2)} hours this period`);
console.log(`Because you earn $${hourlyPay.toFixed(2)} per hour, your gross pay is $${grossPay.toFixed(2)}`);
console.log(`Your filing status is ${personsStatus} `);
console.log(`Your tax withholdings this period is $${taxWithheldWeek.toFixed(2)}`);
console.log(`Your net pay is $${netPayWeek.toFixed(2)}`);

