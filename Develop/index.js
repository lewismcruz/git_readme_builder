/*

The user will be prompted for their GitHub username and other information pertaining to the project the README is for.

The README will be populated with the following:

* At least one badge
* Project title
* Description
* Table of Contents
* Installation
* Usage
* License
* Contributing
* Tests
* Questions
  * User GitHub profile picture
  * User GitHub email





*/




var inquirer = require("inquirer");






const questions = [
        {
          type: "nameinput",
          message: "What is your Github username?",
          name: "username"
        },
        {
          type: "readmetitle",
          message: "What would you like your README title to be?",
          name: "readmetitle"
        },
        {
          type: "purpose",
          message: "What is the purpose of your application or project?",
          name: "purpose"
        }
        {
          type: "description",
          message: "Describe your project:",
          name: "steps"
        }
        {
          type: "purpose",
          message: "What is the purpose of your application or project?",
          name: "purpose"
        }
        {
          type: "Githubpic",
          message: "What is the link to your Github photo?",
          name: "Githubpic"
        }

];
.then(function(response) {

    if (response.confirm === response.username) {
      console.log("Success!");
    }
    else {
      console.log("Please provide your response to the question.");
    }
  });


function writeToFile(fileName, data) {
}

function init() {

}

init();


var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username"
    },
    {
      type: "password",
      message: "What is your password?",
      name: "password"
    },
    {
      type: "password",
      message: "Re-enter password to confirm:",
      name: "confirm"
    }
  ])
  .then(function(response) {

    if (response.confirm === response.password) {
      console.log("Success!");
    }
    else {
      console.log("You forgot your password already?!");
    }
  });
