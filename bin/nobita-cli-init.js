#!/usr/bin/env node

const download = require('../lib/download')
const inquirer = require('inquirer')


inquirer.prompt([
  {
    name: 'projectName',
    message: '请输入项目名称(nobita-demo)'
  }
]).then(answers => {
  download(answers.projectName)
    .then(target => console.log(target))
    .catch(err => console.log(err))
})

