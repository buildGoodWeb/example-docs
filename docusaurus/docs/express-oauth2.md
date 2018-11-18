---
id: express-oauth2
title: OAuth2 with express
---

## REST API
REST(Representational State Transfer) 表述性状态传递。主要约束：
- 客户-服务器（Client-Server）：通信只能由客户端单方面发起。表现为请求-响应形式
- 无状态（Stateless）：通信的回话状态（Session State）应该全部由客户端负责维护
- 缓存（Cache）：响应的内容可以在通信链的某处被缓存，改善网络效率
- 统一接口（Uniform Interface：通信链的组件之间通过统一接口相互通信。
- 分成系统（Layered System）：通过限制组件的行为，将架构分解成若干等级的层
- 按需代码（Code-On-Demand）
REST 使用了 CRUD 原则
---
行为: HTTP Request
Create: POST
Read: GET
Update: PUT
Delete: DELETE
---