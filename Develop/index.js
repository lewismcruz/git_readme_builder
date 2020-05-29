const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// process.argv[2] takes input from user at the terminal at 
// element 2 of array

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([

    //inquirer   --- don't need if defining as a function
    //    .prompt([

    {
      type: "input",
      name: "gitUsername",
      message: "What is your GitHub user name?"
    
    },
    {
      type: "input",
      name: "description",
      message: "How would you describe your project?"
    
    },
    {
      type: "input",      
      name: "",
      message: "What would you like your bio to say?"
    
    },
    {
      type: "input",
      name: "linkedInURL",
      message: "Enter your LinkedIn URL here:"
    
    },
    {
      type: "input",
      name: "githubURL",
      message: "Enter your GitHub account URL here:"
    
    }
  ]);
}
//.then(function(response) {
    // Output of user inputs    
   // console.log(response);
  


  //  fs.writeFile("portfolio.html", , function(err) {

       
      

    // fs.writeFile(response);

  
  //}
    
function generateHTML(userResponses){
    
    // Decided to use the wording provided in the Good Readme reference guide on the class repo.  

    return`
    # ${userResponses.projectTitle}

    ## Description 

    -**The following is taken from the Trilogy Good Readme Guide.  This content is provided as a reference only.  Be sure to update or edit and customize the content of your README.md file to your specfic project.**_

    Your GitHub profile is an extremely important aspect of your public identity as a developer. A well-crafted one allows you to show off your work to other developers as well as potential employers. An important component of your GitHub profile—and one that many new developers often overlook—is the README.md file.

    The quality of a README often differentiates a good project from a bad project. A good one takes advantage of the opportunity to explain and showcase what your application does, justify the technologies used, and even talk about some of the challenges you faced and features you hope to implement in the future. A good README helps you stand out among the large crowd of developers putting their work on GitHub.

    There's no one right way to structure a good README. There is one very wrong way, however, and that is to not include a README at all or to create a very anemic one. This guide outlines a few best practices. As you progress in your career, you will develop your own ideas about what makes a good README.

    At a minimum, your project README needs a title and a short description explaining the what, why, and how. What was your motivation? Why did you build this project? (Note: The answer is not "Because it was a homework assignment.") What problem does it solve? What did you learn? What makes your project stand out? If your project has a lot of features, consider adding a heading called "Features" and listing them here.

    If you're new to Markdown, read the GitHub guide on [Mastering Markdown](https://guides.github.com/features/mastering-markdown/).

    If you need an example of a good README, check out [the VSCode repository](https://github.com/microsoft/vscode).

    ## Table of Contents (Optional)

    If your README is very long, add a table of contents to make it easy for users to find what they need.

    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)


    ## Installation

    What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.


    ## Usage 

    Provide instructions and examples for use. Include screenshots as needed. 


    ## Credits

    List your collaborators, if any, with links to their GitHub profiles.

    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

    If you followed tutorials, include links to those here as well.
 
    
    ## License

    The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)


    ---

    🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.


    ## Badges

    ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

    Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


    ## Contributing

    If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.


    ## Tests

    Go the extra mile and write tests for your application. Then provide examples on how to run them.`;
}

promptUser()
 .then(function(userResponses) {
   const mdFile = generateHTML(userResponses);
   return writeFileAsync("readme.md", mdFile);
 })
 .then(function(){
     console.log("Successfully wrote to readme.md");
 })
 .catch(function(error) {
     console.log(error);
 }); // not sure where bracket should go to make semicolon error go away. Look at scope/*

