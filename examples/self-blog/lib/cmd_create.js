var path = require('path');
var utils = require('./utils');
var fse = require('fs-extra');
var moment = require('moment');

module.exports = function (dir) {
  dir = dir || '.';

  // 创建基本目录
  fse.mkdirsSync(path.resolve(dir, '_layout'));
  fse.mkdirsSync(path.resolve(dir, '_posts'));
  fse.mkdirsSync (path.resolve (dir, 'asserts'));
  fse.mkdirsSync (path.resolve (dir, 'posts'));

  // 复制模版文件
  var tplDir = path.resolve(__dirname, '../tpl');
  fse.copySync(tplDir, dir);

  var postMessage = {
    id: 'hello-world',
    title: 'hello, world',
    content: '这是我的第一篇文章'
  }

  // 创建第一篇文章
  newPost(dir, postMessage);

  console.log('OK');
}

// 创建一篇文章
function newPost (dir, { id, title, content }) {
  var data = [
    '---',
    'title: ' + title,
    'date: ' + moment().format('YYYY-MM-DD'),
    '---',
    '',
    content
  ].join('\n');
  var name = moment().format('YYYY-MM') + '/' + id + '.md';
  var file = path.resolve(dir, '_posts', name);
  fse.outputFileSync(file, data);

}