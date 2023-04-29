/*

    Author: Zhayida

*/

// ------- Tiles ------- //

"use sprict";

// input
let length = 30
let width = 25

// calculation
let roomDimention = length * width;
let boxNeeded = (roomDimention / 12) * 1.1;

// output
console.log(
    "you will need " + Math.ceil(boxNeeded) + " amount of boxes"
);

// Running
/* 

    You will need 69 amount of boxes 

*/