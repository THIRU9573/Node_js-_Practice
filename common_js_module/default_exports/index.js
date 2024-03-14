
//exporting a variable while defining:
// const num = require('./sample.js')



//Exporting a variable after defining:

const value = require('./sample')
console.log(value);




//Exporting a value or an expression:
/*
const result = require('./sample')
console.log(result);
*/


//exporting a function while defining 
/*
const sum = require('./sample');
console.log(sum(2,3));
*/



//exporting a function after defining:
/*
const sum1 = require('./sample');
console.log(sum1(10,20));
*/



//Exporting class while defining:
/*
const StudentDetails = require("./sample");
const studentDetails = new StudentDetails("Thirupathi", 25);
console.log(studentDetails);
console.log(studentDetails.name)
*/


//Exporting a class after defining:
/*
const StudentDetails1 = require('./sample');
const studentDetails1 = new StudentDetails1("Yashwanth", 22, "A");
console.log(studentDetails1);
console.log(studentDetails1.name);
console.log(studentDetails1.grade);
*/





