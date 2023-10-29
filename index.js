const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
  {
    type: 'input',
    message: 'Enter your project TITLE:',
    name: 'projectTitle'
  },
  {
    type: 'input',
    message: 'Enter your project DESCRIPTION:',
    name: 'projectDescription'
  },
  {
    type: 'input',
    message: 'Give instructions on how to INSTALL the project:',
    name: 'projectInstall'
  },
  {
    type: 'input',
    message: 'Give instructions on how to USE the project:',
    name: 'projectUsage'
  },
  {
    type: 'list',
    message: 'Enter your project LICENSE:',
    name: 'projectLicense',
    choices: ['Apache License 2.0', 'MIT License', 'GNU General Public License v3.0']
  },
  {
    type: 'input',
    message: 'Give instructions on how to CONTRIBUTE to the project:',
    name: 'projectContributions'
  },
  {
    type: 'input',
    message: 'Give instructions on how to TEST the project:',
    name: 'projectTest'
  },
  {
    type: 'input',
    message: 'Enter your GitHub USERNAME:',
    name: 'projectUsername'
  },
  {
    type: 'input',
    message: 'Enter your EMAIL:',
    name: 'projectEmail'
  },
]).then(responses => {
  console.log(responses)

  fs.writeFile('writtenREADME.md', renderREADME(responses), (err) =>
  err ? console.error(err) : console.log('Done!')
  );
})


function renderREADME(data) {
 return `# ${data.projectTitle}
${licensePick(data.projectLicense)}

## Description
    ${data.projectDescription}

## Table Of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation <a id="installation"></a>
    ${data.projectInstall}

## Usage <a id="usage"></a>
    ${data.projectUsage}

## License <a id="license"></a> 
    This application is covered under the ${data.projectLicense}. Click the license badge at the top of the page for more info.

## Contributing <a id="contributing"></a>
    ${data.projectContributions}

## Tests <a id="tests"></a>
    ${data.projectTest}

## Questions <a id="questions"></a>
- Github Username: [${data.projectUsername}](https://github.com/${data.projectUsername})
- Email with any questions: [${data.projectEmail}](${data.projectEmail})`
}



const appache = "[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
const mit = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
const gpl = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"

function licensePick(license) {
  if (license === 'Apache License 2.0') {
    return appache;
  } else if (license === 'MIT License') {
    return mit;
  } else {
    return gpl;
  }
}

/*
# Example README to follow
# Document Title
    Description here

## Table Of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)

## Installation <a id="installation"></a>
    What steps are required to install my project

## Usage <a id="usage"></a>
    Provide instructions and examples for use.

## License <a id="license"></a>
    A badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

## Contributing <a id="contributing"></a>
    Contribution guidelines

## Tests <a id="tests"></a>
    Testing instructions

## Questions <a id="questions"></a>
   - Github Username: [bpavlis](https://github.com/bpavlis)
   - Email with any questions: [fakeemail@gmail.com](fakeemail@gmail.com)
*/
