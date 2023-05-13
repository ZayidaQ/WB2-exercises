/*

    Author: Zhayida Haishan

    Description: 

*/

// ------- title here ------- //

"use sprict";

// input
let studentName = "Betty";
let studentMajor = "ENG";
let nameOfMajor;
let departmentLocation;

// calculation
switch (studentMajor){
    case "BIOL":
        nameOfMajor = "Biology";
        departmentLocation = "Science Bldg, Room 310";
        break;

    case "CSCI":
        nameOfMajor = "Computer Science";
        departmentLocation = "Sheppared Hall, Room 314";
        break;

    case "ENG":
        nameOfMajor = "English";
        departmentLocation = "Kerr Hall, Room 201";
        break;

    case "HIST":
        nameOfMajor = "History";
        departmentLocation = "Kerr Hall, Room 114";
        break;

    case "MKT":
        nameOfMajor = "Marketing";
        departmentLocation = "Westly Hall, Room 310";
        break;

    default:
        nameOfMajor = "<unknown>";
        departmentLocation = "<unknown>";

}


// output
console.log(`Student: ${studentName}`)
console.log(`Major: ${nameOfMajor}`)
console.log(`Advising Location: ${departmentLocation}`)

// Running
/*

    Student: Betty
    Major: English
    Advising Location: Kerr Hall, Room 201

*/