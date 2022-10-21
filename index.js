const fs = require("fs");
const inquirer = require("inquirer");

inquirer([
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