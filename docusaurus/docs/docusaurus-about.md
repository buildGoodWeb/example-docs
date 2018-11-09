---
id: docusaurus-about
title: Docusaurus About
---

- website: https://docusaurus.io

## 运行
```bash
cd website
docker-compose up
```

## build gh-page
```bash
GIT_USER=xxx \
  CURRENT_BRANCH=master \
  USE_SSH=true \
  yarn run publish-gh-pages
```