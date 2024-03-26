#! /usr/bin/env node



import inquirer from "inquirer"
const randomNumber=15
const answer = await inquirer.prompt([
    {
    name:"userGuessnumber",
    type:"number",
    message:"please guess a number",  
},
]);
if (answer.userGuessnumber===randomNumber){console.log("congratulation");}
else{console.log("wrong number");}