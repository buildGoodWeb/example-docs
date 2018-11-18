
---
id: custom-blog
title: Custom Blog
---

# 打造静态博客

## 使用的第三方模块
- commander 提供命令行参数
- express 提供 web 服务
- serve-static 静态文件服务中间件
- markdown-it 支持 Markdown 格式文档
- swig node 模版
- rd 遍历目录下的文件，包括子目录
- fs-extra 扩展 fs 模块用法
- open 打开指定文件或者网址
- moment

## 命令
- `myblog create [dir]` 创建一个空的博客
- `myblog build [dir] [--output target]` 生成静态 HTML 页面, target 表示静态博客所在目录
- `mybloh preview [dir]` 预览

## 命令行工具
Node.js 中，可以通过 process.args 变量来取得当前程序启动时的参数，它是一个数组。
```bash
node test.js build xxx
# args
['node', 'test.js', 'build', 'xxx']
```
在 package.json 中增加 bin 属性：
```json
{
  "bin": {
    "myblog": "./bin/filename"
  }
}
```
bin 属性用来指定当前模块需要链接的命令。为了让这个设置生效，需要执行：
```bash
npm link
```

## 实时预览
```bash
myblog preview
```
- express 启动 web 服务，router 指定
- serve-static 指定静态资源目录
- markdown-it markdown to html
- swig 将 posts/xxx.md 中指定的数据通过 swig 模版渲染到界面