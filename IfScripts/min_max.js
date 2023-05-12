/*

    Author: Zhayida Haishan

    Description: this JS displays both the smallest of the three
    numbers and then the  largest of three numbers.

*/

// ------- Min / Max displayer ------- //

"use sprict";

// input
let a = 1;
let b = 2;
let c = 5;

let maxValue;
let minValue;

// calculation
if ( a > b && a > c && b > c ){
    maxValue = a;
    minValue = c;
}
else if (a > b && a > c && c > b){
    maxValue = a;
    minValue = b;
}
else if ( b > c && b > a && c > a ){
    maxValue = b;
    minValue = a;
}
else if ( b > c && b > a && a > c ){
    maxValue = b;
    minValue = c;
}
else if ( c > a && c > b && a > b ){
    maxValue = c;
    minValue = b;
}
else if ( c > a && c > b && b > a ){
    maxValue = c;
    minValue = a;
}
else {
    console.log( "undifined" )
};


// output
console.log(`The max value is ${maxValue} and the minimum value is ${minValue}`)