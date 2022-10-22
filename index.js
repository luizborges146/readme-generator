const { deepStrictEqual } = require("assert");
const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
        // USer information /////////////////////////////////////////////////////////
        {
            type:"input",
            message:"Please, enter your name:",
            name:"userName",
        },
        {
            type:"input",
            message:"Plase, enter your GitHub user name:",
            name:"githubUserName",
        },
        {
            type:"input",
            message:"Please, provide your linkdIn url:",
            name:"linkdinUrl",
        },
        {
            type:"input",
            message:"Please, enter your email:",
            name:"userEmail",
        },
        //GitHub Information ////////////////////////////////////////////////////////
        {
            type:"input",
            message:"Please, enter your project name:",
            name:"projectName",
        },
        {
            type:"input",
            message:"Please enter your project description:",
            name:"projectDescription",
        }, 
        {
            type:"input",
            message:"Please, provide your GitHub repo name:",
            name:"githubRepoName",
        },
        // Table of contents extra infomration/////////////////////////////////////////////
        {
            type:"list",
            message:"Does your project needs to be tested",
            name:"tester",
            choice:["N/A", "Yes"]
        }, 
        {
            type:"list",
            message:"Does your project has Plug-ins",
            name:"plugins",
            choice:["N/A", "Yes"]
        }, 
        {
            type:"list",
            message:"Please select a licence",
            name:"license",
            choice:["Apache", "BSD"]
        }
    ])
    .then((responses)=> {
        console.log(responses);
        const readMeFile = generateREAD(responses);

        fs.writeFile("README.md", readMeFile,(err) => {
            if(err) {
                throw err;
            }
            console.log("README.MD Successfully created")
        })
    });



  



const generateREAD = (responses) =>
`
# ${responses.projectName}
Link to [GitHub repository](https://github.com/${responses.githubUserName}/${responses.githubRepoName})
    
## Table of Contents
    
1.  [Description](#description)
2.  [Instalation](#instalation)
3.  [Usage Infomration](#usage)
4.  [External support documentation](#externalDoc)
5.  [Tests](#tests)
6.  [Social](#social)
7.  [Plugins](#plugins)
8.  [License](#license)
    
## [Description](#description)
${responses.projectDescription}
    
    
## [Instalation](#instalation)
    
    
## [Usage](#usage)
    

## [External support documentation](#externalDoc)
    

- [W3School](https://www.w3schools.com/)<br />
- [Mozilla](https://developer.mozilla.org)<br />
- [READ.me](https://docs.readme.com/docs/linking-to-pages")<br />
- [GitHub](https://pages.github.com/)<br />
- [GitHub Inquirer](https://github.com/SBoudrias/Inquirer.js/blob/master/README.md#installation)
- [Git_cheat_sheet_pdf](https://education.github.com/git-cheat-sheet-education.pdf)<br />
- [npm](https://www.npmjs.com/)
    
    
## [Tests](#tests)
${responses.tester}
    
## [Social](#social)
if you need any further information or support, please, send an email to: ${responses.userEmail}
    
[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/${responses.githubUserName}) [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg' alt='linkedin' height='40'>](${responses.linkdinUrl})
    
    
    
## [Plugins](#plugins)
N/A
    
## [License](#license)
Created by ${responses.userName}
Please refer to the LICENSE in the repo.
`;

