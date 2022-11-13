// VARIABLES FOR THE FUNCTIONS AND DEPENDENCIES
const inquirer = require('inquirer');
const genMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const licenseChoices = ['MIT', 'Apache 2.0', 'GPLv3', 'ISC', 'none']

// FUNCTION TO KICK OFF THE README GENERATION (SEE generateMarkdown.js for the rest)
const writeToFile = (data) => 
genMarkdown.generateMarkdown(data);

// INITIALIZATION FUNCTION
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
      message: 'Give a brief description of how people can contribute to your project: ',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'What commands should be run to run tests on the project?',
    },
  ])
  .then((data) => {
    const readmeContent = writeToFile(data);
    fs.writeFile('./output/README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );

  });
}

// RUNNING THE PROGRAM 
init();