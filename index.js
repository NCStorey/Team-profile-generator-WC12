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


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const questions = [
    {
        type: 'input',
        message: 'Please enter the Team Managers name',
        name: 'teamManagers-name',
        validate: (input) => {
            if (input == ''){
            return 'Oops looks like you didnt enter a title. Please enter your project title'
            }
            else {return true}}
    }
]

inquirer
.prompt(questions)
.then(answers => {
    console.log(answers)
})
.catch((error) => {
    if (error.isTtyError) {
        console.log('Could not be rendered in the current environment')
    } else {
        console.log('Something else went wrong')
    }
})
