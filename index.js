const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user

function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the name of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Please enter a description of your project.",
            name: "description"
        },
        {
            type: "input",
            message: "What are the  installation instructions for this project. Write NONE if no instructions?",
            name: "installation"
        },
        {
            type: "input",
            message: "How woud you like your application to be used?",
            name: "usage"
        },
        {
            type: "input",
            message: "Who contributed on this project?",
            name: "contribution"
        },
        {
            type: "input",
            message: "what are the Test Instructions?",
            name: "test"
        },
        {
            type: "checkbox",
            message: "Please select a license.?",
            choices: [
                "Appache",
                "MIT",
                "ISC",
                "GNU GPLv3"
            ],
            name: "license"
        },
        {
            type: "input",
            message: "Whose Credit is this work?",
            name: "credit"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
            },
        {
            type: "input",
            message: "What is your email address",
            name: "email"
        },
    ]); 
}



// function to initialize program
async function init() {
    try {
        const response = await promptUser();
   
        console.log(response)
        const readMe = generateMarkdown(response);
        console.log(readMe)
//   
        await writeFileAsync("README.md", readMe);
        console.log("Success!");

    } catch (err) {
        console.log(err);
    }
}

// function call to initialize program
init();