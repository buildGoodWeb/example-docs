#!/usr/bin/env node

var program = require('commander');

// 命令版本号
program.version('0.0.1');

// help 命令
program
  .command('help')
  .description('显示使用帮助')
  .action(function() {
    program.outputHelp();
  });

// create 命令
program
  .command('create [dir]')
  .description('创建一个空的博客')
  .action(function (dir) {
    console.log('create %s', dir);
  });

// preview 命令
program
  .command('preview [dir]')
  .description('实时预览')
  .action(require('../lib/cmd_preview'));

// build 命令
program
  .command('build [dir]')
  .description('生成整站静态 HTML')
  .option('-o, --output <dir>', '生成的静态 HTML 存放目录')
  .action(function (dir, options) {
    console.log('create %s, output %s', dir, options.output);
  });

// 开始解析命令
program.parse(process.argv);