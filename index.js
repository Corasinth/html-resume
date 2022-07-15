const fs = require("fs");
const inquirer = require("inquirer");

var questions = [
  {
    type: "input",
    message: "What's your name?",
    name: "name"
  },
  {
    type: "input",
    message: "What's your location?",
    name: "location"
  },
  {
    type: "input",
    message: "What's your bio?",
    name: "bio"
  },
  {
    type: "input",
    message: "What's your Linkedin URL?",
    name: "linkedin"
  },
  {
    type: "input",
    message: "What's your Github URL?",
    name: "github"
  },
  {
    type: "input",
    message: "What's your email?",
    name: "email"
  },
  {
    type: "input",
    message: "What are your skills?",
    name: "skills"
  },
  {
    type: "input",
    message: "What's your work experience?",
    name: "experience"
  },
];

async function promptUser() {
  var response = await inquirer.prompt(questions);
  var htmlStr = generateHTML(response);
  fs.writeFile("index.html", htmlStr, (err) => {
    err ? console.error(err) : console.log("Successfully saved!");;
  })
}

function generateHTML(data){
  return;
}