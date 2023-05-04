/*

    Author: Zhayida Haishan

    Description: page 92

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
    grossPay = (payRate * 40) + (overTimeHour * overTimeRate);
}

let annualGrossPay = grossPay * 52;

// input
let taxRate;

// calculation
if (personsStatus == "single"){
    if (annualGrossPay < 12000){
        taxRate = 0.05;
    }
    else if (annualGrossPay < 25000) {
        taxRate = 0.10
    }
}

let taxWithheldWeek = grossPay * taxRate;
let taxWithheldAnnual = annualGrossIncome * taxRate;
let netPayWeek = grossPay - taxWithheldWeek;
let netPayYear = annualGrossIncome - taxWithheldAnnual;

// output

// console.log()

// "use sprict";

// // input
// let payRate = 17.30;
// let hoursWorked = 45;

// // calculation
// if (hoursWorked > 40) {
//     let grossPay = 17.30 * 40;
//     let overTime = hoursWorked - 5;
//     let overTimePay = (payRate * 1.5) * overTime;
//     grossPay = grossPay + overTimePay;

//     // output
//     console.log(
//       "We worked longer then 40 hours, so the grosspay is $" + grossPay.toFixed(2));
// }

// else {
//     grossPay =  hoursWorked * payRate;

//     // output
//     console.log("The gross pay is $" + grossPay.toFixed(2));
// }