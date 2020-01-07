"use strict";

const inquirer = require("inquirer");
const chalk = require("chalk");
const boxen = require('boxen');
const data = require("./data.json");

// add response color
const response = chalk.bold.blue;

const resumeOptions = {
  type: "list",
  name: "resumeOptions",
  message: "Want to know more about me?",
  choices: [...Object.keys(data), "Exit"]
};

function showHeader() {
  const style = {
    padding: 1,
    borderStyle: 'double'
  };
  const name      = `Hi! I am ${chalk.bold("Ahmad Fahmi Pratama")}`;
  const desc      = "Engineer x Designer x Full-time noodle eater";
  const text      = `${name}\n${desc}`;
  console.log(boxen(text, style));
  console.log();
}

function showContacts() {
  const linkedin  = `linkedin: ${chalk.black.bgCyan(" linkedin.com/in/ahmadfahmipratama ")}`;
  const repo      = `github:   ${chalk.black.bgMagenta(" github.com/ahmadfahmip ")}`;
  const email     = `email:    ${chalk.black.bgGreen(" ahmad.fahmi.pratama@gmail.com ")}`;
}

function showResume() {
  // console.log("Hello, this is my resume");
  showHeader();
  handleResume();
}

function handleResume() {
  inquirer.prompt(resumeOptions).then(answer => {
    if (answer.resumeOptions == "Exit") return;

    const options = data[`${answer.resumeOptions}`]
    if (options) {
      console.log(response(new inquirer.Separator()));
      options.forEach(info => {
        console.log(response("|   => " + info));
      });
      console.log(response(new inquirer.Separator()));
    }

    inquirer
      .prompt({
        type: "list",
        name: "exitBack",
        message: "Go back or Exit?",
        choices: ["Back", "Exit"]
      }).then(choice => {
        if (choice.exitBack == "Back") {
          handleResume();
        } else {
          return;
        }
      });
  }).catch(err => console.log('Ooops,', err))
}

showResume();