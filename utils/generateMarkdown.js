// function to generate markdown for README
function generateMarkdown(response) {
    return `# ${response.title}

## Description 

${response.description}

## Table of Contents (Optional)



* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [Credits](#credits)
* [License](#license)
* [Questions](#questions)

## Installation

${response.installation}

## Usage 

${response.usage}  


## Credits

${response.credits} 


## License
[License](https:/opensource.org/licenses/${response.license}

## Description
${response.description}






## Badges
![License](https://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")





## Contribution
${response.contribution} 


## Test
${response.test}






  `;
  }
  
  module.exports = generateMarkdown;
  