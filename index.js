// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const genMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const licenseChoices = ['MIT', 'Apache 2.0', 'GPLv3', 'ISC', 'none']


// TODO: Create an array of questions for user input
const questions = [];


// TODO: Create a function to write README file
const writeToFile = (data) => 
genMarkdown.generateMarkdown(data);


// TODO: Create a function to initialize app
function init() {
inquirer
  .prompt([
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license do you want to use for this project?',
      choices: licenseChoices,
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a short description of your project: ',
    },
    {
      type: 'input',
      name: 'install',
      message: 'What commands should be run to install the dependencies for this project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Give a brief description of how your project can be used: ',
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'How can people make contributions to your project?',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'What commands should be run to run tests?',
    },
  ])
  .then((data) => {

    // console.log('\n\n-----------\n\n')

    const readmeContent = writeToFile(data);

    fs.writeFile('generated.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );

  });
}

// Function call to initialize app
init();