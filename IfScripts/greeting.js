/*

    Author: Zhayida Haishan

    Description: this script detects time and depending on the time, 
    it outputs message that falls into that timeline.

*/

// ------- Greeting ------- //

"use sprict";

// input
let currentTime = 10;
let message;

// calculation
if (currentTime < 11){
    message = "Good Morning!"
}
else if (currentTime < 17){
    message = "Good Day!"
}
else {
    message = "Good Evening!"
}
    
// output
console.log(message);

// Running
/*

    until 10am >> Good Morning!
    10 - 16 >> Good Day!
    17 and later >> Good Evening!

*/