//require used to bring the employee module into this file
const Employee = require("./Employee");

//extending the employee class to allow for some additional properties and methods
class Engineer extends Employee {

    //as we want this method to overwrite the getRole() from the Employee class it needs to be entered here before the constructor function
    getRole(){
        return 'Engineer'
    }
    //addtion of github property
    constructor (name, id, email, github){
    
        //keyword super used to 'construct' the employee object before adding on the github property
        super(name, id, email);
        this.github = github;
    
}

    //addition of method to blueprint
    getGithub(){
    return this.github
    }
}

//export of module to be used in index.js
module.exports = Engineer