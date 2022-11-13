const backticks = "```"

function renderLicenseBadge(license) {
  if (license == "none") {
    return githubLicense = ""
  } else {
    renderLicenseLink(license)
  }
}

function renderLicenseLink(license) {
  let licenseLink = `https://img.shields.io/badge/license-${license}-green`
  return renderLicenseSection(licenseLink);
}


function renderLicenseSection(license) {
  return githubLicense = `![Github License](${license})`
}


function generateMarkdown({ github, email, license, title, description, install, usage, contributions, testing }) {
  renderLicenseBadge(license);
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
  
  This project is licensed under the ${license} license.
  
  ---
  
  ## **Contributions**
  
  ${contributions}
  
  ---
  
  ## **Testing**
  
  To test the project, run the following commands:
  
  ${backticks}
  ${testing}
  ${backticks}
  
  ---
  
  ## **Questions**
  
  If you have any questions about the project or repo, contact me directly at ${email} or open an issue on the repo. You can find my github profile with this project and others at [github.com/${github}](https://github.com/${github}/)
  `;
}

module.exports = {
    generateMarkdown,
    renderLicenseBadge,
    renderLicenseLink,
    renderLicenseSection,
};
