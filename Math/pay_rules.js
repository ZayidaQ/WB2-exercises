/*
Author: Zhayida
*/

"use sprict";

function calculateGrossPay(){
    // input
    let payPerHour = 12.50;
    let hoursWorked = 20;
    //algoritme
    let grossPay = 12.50 * 20;
    // output
    if (grossPay == 250.00)
    {
        console.log('The gross payment is correct')
    }
    else
    {
        console.log('The gross payment is wrong')
    }
}



"use strict";

function calculateGrossPay(_payrate, _hoursworked) 
{
  // Input
  let payrate = _payrate;
  let hoursworked = _hoursworked;
  let grosspay;
  
  // Algoritme

  if (hoursworked > 40) {
    let grosspay =  40 * payrate;
    let overtime = hoursworked - 40;
    let overtimepay = (payrate * 1.5) * overtime;
    grosspay = grosspay + overtimepay;
    // Output

    console.log(
      "We worked longer then 40 hours, so the grosspay is $" + grosspay );
  }
  // Output
  else {
   grosspay =  hoursworked * payrate;

    console.log("The gross pay is $" + grosspay.toFixed(2));
  }
}

calculateGrossPay(12.50,20);
calculateGrossPay(25,40);
calculateGrossPay(17.30,45);