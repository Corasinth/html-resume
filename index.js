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
  {
    type: "input",
    message: "What's skills did you gain? (seperate by comma)",
    name: "skillsGained"
  },
];

(async function promptUser() {
  var response = await inquirer.prompt(questions);
  var htmlStr = generateHTML(response);
  fs.writeFile("index.html", htmlStr, (err) => {
    err ? console.error(err) : console.log("Successfully saved!");;
  })
})()

function generateHTML(data){
  var skillsGainedArray = data.skillsGained.split(",")
  var skillsGainedString
  for (let i = 0; i<skillsGainedArray.length; i++) {
    skillsGainedString += `<li>${skillsGainedArray[i]}</li>`
  }
  var generatedString = `<!DOCTYPE html>
  <html lang='en'>
  <head>
      <meta charset='UTF-8'/>
      <meta http-equiv='X-UA-Compatible' content='IE=edge'/>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
      <title>HTML Resume</title>
  </head>
  <body>
    <h1 id="name">${data.name}</h1>
    <h1 id="location">Location</h1>
    <p>${data.location}</p>
    <h1 id="bio">Bio</h1>
    <p>${data.bio}</p>
    <h1 id="Contact">Contact</h1>
    <p>${data.linkedin} | ${data.github} | ${data.email}</p>
    <h1 id="skills"></h1>
    <p>${data.skills}</p>
    <h1 id="work-experiance"></h1>
    <h2>${data.experience}</h2>
    <ul>
      ${skillsGainedString}
    </ul>
  </body>
  </html>`
  return generatedString;
}