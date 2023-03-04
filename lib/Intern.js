//require used to bring the employee module into this file
const Employee = require("./Employee");

//extending the employee class to allow for some additional properties and methods
class Intern extends Employee {

     //as we want this method to overwrite the getRole() from the Employee class it needs to be entered here before the constructor function
    getRole(){
        return 'Intern'
    }

    //addtion of school property
    constructor (name, id, email, school){

        //keyword super used to 'construct' the employee object before adding on the github property
        super(name, id, email);
        this.school = school;
    }

    //addition of method to blueprint
    getSchool(){
        return this.school
    }

}

//export of module to be used in index.js
module.exports = Intern