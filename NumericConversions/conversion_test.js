/*

Author: Zhayida

Description: This script tests various numeric 
conversion techniques.

*/

// ------- Conversion test ------- //

// input
var a = "101.1" ;
var b = "55" ;
var c = "402 Stevens" ;
var d = "Number 5" ;

// calculation using perseInt()
console.log( "parseInt of a is " + parseInt( a ) ) ;
console.log( "parseInt of b is " + parseInt( b ) ) ;
console.log( "parseInt of c is " + parseInt( c ) ) ;
console.log( "parseInt of d is " + parseInt( d ) ) ;

// calculation using perseFloat()
console.log( "parseFloat of a is " + parseFloat( a ) ) ;
console.log( "parseFloat of b is " + parseFloat( b ) ) ;
console.log( "parseFloat of c is " + parseFloat( c ) ) ;
console.log( "parseFloat of d is " + parseFloat( d ) ) ;

// calculation using Number()
console.log( "Number for a is " + Number( a ) ) ;
console.log( "Number for a is " + Number( b ) ) ;
console.log( "Number for a is " + Number( c ) ) ;
console.log( "Number for a is " + Number( d ) ) ;

// calculation using +
console.log( "+ for a is " + +a ) ;
console.log( "+ for b is " + +b ) ;
console.log( "+ for c is " + +c ) ;
console.log( "+ for d is " + +d ) ;

// Running

/*

----- perseInt() -----
parseInt of a is 101
parseInt of b is 55
parseInt of c is 402
parseInt of d is NaN

----- perseFloat() -----
parseFloat of a is 101.1
parseFloat of b is 55
parseFloat of c is 402
parseFloat of d is NaN

----- Number -----
Number for a is 101.1
Number for a is 55
Number for a is NaN
Number for a is NaN

----- + -----
+ for a is 101.1
+ for b is 55
+ for c is NaN
+ for d is NaN

*/