// .envを読み出せるようにライブラリの読み込み
require("dotenv").config();

/**
 * secret: 秘密鍵
 * algorithm: 暗号化方式
 * expiresIn: 有効期限
 */
module.exports = {
  jwt: {
    secret: process.env.SECRET_KEY,
    options: {
      algorithm: "HS256",
      expiresIn: "1d",
    },
  },
};
