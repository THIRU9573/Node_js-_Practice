//Exporting a variable while defining
/*
import studentName from './sample.mjs'
console.log(studentName)
*/

//Exporting a variable after defining:
/*
import value from "./sample.mjs";
console.log(value)
*/

//Exporting a value or an expression:
/*
import result from './sample.mjs'
console.log(result)
*/

//exporting a function while defining 
/*
import sum from './sample.mjs';
console.log(sum(10, 20))
*/

//exporting a function after defining:
/*
import sum1 from './sample.mjs';
console.log(sum(10, 25))
*/


//Exporting class while defining:
/*
import StudentDetails from './sample.mjs'

const newStudentDetails  =  new StudentDetails("thirupathi", "A")
console.log(newStudentDetails)
console.log(newStudentDetails.name)
console.log(newStudentDetails.grade)
*/


//Exporting a class after defining:
import CarDetails from "../sample.mjs";
const newCarDetails = new CarDetails("TATA Nexon EV", "250KM - 350KM")
console.log(newCarDetails)
console.log(newCarDetails.name)
console.log(newCarDetails.millage)

