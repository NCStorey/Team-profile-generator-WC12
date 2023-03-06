//'importing' all of the created modules in lib
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//'importing' all of the external modules needed
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//variables given in starter code which are used in the fs write file function to create the html
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");

//empty array to store the team member objects created using the information gathered with inquirer and also the class blueprints
let teamMemberArray = []

//team manager question - only asked on initialisation of programme
const questionsTM = [
    {
        type: 'input',
        message: 'Please enter the Team Managers name',
        name: 'TMname',
        validate: (input) => {
            if (input == ''){
            return 'Oops looks like you didnt enter anything'
            }
            else {return true}}
    },

    {
        type: 'input',
        message: 'Please enter the Team Managers Employee ID',
        name: 'TMid',
        validate: (input) => {
            if (input == ''){
            return 'Oops looks like you didnt enter anything'
            }
            else {return true}}
    },

    {
        type: 'input',
        message: 'Please enter the Team Managers email address',
        name: 'TMemail',
        validate: (input) => {
            if (input == ''){
            return 'Oops looks like you didnt enter anything'
            }
            else {return true}}
    },

    {
        type: 'input',
        message: 'Please enter the Team Managers Office number',
        name: 'TMofficeNumber',
        validate: (input) => {
            if (input == ''){
            return 'Oops looks like you didnt enter anything'
            }
            else {return true}}
    }


]

//this is a list question whose answer determines the switch case for building the team
const buildOptions = [
{
    type: 'list',
    message: 'Please select one of the following options',
    choices: ['Add an Engineer', 'Add an intern', 'Finish building the team'],
    default: 'Finish building the team',
    name: 'buildOptions',
}]

//questions for Engineers specifically
const questionsEngineer = [

    {
        type: 'input',
        message: 'Please enter the Engineers name',
        name: 'engineerName',
        default: 'Engineer',
    },

    {
        type: 'input',
        message: 'Please enter the engineers ID',
        name: 'engineerID',
        validate: (input) => {
            if (input == ''){
            return 'Oops looks like you didnt enter anything'
            }
            else {return true}}
    },

    {
        type: 'input',
        message: 'Please enter the Engineers email',
        name: 'engineerEmail',
        validate: (input) => {
            if (input == ''){
            return 'Oops looks like you didnt enter anything'
            }
            else {return true}}
    },

    {
        type: 'input',
        message: 'Please enter the Engineers GitHub Username',
        name: 'engineerGithub',
        validate: (input) => {
            if (input == ''){
            return 'Oops looks like you didnt enter anything'
            }
            else {return true}}
    },
]

//questions for Interns specifically
const questionsIntern = [

    {
        type: 'input',
        message: 'Please enter the Interns name',
        name: 'internName',
        default: 'Intern',
    },

    {
        type: 'input',
        message: 'Please enter the interns ID',
        name: 'internID',
        validate: (input) => {
            if (input == ''){
            return 'Oops looks like you didnt enter anything'
            }
            else {return true}}
    },

    {
        type: 'input',
        message: 'Please enter the interns email',
        name: 'internEmail',
        validate: (input) => {
            if (input == ''){
            return 'Oops looks like you didnt enter anything'
            }
            else {return true}}
    },

    {
        type: 'input',
        message: 'Please enter the interns school',
        name: 'internSchool',
        validate: (input) => {
            if (input == ''){
            return 'Oops looks like you didnt enter anything'
            }
            else {return true}}
    },

]

//initial prompt - this gathers the Team Manager information
inquirer
.prompt(questionsTM)
.then(answers => {
    

    //variables to hold manager information
    const TMname = answers.TMname;
    const TMid = answers.TMid;
    const TMemail = answers.TMemail;
    const TMofficeNumber = answers.TMofficeNumber;
    //creation of a new manager using the manager blueprint
    const manager = new Manager(TMname, TMid, TMemail, TMofficeNumber);
    //store the information in an array for use in the render function
    teamMemberArray.push(manager);



    //the manager information only needs to be gathered once but the size of the team is indetermined therefore the following code is placed into a recursive function. 
    const buildTeam = function (){
    
    //this will give the user a series of prompts around who they would like to add to their team next or if they would like to complete the team.
    inquirer.prompt(buildOptions)
    .then(answers => {

    //using the answer given they will trigger a switch case which will then either ask further questions or complete the build
    let buildOption = answers.buildOptions

    switch (buildOption){

        case 'Add an Engineer':
        
        //prompts further questions to gather information to make an Engineer ussing the class in the lib
        inquirer.prompt(questionsEngineer)
        .then(answers => {
            
            let EName = answers.engineerName
            let EID = answers.engineerID
            let EEmail = answers.engineerEmail
            let EGithub = answers.engineerGithub

            //creates new Engineer object
            let engineer = new Engineer (EName, EID, EEmail, EGithub);

            //pushes the newly created object onto the array
            teamMemberArray.push(engineer);
            

            //recursive function - function is called again to allow the addition of more team members or team completion
            buildTeam()
        })

        break;

        case 'Add an intern':
        
        //prompts further questions to gather information to make an Intern ussing the class in the lib
        inquirer.prompt(questionsIntern)
        .then(answers => {
            
            let IName = answers.internName
            let IID = answers.internID
            let IEmail = answers.internEmail
            let ISchool = answers.internSchool

            //creates new Intern object
            let intern = new Intern (IName, IID, IEmail, ISchool)

            //pushes the newly created object onto the array
            teamMemberArray.push(intern);
            

            //recursive function - function is called again to allow the addition of more team members or team completion
            buildTeam()

        })

        break;

        //recursive function break here - to stop infinite looping
        case 'Finish building the team':
        
        console.log('Team Building complete')

        //function provided in starter code - this is used to render the HTML to be used in the fs write file function. it takes the teamMemberArray as an arguement. saved into a variable to be used in the fs function below
        const HTMLinfo = render(teamMemberArray)

        //fs writeFile function - this will create a new html file (or overwrite the old one), and enter it into the OUTPUT folder in the repo
        fs.writeFile(outputPath, HTMLinfo, (error) => {

            //fs error catching
            return error
            ? console.log(error)
            : console.log('\nSuccess - Happy Coding!\n----------------------------------------')
        })

        break;

        //default case for switch case - added as needed to complete the switch case but the code shouldnt ever get here
        default:
        console.log('Not sure how this happened?')

    }


    })}
    
    //function defined above called here for the initial time.
    buildTeam()
})


//error catching for the inquirer module
.catch((error) => {
    if (error.isTtyError) {
        console.log('Could not be rendered in the current environment')
    } else {
        console.log('Something else went wrong')
    }
})


