//exporting a variable while defining:
import { value, studentName } from "./sample.mjs";
console.log(value)
console.log(studentName)

//Exporting a multiple variables after defining:
import {kg, companyName} from './sample.mjs';
console.log(kg)
console.log(companyName)


//exporting a multiple functions while defining 
import {sum, sub} from './sample.mjs';
console.log(sum(20, 50))
console.log(sub(50, 20))

//exporting multiple functions after defining:
import { multiplication, division } from "./sample.mjs";
console.log(multiplication(10, 3))
console.log(division(50, 5))

//Exporting multiple classes while defining:
import { StudentDetails, CarDetails } from "./sample.mjs";
const newStudentDetails = new StudentDetails("thirupathi", 25)
console.log(newStudentDetails)
console.log(newStudentDetails.name)
console.log(newStudentDetails.age)

const newCarDetails = new CarDetails("TATA NEXON EV", "250KM-350KM")
console.log(newCarDetails)
console.log(newCarDetails.name)
console.log(newCarDetails.millage)
