
//exporting a variable while defining:
/* we can export boolean, number, string, null, objects, and arrays */
 
export let value = 5; 
export let studentName = 'Rahul'; 




//Exporting a multiple variables after defining:
let kg = 25;
let companyName = "Techmind";
export {kg, companyName};



//exporting a multiple functions while defining 
/* we can export a multiple functions while defining */

export function sum(num1, num2){
    return num1+num2;
}
export function sub(num1, num2){
    return num1-num2;
}




//exporting multiple functions after defining:
/*we can export multiple functions after defining */
function multiplication(num1, num2){
    return num1*num2
}

function division(num1, num2){
    return num1/num2
}

export {multiplication, division};



//Exporting multiple classes while defining:
/* we can export a class while defining */
export class StudentDetails {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
export class CarDetails {
    constructor(name, millage){
        this.name = name;
        this.millage = millage;
    }
}




//Exporting a class after defining:
/*we can export a class after defining */





