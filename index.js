const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

let teamMemberArray = []
// TODO: Write Code to gather information about the development team members, and render the HTML file.

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

const buildOptions = [
{
    type: 'list',
    message: 'Please select one of the following options',
    choices: ['Add an Engineer', 'Add an intern', 'Finish building the team'],
    default: 'Finish building the team',
    name: 'buildOptions',
}]


const questionsEngineer = [

    {
        type: 'input',
        message: 'Please enter the Engineers name',
        name: 'engineer-name',
        default: 'Engineer',
    }

]

const questionsIntern = [

    {
        type: 'input',
        message: 'Please enter the Interns name',
        name: 'intern-name',
        default: 'Intern',
    }

]

inquirer
.prompt(questionsTM)
.then(answers => {
    console.log(answers)

    //variables to hold manager information
    const TMname = answers.TMname;
    const TMid = answers.TMid;
    const TMemail = answers.TMemail;
    const TMofficeNumber = answers.TMofficeNumber;
    //creation of a new manager using the manager blueprint
    const manager = new Manager(TMname, TMid, TMemail, TMofficeNumber);
    //store the information in an array for use in the render function
    teamMemberArray.push(manager);

    
})
.catch((error) => {
    if (error.isTtyError) {
        console.log('Could not be rendered in the current environment')
    } else {
        console.log('Something else went wrong')
    }
})


// let buildOption = answers.buildOptions

// switch (buildOption){

//     case 'Add an Engineer':
        
//     inquirer.prompt(questionsEngineer)
//     .then(answers => {
//         console.log(answers)
//     })

//     break;

//     case 'Add an intern':
        
//     inquirer.prompt(questionsIntern)
//     .then(answers => {
//         console.log(answers)
//     })

//     break;

//     case 'Finish building the team':
        
//     console.log('you choose finish building the team')
    
//     break;

//     default:
//         console.log('Not sure how this happened?')

// }