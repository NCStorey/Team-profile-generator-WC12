# Team-profile-generator-WC12
Repo to hold code for WC12 - CLI to generate a team profile based on user input.

## Description

Using the starter code provided by Trilogy Education we were tasked with creating a CLI application to generate the HTML for a webpage that would display information on a team made up of a single Team Manager with an indermined amount of engineers and interns. Each class would have some arguments shared amoung them and some that were specific to that role.

The tests for the code were provided and part of the acceptance criteria stated that all tests passed.

<img src="./screenshots/Screenshot 2023-03-06 125141.png" alt="screenshot showing all tests has passed" width="600">

This was a great exersise in practicing the use of npm modules and classes.

The result could be used by a team manager to visually display their Team Members and further development could mean the addiition of task/skills/experiance.

## Installation

This application uses node and several npm packages - 

NPM packages 
- fs
- inquirer - please note that this is intentionally set to a previous version to allow the use of require over import.
- jest
- path


## Usage

The application is intended to be used as follows:

1) First initiate the application using the 'node index.js' command in the terminal.
2) Enter the requested information for the Team Manager.
3) You will then be given a choice on whether you would like to add a new team member or complete the team. The user would continue to build the team using the options given until they had entered all relevant information and team members.

<img src="./screenshots/Screenshot 2023-03-06 130048.png" alt="screenshot showing sample questions and answers" width="400">

4) The completion of each block of question triggers the creation of an object which is then pushed onto an array.
5) Once the user has completed entering the information they will select the 'Finish building the team' option. This will break the recursive function and call the render function using the array of objects created in the previous steps.
6) A html file is written to the OUTPUT directory which when opened will contain all of the entered information.

<img src="./screenshots/Screenshot 2023-03-06 130118.png" alt="screenshot showing sample html page generated" width="400">


## Credits

The started code was provided by Trilogy Education.

## License

Please refer to the repo for the license information
---


## Tests

There are a series of tests written for this code (see the tests directory). They were provided by Trilogy Education and used to guide the creation of the classes in the lib directory. The tests are evaluated using the jest npm module.