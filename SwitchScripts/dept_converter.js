/*

    Author: Zhayida Haishan

    Description: it uses switch statemnt to determine and print a
    department name based on a department code.

*/

// ------- title here ------- //

"use sprict";

// input
let deptCode = 12;
let deptName;

// calculation
switch (deptCode){
    case 1:
        deptName = "Marketing";
        break;

    case 5:
        deptName = "Human Resources";
        break;

    case 10:
        deptName = "Accounting";
        break;

    case 12:
        deptName = "Legal";
        break;

    case 18:
        deptName = "IT";
        break;
        
    case 20:
        deptName = "Customer Relations";
        break;
}

// output
console.log(`Department code: ${deptCode}`)
console.log(`Department name: ${deptName}`)

// Running
/*

    Department code: 12
    Department name: Legal

*/