/*

    Author: Zhayida Haishan

    Description: this exercise is for calculating over time

*/

// ------- Pay Rules ------- //

"use sprict";

// input
let payRate = 17.30;
let hoursWorked = 45;

// calculation
if (hoursWorked > 40) {
    let grossPay = 17.30 * 40;
    let overTime = hoursWorked - 5;
    let overTimePay = ( payRate * 1.5 ) * overTime;
    grossPay = grossPay + overTimePay;

    // output
    console.log(
      "We worked longer then 40 hours, so the grosspay is $" + grossPay.toFixed( 2 ) );
}

else {
    grossPay =  hoursWorked * payRate;

    // output
    console.log( "The gross pay is $" + grossPay.toFixed( 2 ) );
}

// Running
/*

    We worked longer then 40 hours, so the grosspay is $1730.00

*/