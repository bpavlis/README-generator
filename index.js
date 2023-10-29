/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/




// // TODO: Include packages needed for this application
// const inquirer = require('inquirer');
// const fs = require('fs');

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

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
    ${data.projectLicense}

## Contributing <a id="contributing"></a>
    ${data.projectContributions}

## Tests <a id="tests"></a>
    ${data.projectTest}

## Questions <a id="questions"></a>
- Github Username: [${data.projectUsername}](https://github.com/${data.projectUsername})
- Email with any questions: [${data.projectEmail}](${data.projectEmail})`
}

