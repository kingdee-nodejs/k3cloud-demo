## kingdee-nodejs/k3cloud-demo

## 介绍

一个 [kingdee-nodejs/k3cloud](https://github.com/kingdee-nodejs/k3cloud) 的 Demo

## 使用例

- 1、准备

  ```shell
  $ git clone git@github.com:kingdee-nodejs/k3cloud-demo.git
  $ cd k3cloud-demo
  $ npm install
  ```

- 2、配置（写入 K3Cloud 服务器相关参数）

  ```shell
  $ vi test.js

  ...
  config = {
    auth_type: 3, // 授权类型：1 用户名+密码；2 第三方授权应用ID+应用密钥；3 签名；
    host_url: "http||https://xxxxxxxxxxxxxxxxx/k3cloud/", // 金蝶授权请求地址
    acct_id: "xxxxxxxxxx", // 账户ID
    username: "xxxxxxxxxx", // 用户名（授权类型为1时必须）
    password: "xxxxxxxxxx", // 密码（授权类型为1时必须）
    appid: "xxxxxxxxxx", // 应用ID（授权类型为2或3时必须）
    appsecret: "xxxxxxxxxx", // 应用Secret（授权类型为2或3时必须）
    lcid: 2052, // 账套语系，默认2052
  };
  ...
  ```

- 3、运行

  ```shell
  $ node test.js
  ```

- 4、确认
  ```json
  {"Result":{"ResponseStatus":{"IsSuccess":true,"Errors":[],"SuccessEntitys":[],"SuccessMessages":[],"MsgCode":0},"NeedReturnData":{"Id":"BD_MATERIAL","Name":[{"Key":2052,"Value":"物料"}], ...
  ```

## 相关资料

- 金蝶云星空 API 文档
  - https://openapi.open.kingdee.com/ApiDoc
- 金蝶云星空 Wiki
  - https://help.open.kingdee.com
- 金蝶云星空 社区
  - https://vip.kingdee.com/?productId=1
