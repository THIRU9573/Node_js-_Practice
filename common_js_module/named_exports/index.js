//exporting a variable while defining:
/*
const {value, studentName} = require("./sample");
console.log(value);
console.log(studentName)
*/



//Exporting a value or an expression:
/*
const {value, studentName1} = require('./sample');
console.log(value);
console.log(studentName1);
*/




//exporting a multiple functions while defining 
/*
const {add, sub1} = require('./sample');
console.log(add(2,6));
console.log(sub1(8,3));
*/


//exporting multiple functions after defining:
/*
const  {add1, sub2} = require('./sample');
console.log(add1(10,5));
console.log(sub2(8,3));
*/


//Exporting multiple classes while defining:
/*
const {studentDetails, carDetails} = require('./sample');
const newStudentDetails = new studentDetails("Ram", 15, "A");
console.log(newStudentDetails)
console.log(newStudentDetails.name)
console.log(newStudentDetails.age)
console.log(newStudentDetails.grade)

const newCarDetails = new carDetails("TATA Nexon EV", "250km-350km")
console.log(newCarDetails.name);
console.log(newCarDetails.millage);
*/




//Exporting multiple class after defining:
const  {studentDetails1, carDetails1} = require('./sample');
const newStudentDetails1 = new studentDetails1("Thirupathi", 25);
console.log(newStudentDetails1)
console.log(newStudentDetails1.name)
console.log(newStudentDetails1.age)

const newCarDetails1 = new carDetails1("TATA Nexon EV", "250km-350km");
console.log(newCarDetails1)
console.log(newCarDetails1.name)
console.log(newCarDetails1.millage)








