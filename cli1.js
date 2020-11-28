#!/usr/bin/env node

const inquirer = require('inquirer'); // 用于与命令行交互
const fs = require('fs');
const path = require('path');

inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'file name?'
  }
])
.then(anwsers => {
  // 1.根据用户输入：得到文件名和文件夹路径（用户命令路径）
  const fileName = anwsers.name;
  const dirPath = process.cwd();
  // 2.计算得到文件路径
  const filePath = path.join(dirPath, fileName + '.txt');
  // 3.创建文件
  fs.writeFileSync(filePath, 'xxx');
})