const { deepStrictEqual } = require("assert");
const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type:"input",
            message:"Please, enter your name",
            name:"test",
        },
        {
            type:"input",
            message:"Please, enter your project name",
            name:"test",
        },
        {
            type:"input",
            message:"Plase, enter your GitHub user name",
            name:"test",
        },
        {
            type:"input",
            message:"Please, enter your email",
            name:"test",
        },    {
            type:"input",
            message:"Any message",
            name:"test",
        }, 
    ])
    .then((responses)=> {
        const readMeFile = generateREAD(responses);

        fs.writeFile("README.md", generateREAD,(err) => {
            if(err) {
                throw err;
            }
            console.log("README.MD Successfully created")
        })
    });
  

