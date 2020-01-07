"use strict";

const inquirer = require("inquirer");
const chalk = require("chalk");
const boxen = require('boxen');
const data = require("./data.json");

const choices = [
  "Education",
  "Experiences",
  "Contacts",
  "Exit"
]

const resumeOptions = {
  type: "list",
  name: "resumeOptions",
  message: "Want to know more about me?",
  choices
};

function showHeader() {
  const style = {
    padding: 1,
    borderStyle: 'double'
  };
  const name      = `Hi! I am ${chalk.bold("Ahmad")} ${chalk.bold.cyan("Fahmi")} ${chalk.bold("Pratama")}`;
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
  showHeader();
  handleResume();
}

function showEducation() {
  console.log();
  console.log(`${chalk.cyan.underline.bold('Bandung Institute of Technology')}, ${chalk.bold('B.Eng')}`);
  console.log(`|>  Major      : ${chalk.bold('Computer Science')}`);
  console.log(`|>  Graduation : ${chalk.bold('2020 (expected)')}`);
  console.log(`|>  Activities : ${chalk.bold('Teaching assistant')}`);
  console.log(`                 ${chalk.bold('Head of UX community')}`)
  console.log(`                 ${chalk.bold('Freelance developer')}`)
  console.log();
}

function showExperiences() {
  console.log();
  data["Experiences"].map(d => {
    console.log(chalk.bold.underline.magenta(d.title));
    console.log(`|>  ${d.period}`);
  });
  console.log(`\nWant to know more? ${chalk.cyan.bold('find my LinkedIn on "Contacts"')}\n`);
}

function handleResume() {
  inquirer.prompt(resumeOptions).then(answer => {
    if (answer.resumeOptions == "Exit") return;

    switch (answer.resumeOptions) {
      case "Exit":
        return;
      case "Education":
        showEducation();
        break;
      case "Experiences":
        showExperiences();
        break;
      default:
        break;
    }

    handleResume();

  }).catch(err => console.log('Ooops,', err))
}

showResume();