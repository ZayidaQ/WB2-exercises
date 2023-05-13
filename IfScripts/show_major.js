/*

    Author: Zhayida Haishan

    Description: This script looks up the students major code, and display the name
    of the major and the location of the departments office.

*/

// ------- Show major ------- //

"use sprict";

// input
let studentName = "Betty";
let studentMajor = "BIOL";
let nameOfMajor;
let departmentLocation;

// calculation
if (studentMajor == "BIOL"){
    nameOfMajor = "Biology";
    departmentLocation = "Science Bldg, Room 310";
}
else if (studentMajor == "CSCI"){
    nameOfMajor = "Computer Science";
    departmentLocation = "Sheppared Hall, Room 314";
}
else if (studentMajor == "ENG"){
    nameOfMajor = "English";
    departmentLocation = "Kerr Hall, Room 201";
}
else if (studentMajor == "HIST"){
    nameOfMajor = "History";
    departmentLocation = "Kerr Hall, Room 114";
}
else if (studentMajor == "MKT"){
    nameOfMajor = "Marketing";
    departmentLocation = "Westly Hall, Room 310";
}
else {
    nameOfMajor = "<unknown>";
    departmentLocation = "<unknown>";
};

// output
console.log(`Student: ${studentName}`)
console.log(`Major: ${nameOfMajor}`)
console.log(`Advising Location: ${departmentLocation}`)


// Running
/*

    Student: Betty
    Major: Biology
    Advising Location: Science Bldg, Room 310

*/