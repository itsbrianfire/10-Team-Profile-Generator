const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');

const template = require('./src/page-template');
const DIST_DIR = path.resolve(__dirname, 'dist');
const output = path.join(DIST_DIR, 'index.html');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const team = [];

function teamMembers() {

  function manager() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'managerName',
        message: `Please enter Manager's name:`,
      },
      {
        type: 'input',
        name: 'managerId',
        message: `Please enter Manager's ID:`,
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: `Please enter Manager's email:`,
      },
      {
        type: 'input',
        name: 'managerNumber',
        message: `Please enter Manager's office phone number:`,
      }
    ])

      .then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        team.push(manager);
        createTeam();
      });
  }

  function createTeam() {
    inquirer
      .prompt([
        {
          type: 'list',
          message: 'Would you like to add the following team members?',
          name: 'memberChoice',
          choices: [
            'Engineer',
            'Intern',
            'No more to add.',
          ],
        },
      ])
      .then((userChoice) => {
        switch (userChoice.memberChoice) {
          case 'Engineer':
            addEngineer();
            break;
          case 'Intern':
            addIntern();
            break;
          default:
            generateHTML();
      }
    });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: `Please enter Engineer's name:`,
          name: 'engineerName',
         },
         {
           type: 'input',
           name: 'engineerId',
           message: `Please enter Engineer's ID:`
         },
         {
           type: 'email',
           message: `Please enter Engineer's email:`,
           name: 'engineerEmail',
         },
         {
           type: 'github',
           message: `Please enter Engineer's GitHub username:`,
           name: 'engineerGitHub',
         },
       ])
      .then((answers) => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
        team.push(engineer);
        createTeam();
    });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: 'input',
           message: `Please enter Intern's name:`,
           name: 'internName',
        },
        {
          type: 'input',
          name: 'internId',
          message: `Please enter Intern's ID:`
        },
        {
          type: 'email',
          message: `Please enter Intern's email:`,
          name: 'internEmail',
        },
        {
          type: 'github',
          message: `Please enter Intern's school:`,
          name: 'internSchool',
        },
      ])
      .then((answers) => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        team.push(intern);
        createTeam();
      });
  }

  function generateHTML(){
    fs.writeFileSync(output, template(team), "utf-8");
  }
  manager();
}  

teamMembers();