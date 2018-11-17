var express = require('express');
var serveStatic = require('serve-static');
var path = require('path');
var chalk = require('chalk');
var open = require('open');
var utils = require('./utils');

module.exports = function (dir) {
  // 指定一个目录，默认为当前目录
  dir = dir || '.';

  // 初始化 Express
  var app = express();
  var router = express.Router();

  // 静态资源文件
  app.use('/asserts', serveStatic(path.resolve(dir, 'asserts')));
  app.use(router);

  // 渲染文章
  router.get('/posts/*', function (req, res, next) {
    var name = utils.stripExtname(req.params[0]);
    var file = path.resolve(dir, '_posts', name + '.md');
    var html = utils.renderPost(dir, file);
    res.send(html);
  });

  // 渲染列表
  router.get('/', function (req, res, next) {
    var html = utils.renderIndex(dir);
    res.send(html);
  });

  var config = utils.loadConfig(dir);
  var port = config.port || 4000;
  var url = 'http://127.0.0.1:' + port;
  app.listen(port);
  console.log (chalk.green ('listening ' + port));
  open(url);
};
