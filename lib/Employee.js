//Creation of employee class - this will act as the base blueprint for the rest of the employees

class Employee{

    //constructor function used with 3 arguements
    constructor(name, id, email){

        //this keyword used to ensure it is refering to the one instance of object creation
        this.name = name
        this.id = id
        this.email = email;
    }

        //methods added to return values
        getName(){
            return this.name
        }
        getId(){
            return this.id
        }
        getEmail(){
            return this.email
        }
        getRole(){
            return "Employee"
        }
    
}

//export of module to allow it to be used elsewhere
module.exports = Employee