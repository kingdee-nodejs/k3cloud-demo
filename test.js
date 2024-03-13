const K3CloudApiSdk = require("@kingdee-nodejs/k3cloud");

// ------------------------------------------------------------
// 1、配置参数
// ------------------------------------------------------------
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
let client = new K3CloudApiSdk(config);

// ------------------------------------------------------------
// 2、调用API
// ------------------------------------------------------------
postData = {
  FormId: "BD_MATERIAL", // 业务对象表单Id【必填】
};
client
  .queryBusinessInfo(postData)
  .then((resp) => {
    // ------------------------------------------------------------
    // 3、打印API返回结果
    // ------------------------------------------------------------
    console.log(JSON.stringify(resp));
  })
  .catch((error) => {
    console.log(error);
  });
