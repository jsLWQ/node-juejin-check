const dayjs = require('dayjs');
const chalk = require('chalk');
const fs = require('fs');
const configPath = './config.json';

// 打印
const log = (message, isError = false) => {
  if (isError) {
    console.log(chalk.red(dayjs().format('YYYY-MM-DD HH:mm:ss'), message));
  } else {
    console.log(chalk.blue(dayjs().format('YYYY-MM-DD HH:mm:ss'), message));
  }
}

// 获取配置
const getConfig = () => {
  return JSON.parse(fs.readFileSync(configPath));
}

module.exports = {
  log,
  getConfig
}
