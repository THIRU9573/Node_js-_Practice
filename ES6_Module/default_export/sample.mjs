
//exporting a variable while defining:
/* we cannot export boolean, number, string, null, objects, and arrays */
/* exports default let studentName = 'Rahul'; */


//Exporting a variable after defining:
/*
let value = 5;
export default value;
*/



//Exporting a value or an expression:
/* we can exporting a value or an expression directly */
/*export default 5*3; */




//exporting a function while defining 
/* we can export a function while defining */
/*
export default function(num1, num2) {
    return num1+num2;
}
*/




//exporting a function after defining:
/*we can export a function after defining */

/*
function sum1(num1, num2){
    return num1+num2
}
export default sum1;
*/



//Exporting class while defining:
/* we can export a class while defining */
/*
export default class StudentDetails {
    constructor(name, grade){
        this.name = name;
        this.grade = grade;
    }
}
*/


//Exporting a class after defining:
/*we can export a class after defining */
class CarDetails {
    constructor(name, millage){
        this.name = name;
        this.millage = millage;
    }
}
export default CarDetails







