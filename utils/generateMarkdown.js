// NEEDED SO WE CAN ADD THE CODE BLOCK SECTIONS IN THE README
const backticks = "```"
// OTHER VARIABLES
var licenseStatus = false
var githubLicense = ``

// RENDERING THE BADGE AT THE TOP OR LEAVING IT EMPTY IF CHOOSING "NONE"
function renderLicenseBadge(license) {
  if (license == "none") {
    return githubLicense = ""
  } else {
    licenseStatus = true
    renderLicenseLink(license)
  }
}

// CREATING THE LINK FOR THE BADGE
function renderLicenseLink(license) {
  let licenseLink = `https://img.shields.io/badge/license-${license}-green`
  githubLicense = `![Github License](${licenseLink})`
  renderLicenseSection(license);
  return githubLicense
}

// FILLING OUT THE LICENSE SECTION
function renderLicenseSection(license) {
  if (licenseStatus) {
    return licenseSection = `This project is licensed under the ${license} license.`
  } else {
    return licenseSection = `This project is using no license.`
  }
}

// FUNCTION TO GENERATE THE README CONTENTS
function generateMarkdown({ github, email, license, title, description, install, usage, contributions, testing }) {
  renderLicenseBadge(license);
  renderLicenseSection(license);
  return `# **${title}**
  ${githubLicense}
  
  
  ## **Description**
  
  ${description}
  
  ---
  
  ## **Table of Contents**
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [License](#license)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ---
  
  ## **Installation**
  
  To install the needed dependencies, run the following commands:
  
  ${backticks}
  ${install} 
  ${backticks}
  
  ---
  
  ## **Usage**
  
  ${usage}
  
  ---
  
  ## **License**
  
  ${licenseSection}
  
  ---
  
  ## **Contributing**
  
  ${contributions}
  
  ---
  
  ## **Tests**
  
  To test the project, run the following commands:
  
  ${backticks}
  ${testing}
  ${backticks}
  
  ---
  
  ## **Questions**
  
  If you have any questions about the project or repo, contact me directly at ${email} or open an issue on the repo. You can find my github profile with this project and others at [github.com/${github}](https://github.com/${github}/)
  `;
}

// EXPORTING ALL THE FUNCTIONS ON THIS PAGE TO BE USED ON index.js
module.exports = {
    generateMarkdown,
    renderLicenseBadge,
    renderLicenseLink,
    renderLicenseSection,
};
