const { deepStrictEqual } = require("assert");
const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type:"input",
            message:"Please, enter your name:",
            name:"userName",
        },
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
            message:"Please, provide your github project name:",
            name:"test",
        },
        {
            type:"input",
            message:"Plase, enter your GitHub user name:",
            name:"githubUserName",
        },
        {
            type:"input",
            message:"Please, provide your linkdIn url:",
            name:"test",
        }, 
        {
            type:"input",
            message:"Please, enter your email:",
            name:"userEmail",
        },
        {
            type:"input",
            message:"Any message:",
            name:"test",
        }, 
    ])
    .then((responses)=> {
        console.log(responses);
        // const readMeFile = generateREAD(responses);

        // fs.writeFile("README.md", generateREAD,(err) => {
        //     if(err) {
        //         throw err;
        //     }
        //     console.log("README.MD Successfully created")
        // })
    });
  

