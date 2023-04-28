/*

    Author: Zhayida

*/

// ------- Distance between (x1,y1) and (x2.y2) ------- // 

"use sprict";

// input
let x1 = 3;
let x2 = 2;
let y1 = 4;
let y2 = 2;

// calculation
let distance = Math.sqrt( ( ( x2 - x1 ) **2 ) + ( ( y2 - y1 ) ** 2) );

// output
console.log( "The distance between (x1,y1) and (x2.y2) is " + distance );

// or

console.log( "The distance between (x1,y1) and (x2.y2) is " + distance.toFixed( 2 ) );


// Running
/*

    The distance between (x1,y1) and (x2.y2) is 2.23606797749979
    The distance between (x1,y1) and (x2.y2) is 2.24

*/
